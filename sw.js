/* Kotonoha：オフラインでも開けるようにするための Service Worker
   - アプリ本体（index.html など）：まずネットから取り、だめなら（または4秒待っても来なければ）保存してあるものを使う。
     → ネットにつながっていれば、いつも最新版になる。
   - フォント：一度取ったら保存したものを使う。
   - メール送信（POST）や、ほかのサイトへの通信にはさわらない。 */
const CACHE = "kotonoha-shell-v1";
const SHELL = ["./", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).catch(() => {}).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

function networkFirst(req){
  return caches.open(CACHE).then(cache => {
    const cached = () => cache.match(req, {ignoreSearch:true}).then(r => r || (req.mode === "navigate" ? cache.match("./") : undefined));
    const net = fetch(req).then(res => { if(res && res.ok) cache.put(req, res.clone()); return res; });
    const slow = new Promise(r => setTimeout(r, 4000)).then(cached);
    return Promise.race([net.catch(() => undefined), slow])
      .then(r => r || cached())
      .then(r => r || net);
  });
}
function cacheFirst(req){
  return caches.open(CACHE).then(cache => cache.match(req).then(r => r || fetch(req).then(res => {
    if(res && (res.ok || res.type === "opaque")) cache.put(req, res.clone());
    return res;
  })));
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if(req.method !== "GET") return;
  const url = new URL(req.url);
  if(url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com"){ e.respondWith(cacheFirst(req)); return; }
  if(url.origin === self.location.origin) e.respondWith(networkFirst(req));
});
