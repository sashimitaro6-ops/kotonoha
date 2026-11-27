/* ことばのリスト（日常の単語。やさしすぎる語・ポルトガル語や英語から分かるカタカナ語・やさしい語をつないだだけの句は入れない。「～する」の動詞は名詞の意味に入れる）。
   1行に1語：ことば|よみ（かなだけのことばは空）|ポルトガル語|品詞（n 名詞・v 動詞・i い形容詞・na な形容詞・adv 副詞・x その他）
   「#」の行はカテゴリーの見出し：#日本語|ポルトガル語（ふるい分けはカテゴリーごと、1回50語）
   - 記録は「ことば」（1列目）にひもづくので、ことばの書き方は変えない。意味・よみ・順番・カテゴリーは直してよい。
   - 同じことばを2回入れない。 */
const VOCAB_TXT = `
#あいさつ・言い方|Cumprimentos e expressões
失礼します|しつれいします|com licença (ao entrar/sair)|x
ごちそうさまでした||(depois de comer) obrigado pela refeição|x
いってきます||já vou (ao sair de casa)|x
いってらっしゃい||vá e volte bem|x
ただいま||cheguei (em casa)|x
おかえり||bem-vindo(a) de volta|x
よろしくお願いします|よろしくおねがいします|conto com você / prazer|x
そうですね||pois é / é mesmo|x
なるほど||entendi / faz sentido|x
お疲れ様です|おつかれさまです|bom trabalho / obrigado pelo esforço|x
お先に失礼します|おさきにしつれいします|vou indo na frente (ao sair do trabalho)|x
お大事に|おだいじに|melhoras|x
おめでとうございます||meus parabéns|x
いらっしゃいませ||seja bem-vindo (loja)|x
かしこまりました||entendido (formal, loja)|x
少々お待ちください|しょうしょうおまちください|aguarde um momento, por favor|x
ちょっと待って|ちょっとまって|espera um pouco|x
もう一度|もういちど|mais uma vez|x
ゆっくり||devagar|adv
知りません|しりません|não sei / não conheço|x
どうも||obrigado / oi|x
いいですね||que bom / legal|x
やった||consegui! / oba!|x
よかった||que bom (alívio)|x
残念|ざんねん|que pena|na
仕方ない|しかたない|não tem jeito|i
気をつけて|きをつけて|tome cuidado|x
お元気ですか|おげんきですか|como vai?|x
お久しぶりです|おひさしぶりです|quanto tempo!|x
乾杯|かんぱい|saúde! (brinde)|x
せーの||um, dois, já!|x
もしもし||alô (telefone)|x
あの||é... / com licença|x
えっと||hmm... / deixa eu ver|x
ほら||olha!|x
ねえ||ei / escuta|x
さあ||vamos! / bem...|x
まあまあ||mais ou menos|x
とりあえず||por enquanto / primeiro|adv
楽しかった|たのしかった|foi divertido|x
おいしかった||estava gostoso|x
疲れました|つかれました|estou cansado(a)|x
お腹が痛い|おなかがいたい|estou com dor de barriga|x
頭が痛い|あたまがいたい|estou com dor de cabeça|x
気分が悪い|きぶんがわるい|estou passando mal|x
楽しみにしています|たのしみにしています|estou ansioso(a) por isso|x
会えて嬉しい|あえてうれしい|feliz em te ver|x
気にしないで|きにしないで|não se preocupe|x
無理しないで|むりしないで|não se force|x
心配しないで|しんぱいしないで|não se preocupe|x
大好きだよ|だいすきだよ|te adoro|x
どうしよう||e agora? / o que eu faço?|x
しょうがない||não tem jeito|x
まさか||não acredito! / não pode ser|x
いいよ||pode / tudo bem|x
だめ||não pode / não presta|na
大丈夫です|だいじょうぶです|está tudo bem / não, obrigado|x
結構です|けっこうです|não, obrigado / está bom|x
いりません||não preciso|x
ください||por favor (me dê)|x
これをください||me dê isto, por favor|x
どこですか||onde fica?|x
何ですか|なんですか|o que é?|x
どうしたの||o que houve?|x
どうしましたか||o que aconteceu? (educado)|x
いいですか||pode? / tudo bem?|x
わかった||entendi (informal)|x
了解|りょうかい|entendido / ok|x
また今度|またこんど|fica para a próxima|x
またあとで||até mais tarde|x
すみませんが||desculpe, mas…|x
申し訳ありません|もうしわけありません|sinto muito (formal)|x
恐れ入ります|おそれいります|com licença / agradeço (muito formal)|x
大切にする|たいせつにする|cuidar com carinho / valorizar|v
会える|あえる|poder encontrar|v
待ち遠しい|まちどおしい|mal poder esperar|i
恋しい|こいしい|sentir falta / saudade|i
愛しい|いとしい|querido / amado|i
そばにいる||estar ao lado|v
見守る|みまもる|cuidar / olhar por|v
支え合う|ささえあう|apoiar-se mutuamente|v
抱っこ|だっこ|colo|n
手をつなぐ|てをつなぐ|dar as mãos|v
約束を守る|やくそくをまもる|cumprir a promessa|v
二人の時間|ふたりのじかん|tempo a dois|n
宝物|たからもの|tesouro|n
贈り物|おくりもの|presente|n
花束|はなたば|buquê de flores|n
手作り|てづくり|feito à mão|n
お揃い|おそろい|combinando (iguais)|n
記念写真|きねんしゃしん|foto de recordação|n
思いやり|おもいやり|consideração / carinho|n
笑い声|わらいごえ|risada|n
寝顔|ねがお|rosto dormindo|n
ありのまま||do jeito que é|n
いつまでも||para sempre|adv
これからも||de agora em diante também|adv
ずっと前から|ずっとまえから|desde muito tempo|adv
ようこそ||bem-vindo(a)|x
日本へようこそ|にほんへようこそ|bem-vinda ao Japão|x
おかえりなさい||bem-vinda de volta|x
一緒にいよう|いっしょにいよう|vamos ficar juntos|x
新しい生活|あたらしいせいかつ|vida nova|n
第一歩|だいいっぽ|primeiro passo|n
#人・家族・恋愛|Pessoas, família e amor
僕|ぼく|eu (masculino)|n
彼氏|かれし|namorado|n
みんな||todos|n
自分|じぶん|si mesmo / eu mesmo|n
父|ちち|(meu) pai|n
母|はは|(minha) mãe|n
両親|りょうしん|pais|n
兄|あに|(meu) irmão mais velho|n
姉|あね|(minha) irmã mais velha|n
弟|おとうと|irmão mais novo|n
妹|いもうと|irmã mais nova|n
お兄さん|おにいさん|irmão mais velho|n
お姉さん|おねえさん|irmã mais velha|n
兄弟|きょうだい|irmãos|n
祖父|そふ|(meu) avô|n
祖母|そぼ|(minha) avó|n
おじいさん||avô / senhor idoso|n
おばあさん||avó / senhora idosa|n
おじさん||tio / senhor|n
おばさん||tia / senhora|n
いとこ||primo(a)|n
孫|まご|neto(a)|n
夫|おっと|(meu) marido|n
妻|つま|(minha) esposa|n
主人|しゅじん|marido|n
奥さん|おくさん|esposa (de outra pessoa)|n
旦那さん|だんなさん|marido (de outra pessoa)|n
息子|むすこ|filho|n
娘|むすめ|filha|n
赤ちゃん|あかちゃん|bebê|n
親|おや|pais / pai ou mãe|n
親戚|しんせき|parentes|n
義理の母|ぎりのはは|sogra|n
義理の父|ぎりのちち|sogro|n
夫婦|ふうふ|casal (casado)|n
恋人|こいびと|namorado(a)|n
親友|しんゆう|melhor amigo(a)|n
知り合い|しりあい|conhecido(a)|n
大人|おとな|adulto|n
若者|わかもの|jovem|n
お年寄り|おとしより|idoso(a)|n
外国人|がいこくじん|estrangeiro(a)|n
近所の人|きんじょのひと|vizinho(a)|n
隣の人|となりのひと|pessoa ao lado / vizinho|n
お客さん|おきゃくさん|cliente / visita|n
どなた||quem (educado)|n
名字|みょうじ|sobrenome|n
年|とし|idade / ano|n
誕生日|たんじょうび|aniversário|n
結婚|けっこん|casamento (～する: casar-se)|n
結婚式|けっこんしき|cerimônia de casamento|n
婚約|こんやく|noivado|n
離婚|りこん|divórcio|n
記念日|きねんび|aniversário (data comemorativa)|n
デート||encontro (romântico)|n
指輪|ゆびわ|anel|n
仲間|なかま|companheiro / turma|n
仲良し|なかよし|bons amigos|n
仲直り|なかなおり|fazer as pazes|n
喧嘩|けんか|briga (～する: brigar)|n
片思い|かたおもい|amor não correspondido|n
両思い|りょうおもい|amor correspondido|n
一目惚れ|ひとめぼれ|amor à primeira vista|n
遠距離恋愛|えんきょりれんあい|namoro a distância|n
告白|こくはく|declaração (de amor)|n
婚約者|こんやくしゃ|noivo(a)|n
新婚|しんこん|recém-casado|n
新婚旅行|しんこんりょこう|lua de mel|n
同棲|どうせい|morar junto|n
ずっと一緒|ずっといっしょ|juntos para sempre|x
大切な人|たいせつなひと|pessoa querida|n
相手|あいて|parceiro / o outro|n
お互い|おたがい|um ao outro / mútuo|n
信頼|しんらい|confiança|n
家庭|かてい|lar / família|n
実家|じっか|casa dos pais|n
里帰り|さとがえり|visita à terra natal|n
親孝行|おやこうこう|cuidar bem dos pais|n
家族旅行|かぞくりょこう|viagem em família|n
誕生日会|たんじょうびかい|festa de aniversário|n
お見舞い|おみまい|visita a doente|n
お葬式|おそうしき|funeral|n
お墓|おはか|túmulo|n
法事|ほうじ|cerimônia budista (memorial)|n
仏壇|ぶつだん|altar budista doméstico|n
お正月休み|おしょうがつやすみ|folga de Ano-Novo|n
冬休み|ふゆやすみ|férias de inverno|n
春休み|はるやすみ|férias de primavera|n
性格|せいかく|personalidade|n
優しい|やさしい|gentil / bondoso|i
親切|しんせつ|gentil / prestativo|na
真面目|まじめ|sério / dedicado|na
明るい|あかるい|alegre / claro|i
暗い|くらい|sombrio / escuro|i
厳しい|きびしい|rigoroso|i
頭がいい|あたまがいい|inteligente|i
賢い|かしこい|esperto / inteligente|i
素直|すなお|sincero / obediente|na
正直|しょうじき|honesto|na
わがまま||mimado / egoísta|na
大人しい|おとなしい|quieto / calmo|i
恥ずかしがり屋|はずかしがりや|tímido(a)|n
怠け者|なまけもの|preguiçoso(a)|n
かっこいい||bonito / legal (estiloso)|i
きれい||bonito / limpo|na
美しい|うつくしい|belo|i
若い|わかい|jovem|i
背が高い|せがたかい|alto (pessoa)|i
背が低い|せがひくい|baixo (pessoa)|i
太る|ふとる|engordar|v
痩せる|やせる|emagrecer|v
似ている|にている|parecer-se|v
笑顔|えがお|sorriso|n
#体・健康・病院|Corpo, saúde e hospital
髪|かみ|cabelo|n
髪の毛|かみのけ|cabelo (fios)|n
歯|は|dente|n
舌|した|língua|n
唇|くちびる|lábio|n
首|くび|pescoço|n
喉|のど|garganta|n
肩|かた|ombro|n
胸|むね|peito|n
お腹|おなか|barriga|n
背中|せなか|costas|n
腰|こし|lombar / cintura|n
指|ゆび|dedo|n
爪|つめ|unha|n
腕|うで|braço|n
肘|ひじ|cotovelo|n
膝|ひざ|joelho|n
お尻|おしり|bumbum|n
肌|はだ|pele|n
骨|ほね|osso|n
血|ち|sangue|n
心臓|しんぞう|coração (órgão)|n
胃|い|estômago|n
声|こえ|voz|n
汗|あせ|suor|n
涙|なみだ|lágrima|n
眉毛|まゆげ|sobrancelha|n
まつげ||cílios|n
ひげ||barba / bigode|n
身長|しんちょう|altura (de pessoa)|n
体重|たいじゅう|peso (do corpo)|n
病気|びょうき|doença|n
医者|いしゃ|médico(a)|n
看護師|かんごし|enfermeiro(a)|n
歯医者|はいしゃ|dentista|n
薬|くすり|remédio|n
薬局|やっきょく|farmácia|n
風邪|かぜ|resfriado|n
熱|ねつ|febre|n
咳|せき|tosse|n
鼻水|はなみず|coriza|n
頭痛|ずつう|dor de cabeça|n
腹痛|ふくつう|dor de barriga|n
けが||ferimento / machucado|n
やけど||queimadura|n
花粉症|かふんしょう|alergia a pólen|n
痛い|いたい|dolorido / dói|i
かゆい||coçar / coceira|i
だるい||sem energia / moleza|i
気持ち悪い|きもちわるい|enjoado / nojento|i
吐き気|はきけ|náusea|n
めまい||tontura|n
下痢|げり|diarreia|n
便秘|べんぴ|prisão de ventre|n
寒気|さむけ|calafrio|n
症状|しょうじょう|sintoma|n
診察|しんさつ|consulta médica|n
受付|うけつけ|recepção|n
保険証|ほけんしょう|cartão do seguro saúde|n
健康保険|けんこうほけん|seguro saúde|n
問診票|もんしんひょう|ficha de sintomas|n
予約|よやく|reserva / agendamento (～する: reservar / agendar)|n
検査|けんさ|exame|n
注射|ちゅうしゃ|injeção|n
手術|しゅじゅつ|cirurgia|n
入院|にゅういん|internação|n
退院|たいいん|alta (do hospital)|n
救急車|きゅうきゅうしゃ|ambulância|n
処方箋|しょほうせん|receita médica|n
飲み薬|のみぐすり|remédio oral|n
目薬|めぐすり|colírio|n
湿布|しっぷ|emplastro|n
絆創膏|ばんそうこう|band-aid / curativo|n
体温計|たいおんけい|termômetro|n
妊娠|にんしん|gravidez (～する: engravidar)|n
健康|けんこう|saúde|n
健康診断|けんこうしんだん|check-up|n
治る|なおる|sarar / se curar|v
休む|やすむ|descansar / faltar|v
倒れる|たおれる|cair / desmaiar|v
吐く|はく|vomitar|v
疲れる|つかれる|cansar-se|v
具合|ぐあい|estado (de saúde)|n
調子|ちょうし|condição / estado|n
内科|ないか|clínica geral|n
外科|げか|cirurgia (especialidade)|n
皮膚科|ひふか|dermatologia|n
眼科|がんか|oftalmologia|n
耳鼻科|じびか|otorrino|n
産婦人科|さんふじんか|ginecologia e obstetrícia|n
小児科|しょうにか|pediatria|n
体調|たいちょう|condição física|n
体調が悪い|たいちょうがわるい|não estar bem de saúde|i
風邪をひく|かぜをひく|pegar resfriado|v
熱がある|ねつがある|estar com febre|v
診てもらう|みてもらう|ser examinado (pelo médico)|v
治療|ちりょう|tratamento|n
虫歯|むしば|cárie|n
肩こり|かたこり|ombro tenso / dor nos ombros|n
腰痛|ようつう|dor lombar|n
寝不足|ねぶそく|falta de sono|n
食欲|しょくよく|apetite|n
二日酔い|ふつかよい|ressaca|n
生理|せいり|menstruação|n
骨折|こっせつ|fratura|n
ねんざ||entorse|n
傷|きず|ferida|n
血が出る|ちがでる|sangrar|v
腫れる|はれる|inchar|v
呼吸|こきゅう|respiração|n
息|いき|fôlego / respiração|n
息をする|いきをする|respirar|v
咳をする|せきをする|tossir|v
くしゃみ||espirro|n
あくび||bocejo|n
寝返り|ねがえり|virar-se na cama|n
手を振る|てをふる|acenar|v
振る|ふる|balançar / dar o fora|v
しゃがむ||agachar-se|v
横になる|よこになる|deitar-se|v
伸ばす|のばす|esticar|v
伸びる|のびる|crescer / esticar-se|v
曲げる|まげる|dobrar|v
噛む|かむ|morder / mastigar|v
飲み込む|のみこむ|engolir|v
なめる||lamber|v
吸う|すう|sugar / fumar / inspirar|v
かく||coçar|v
たたく||bater (de leve)|v
なでる||acariciar|v
キス||beijo|n
ハグ||abraço|n
目をつぶる|めをつぶる|fechar os olhos|v
瞬き|まばたき|piscar|n
美容|びよう|beleza (cuidados)|n
化粧品|けしょうひん|cosméticos|n
化粧水|けしょうすい|tônico facial|n
口紅|くちべに|batom|n
香水|こうすい|perfume|n
ネイル||unhas (manicure)|n
爪切り|つめきり|cortador de unha|n
くし||pente|n
髪型|かみがた|penteado / corte|n
前髪|まえがみ|franja|n
パーマ||permanente (cabelo)|n
カラー||coloração (cabelo)|n
髪を染める|かみをそめる|pintar o cabelo|v
乾かす|かわかす|secar (algo)|v
#食べ物・料理|Comida e cozinha
朝ご飯|あさごはん|café da manhã|n
昼ご飯|ひるごはん|almoço|n
晩ご飯|ばんごはん|jantar|n
夕飯|ゆうはん|jantar|n
食事|しょくじ|refeição (～する: fazer refeição)|n
お弁当|おべんとう|marmita / bentô|n
米|こめ|arroz (cru)|n
麺|めん|macarrão (massa)|n
うどん||udon|n
そば||soba|n
刺身|さしみ|sashimi|n
おにぎり||bolinho de arroz|n
味噌汁|みそしる|sopa de missô|n
味噌|みそ|missô|n
納豆|なっとう|natto|n
豆腐|とうふ|tofu|n
天ぷら|てんぷら|tempurá|n
焼き肉|やきにく|churrasco japonês|n
焼き鳥|やきとり|espetinho de frango|n
鍋|なべ|panela / prato de panela|n
丼|どんぶり|tigela de arroz com cobertura|n
定食|ていしょく|prato feito (set)|n
牛肉|ぎゅうにく|carne bovina|n
豚肉|ぶたにく|carne de porco|n
鶏肉|とりにく|frango|n
ひき肉|ひきにく|carne moída|n
ハム||presunto|n
ソーセージ||salsicha|n
鮭|さけ|salmão|n
マグロ||atum|n
エビ||camarão|n
イカ||lula|n
タコ||polvo|n
貝|かい|marisco / concha|n
キャベツ||repolho|n
レタス||alface|n
きゅうり||pepino|n
玉ねぎ|たまねぎ|cebola|n
ねぎ||cebolinha japonesa|n
にんじん||cenoura|n
じゃがいも||batata|n
さつまいも||batata-doce|n
大根|だいこん|nabo japonês|n
白菜|はくさい|acelga chinesa|n
ほうれん草|ほうれんそう|espinafre|n
なす||berinjela|n
ピーマン||pimentão|n
かぼちゃ||abóbora|n
きのこ||cogumelo|n
にんにく||alho|n
しょうが||gengibre|n
豆|まめ|feijão / grão|n
みかん||tangerina|n
いちご||morango|n
ぶどう||uva|n
桃|もも|pêssego|n
梨|なし|pera japonesa|n
すいか||melancia|n
パイナップル||abacaxi|n
柿|かき|caqui|n
お菓子|おかし|doces / salgadinhos|n
アイス||sorvete|n
クッキー||biscoito|n
あめ||bala|n
ガム||chiclete|n
和菓子|わがし|doce japonês|n
もち||mochi|n
デザート||sobremesa|n
お湯|おゆ|água quente|n
緑茶|りょくちゃ|chá verde|n
麦茶|むぎちゃ|chá de cevada|n
紅茶|こうちゃ|chá preto|n
お酒|おさけ|bebida alcoólica / saquê|n
氷|こおり|gelo|n
砂糖|さとう|açúcar|n
塩|しお|sal|n
こしょう||pimenta-do-reino|n
醤油|しょうゆ|shoyu|n
酢|す|vinagre|n
油|あぶら|óleo|n
バター||manteiga|n
チーズ||queijo|n
ソース||molho|n
調味料|ちょうみりょう|tempero|n
味|あじ|sabor|n
まずい||ruim (sabor)|i
甘い|あまい|doce|i
辛い|からい|apimentado|i
しょっぱい||salgado|i
苦い|にがい|amargo|i
酸っぱい|すっぱい|azedo|i
熱い|あつい|quente (ao toque)|i
冷たい|つめたい|frio (ao toque)|i
柔らかい|やわらかい|macio|i
硬い|かたい|duro|i
新鮮|しんせん|fresco|na
作る|つくる|fazer / preparar|v
料理|りょうり|cozinha / prato (～する: cozinhar)|n
焼く|やく|assar / grelhar|v
煮る|にる|cozinhar (cozido)|v
炒める|いためる|refogar / fritar mexendo|v
揚げる|あげる|fritar (imersão)|v
ゆでる||ferver / cozinhar na água|v
蒸す|むす|cozinhar no vapor|v
切る|きる|cortar|v
混ぜる|まぜる|misturar|v
温める|あたためる|esquentar|v
冷やす|ひやす|esfriar / gelar|v
味見|あじみ|provar (o sabor)|n
材料|ざいりょう|ingrediente / material|n
お腹がすく|おなかがすく|ficar com fome|v
のどが渇く|のどがかわく|ficar com sede|v
お腹いっぱい|おなかいっぱい|satisfeito / cheio|x
おかわり||repetir (mais uma porção)|n
大盛り|おおもり|porção grande|n
お好み焼き|おこのみやき|okonomiyaki|n
たこ焼き|たこやき|takoyaki|n
すき焼き|すきやき|sukiyaki|n
しゃぶしゃぶ||shabu-shabu|n
とんかつ||porco empanado|n
唐揚げ|からあげ|frango frito japonês|n
餃子|ぎょうざ|guioza|n
焼きそば|やきそば|yakisoba|n
牛丼|ぎゅうどん|tigela de arroz com carne|n
親子丼|おやこどん|tigela de arroz com frango e ovo|n
カツ丼|カツどん|tigela de arroz com porco empanado|n
オムライス||omurice|n
ハンバーグ||hambúrguer (bife)|n
ポテト||batata frita|n
漬物|つけもの|conserva japonesa|n
梅干し|うめぼし|ameixa em conserva|n
のり巻き|のりまき|sushi enrolado|n
海苔|のり|alga nori|n
わかめ||alga wakame|n
わさび||wasabi|n
ごま||gergelim|n
小麦粉|こむぎこ|farinha de trigo|n
パン粉|パンこ|farinha de rosca|n
片栗粉|かたくりこ|amido de batata|n
だし||caldo (dashi)|n
みりん||mirin|n
ドレッシング||molho de salada|n
ジャム||geleia|n
はちみつ||mel|n
おやつ||lanchinho|n
ポテトチップス||batata chips|n
せんべい||biscoito de arroz|n
とうもろこし||milho|n
もやし||broto de feijão|n
セロリ||salsão|n
香辛料|こうしんりょう|especiaria|n
唐辛子|とうがらし|pimenta vermelha|n
冷凍食品|れいとうしょくひん|comida congelada|n
インスタントラーメン||miojo|n
カップ麺|カップめん|lámen de copo|n
お惣菜|おそうざい|prato pronto (comida pronta)|n
生|なま|cru|n
焼き魚|やきざかな|peixe grelhado|n
煮物|にもの|cozido japonês|n
炒め物|いためもの|refogado|n
揚げ物|あげもの|fritura|n
炊く|たく|cozinhar (arroz)|v
台所|だいどころ|cozinha|n
キッチン||cozinha|n
冷蔵庫|れいぞうこ|geladeira|n
冷凍庫|れいとうこ|freezer|n
電子レンジ|でんしレンジ|micro-ondas|n
炊飯器|すいはんき|panela de arroz|n
コンロ||fogão (boca)|n
オーブン||forno|n
やかん||chaleira|n
フライパン||frigideira|n
包丁|ほうちょう|faca de cozinha|n
まな板|まないた|tábua de corte|n
皿|さら|prato|n
お皿|おさら|prato|n
茶碗|ちゃわん|tigela de arroz|n
お椀|おわん|tigela de sopa|n
コップ||copo|n
グラス||taça / copo|n
カップ||xícara|n
箸|はし|hashi|n
お箸|おはし|hashi|n
スプーン||colher|n
フォーク||garfo|n
ナイフ||faca|n
ストロー||canudo|n
蓋|ふた|tampa|n
瓶|びん|garrafa (de vidro)|n
缶|かん|lata|n
ペットボトル||garrafa PET|n
ラップ||filme plástico|n
アルミホイル||papel alumínio|n
食堂|しょくどう|refeitório / restaurante simples|n
居酒屋|いざかや|bar japonês (izakaya)|n
喫茶店|きっさてん|cafeteria|n
注文|ちゅうもん|pedido (～する: pedir (no restaurante))|n
店員|てんいん|atendente|n
席|せき|assento / lugar|n
お会計|おかいけい|conta (pagar)|n
おしぼり||toalhinha úmida|n
持ち帰り|もちかえり|para viagem|n
店内|てんない|dentro da loja (para comer aqui)|n
食べ放題|たべほうだい|rodízio / à vontade|n
飲み放題|のみほうだい|bebida à vontade|n
おすすめ||recomendação|n
禁煙|きんえん|proibido fumar|n
喫煙|きつえん|fumar|n
#家・家事|Casa e tarefas
うち||casa / minha casa|n
マンション||prédio de apartamentos|n
一軒家|いっけんや|casa térrea / casa própria|n
寮|りょう|dormitório|n
玄関|げんかん|entrada (da casa)|n
戸|と|porta (de correr)|n
壁|かべ|parede|n
床|ゆか|chão|n
天井|てんじょう|teto|n
屋根|やね|telhado|n
階段|かいだん|escada|n
廊下|ろうか|corredor|n
居間|いま|sala de estar|n
リビング||sala de estar|n
寝室|しんしつ|quarto (de dormir)|n
和室|わしつ|quarto japonês (tatame)|n
畳|たたみ|tatame|n
押し入れ|おしいれ|armário embutido|n
お風呂|おふろ|banho / banheira|n
風呂場|ふろば|banheiro (de banho)|n
洗面所|せんめんじょ|lavabo / pia|n
シャワー||chuveiro|n
ベランダ||varanda|n
庭|にわ|jardim / quintal|n
駐車場|ちゅうしゃじょう|estacionamento|n
鍵|かぎ|chave / fechadura|n
家賃|やちん|aluguel|n
大家さん|おおやさん|proprietário (do imóvel)|n
不動産屋|ふどうさんや|imobiliária|n
引っ越し|ひっこし|mudança|n
引っ越す|ひっこす|mudar-se|v
住む|すむ|morar|v
住所|じゅうしょ|endereço|n
間取り|まどり|planta (do imóvel)|n
家具|かぐ|móveis|n
テーブル||mesa|n
布団|ふとん|futon|n
枕|まくら|travesseiro|n
毛布|もうふ|cobertor|n
シーツ||lençol|n
棚|たな|prateleira|n
本棚|ほんだな|estante de livros|n
タンス||cômoda / guarda-roupa|n
クローゼット||closet / armário|n
引き出し|ひきだし|gaveta|n
鏡|かがみ|espelho|n
カーテン||cortina|n
カーペット||tapete|n
電気|でんき|luz / eletricidade|n
電球|でんきゅう|lâmpada|n
コンセント||tomada|n
電池|でんち|pilha|n
エアコン||ar-condicionado|n
暖房|だんぼう|aquecedor (sistema)|n
冷房|れいぼう|ar frio (sistema)|n
ストーブ||aquecedor|n
こたつ||mesa aquecida (kotatsu)|n
扇風機|せんぷうき|ventilador|n
洗濯機|せんたくき|máquina de lavar|n
掃除機|そうじき|aspirador de pó|n
リモコン||controle remoto|n
時計|とけい|relógio|n
目覚まし時計|めざましどけい|despertador|n
ドライヤー||secador de cabelo|n
アイロン||ferro de passar|n
ゴミ箱|ごみばこ|lixeira|n
家事|かじ|tarefas domésticas|n
掃除|そうじ|limpeza (～する: limpar)|n
洗濯|せんたく|lavar roupa (～する: lavar roupa)|n
洗濯物|せんたくもの|roupa para lavar / roupa lavada|n
干す|ほす|estender (para secar)|v
たたむ||dobrar|v
片付ける|かたづける|arrumar / guardar|v
洗う|あらう|lavar|v
拭く|ふく|limpar (passando pano)|v
ゴミ|ごみ|lixo|n
燃えるゴミ|もえるごみ|lixo queimável|n
燃えないゴミ|もえないごみ|lixo não queimável|n
資源ゴミ|しげんごみ|lixo reciclável|n
粗大ゴミ|そだいごみ|lixo grande (móveis etc.)|n
ゴミを出す|ごみをだす|colocar o lixo para fora|v
分別|ぶんべつ|separação (do lixo)|n
捨てる|すてる|jogar fora|v
買い物|かいもの|compras (～する: fazer compras)|n
目が覚める|めがさめる|acordar (despertar)|v
寝坊|ねぼう|perder a hora (dormir demais)|n
昼寝|ひるね|cochilo|n
歯を磨く|はをみがく|escovar os dentes|v
お風呂に入る|おふろにはいる|tomar banho (de banheira)|v
シャワーを浴びる|シャワーをあびる|tomar banho (de chuveiro)|v
着替える|きがえる|trocar de roupa|v
化粧|けしょう|maquiagem (～する: maquiar-se)|n
タオル||toalha|n
石けん|せっけん|sabonete|n
リンス||condicionador|n
歯ブラシ|はブラシ|escova de dentes|n
歯磨き粉|はみがきこ|pasta de dente|n
トイレットペーパー||papel higiênico|n
ティッシュ||lenço de papel|n
洗剤|せんざい|detergente / sabão|n
ハンガー||cabide|n
ほうき||vassoura|n
雑巾|ぞうきん|pano de chão|n
袋|ふくろ|saco / sacola|n
ビニール袋|ビニールぶくろ|sacola plástica|n
紙|かみ|papel|n
箱|はこ|caixa|n
はさみ||tesoura|n
テープ||fita adesiva|n
のり||cola|n
ペン||caneta|n
鉛筆|えんぴつ|lápis|n
消しゴム|けしゴム|borracha|n
ノート||caderno|n
手帳|てちょう|agenda (de papel)|n
封筒|ふうとう|envelope|n
切手|きって|selo|n
はがき||cartão-postal|n
手紙|てがみ|carta|n
傘|かさ|guarda-chuva|n
財布|さいふ|carteira|n
かばん||bolsa / mochila|n
リュック||mochila|n
スーツケース||mala|n
眼鏡|めがね|óculos|n
窓ガラス|まどガラス|vidro da janela|n
網戸|あみど|tela (de janela)|n
蛇口|じゃぐち|torneira|n
流し|ながし|pia (da cozinha)|n
排水口|はいすいこう|ralo|n
換気扇|かんきせん|exaustor|n
給湯器|きゅうとうき|aquecedor de água|n
湯船|ゆぶね|banheira|n
便器|べんき|vaso sanitário|n
ウォシュレット||vaso com ducha|n
スイッチ||interruptor|n
ブレーカー||disjuntor|n
インターホン||interfone|n
郵便受け|ゆうびんうけ|caixa de correio|n
物干し|ものほし|varal|n
洗濯ばさみ|せんたくばさみ|prendedor de roupa|n
植木鉢|うえきばち|vaso de planta|n
はしご||escada (de mão)|n
工具|こうぐ|ferramenta|n
ドライバー||chave de fenda|n
くぎ||prego|n
ひも||barbante / cordão|n
ロープ||corda|n
バケツ||balde|n
スポンジ||esponja|n
ブラシ||escova|n
マット||tapete (capacho)|n
クッション||almofada|n
座布団|ざぶとん|almofada (para sentar no chão)|n
ふすま||porta de correr (papel)|n
障子|しょうじ|porta de papel (shoji)|n
ろうそく||vela|n
花瓶|かびん|vaso (de flores)|n
写真立て|しゃしんたて|porta-retrato|n
ぬいぐるみ||bicho de pelúcia|n
おもちゃ||brinquedo|n
人形|にんぎょう|boneca|n
一人暮らし|ひとりぐらし|morar sozinho|n
二人暮らし|ふたりぐらし|morar a dois|n
新居|しんきょ|casa nova|n
家事分担|かじぶんたん|divisão das tarefas|n
献立|こんだて|cardápio (de casa)|n
作り置き|つくりおき|comida feita com antecedência|n
残り物|のこりもの|sobras|n
お皿洗い|おさらあらい|lavar a louça|n
食器|しょっき|louça|n
食器棚|しょっきだな|armário de louça|n
洗い物|あらいもの|louça para lavar|n
ふきん||pano de prato|n
エプロン||avental|n
買い置き|かいおき|estoque em casa|n
日用品|にちようひん|itens do dia a dia|n
生ゴミ|なまごみ|lixo orgânico|n
空き缶|あきかん|lata vazia|n
古紙|こし|papel velho (reciclagem)|n
段ボール|だんボール|papelão|n
収集日|しゅうしゅうび|dia da coleta|n
自治体|じちたい|município (governo local)|n
地域|ちいき|região / comunidade|n
近所付き合い|きんじょづきあい|convivência com vizinhos|n
回収|かいしゅう|coleta / recolhimento|n
節電|せつでん|economia de energia|n
節水|せっすい|economia de água|n
水道|すいどう|água encanada|n
ガス||gás|n
電気屋|でんきや|loja de eletrônicos|n
家電量販店|かでんりょうはんてん|loja grande de eletrônicos|n
ホームセンター||loja de materiais (home center)|n
ショッピングモール||shopping center|n
商店街|しょうてんがい|rua comercial|n
市場|いちば|mercado (feira)|n
屋台|やたい|barraca de comida|n
#服・物|Roupas e objetos
服|ふく|roupa|n
洋服|ようふく|roupa (ocidental)|n
着物|きもの|quimono|n
浴衣|ゆかた|yukata (quimono leve)|n
シャツ||camisa|n
セーター||suéter|n
パーカー||moletom com capuz|n
上着|うわぎ|casaco / jaqueta|n
コート||casaco (sobretudo)|n
スーツ||terno|n
ズボン||calça|n
スカート||saia|n
ワンピース||vestido|n
下着|したぎ|roupa íntima|n
靴下|くつした|meia|n
靴|くつ|sapato|n
スニーカー||tênis|n
スリッパ||chinelo (de casa)|n
帽子|ぼうし|chapéu / boné|n
手袋|てぶくろ|luva|n
マフラー||cachecol|n
ネクタイ||gravata|n
ベルト||cinto|n
水着|みずぎ|maiô / sunga|n
ポケット||bolso|n
ネックレス||colar|n
ピアス||brinco|n
腕時計|うでどけい|relógio de pulso|n
サイズ||tamanho|n
着る|きる|vestir (parte de cima)|v
はく||vestir (calça, sapato)|v
かぶる||pôr (chapéu)|v
脱ぐ|ぬぐ|tirar (roupa, sapato)|v
つける||pôr / colocar (acessório)|v
外す|はずす|tirar (acessório) / soltar|v
似合う|にあう|ficar bem (em alguém)|v
試着|しちゃく|provar (roupa)|n
地味|じみ|discreto / sem graça|na
派手|はで|chamativo|na
おしゃれ||estiloso / elegante|na
道具|どうぐ|ferramenta / utensílio|n
機械|きかい|máquina|n
電気製品|でんきせいひん|aparelho elétrico|n
ライター||isqueiro|n
マッチ||fósforo|n
カバー||capa|n
ケース||estojo / capa|n
シール||adesivo|n
ラベル||etiqueta|n
リボン||fita / laço|n
地球|ちきゅう|Terra (planeta)|n
旗|はた|bandeira|n
看板|かんばん|placa (de loja)|n
標識|ひょうしき|placa de sinalização|n
#町・道・交通|Cidade, ruas e transporte
町|まち|cidade / bairro|n
市|し|cidade (município)|n
村|むら|vila / aldeia|n
都会|とかい|cidade grande|n
田舎|いなか|interior / campo|n
近所|きんじょ|vizinhança|n
場所|ばしょ|lugar|n
所|ところ|lugar|n
建物|たてもの|prédio / construção|n
ビル||prédio (edifício)|n
お店|おみせ|loja|n
スーパー||supermercado|n
コンビニ||loja de conveniência|n
デパート||loja de departamentos|n
ドラッグストア||drogaria|n
百円ショップ|ひゃくえんショップ|loja de 100 ienes|n
本屋|ほんや|livraria|n
花屋|はなや|floricultura|n
パン屋|パンや|padaria|n
八百屋|やおや|quitanda|n
美容院|びよういん|salão de beleza|n
床屋|とこや|barbearia|n
クリーニング屋|クリーニングや|lavanderia (a seco)|n
コインランドリー||lavanderia self-service|n
郵便局|ゆうびんきょく|correio|n
市役所|しやくしょ|prefeitura|n
区役所|くやくしょ|subprefeitura|n
役所|やくしょ|repartição pública|n
交番|こうばん|posto policial|n
警察|けいさつ|polícia|n
警察官|けいさつかん|policial|n
消防署|しょうぼうしょ|corpo de bombeiros|n
図書館|としょかん|biblioteca|n
大学|だいがく|universidade|n
幼稚園|ようちえん|jardim de infância|n
保育園|ほいくえん|creche|n
公園|こうえん|parque|n
神社|じんじゃ|santuário xintoísta|n
お寺|おてら|templo budista|n
教会|きょうかい|igreja|n
映画館|えいがかん|cinema|n
美術館|びじゅつかん|museu de arte|n
博物館|はくぶつかん|museu|n
動物園|どうぶつえん|zoológico|n
水族館|すいぞくかん|aquário|n
遊園地|ゆうえんち|parque de diversões|n
旅館|りょかん|pousada japonesa|n
温泉|おんせん|fonte termal|n
銭湯|せんとう|banho público|n
ジム||academia|n
プール||piscina|n
工場|こうじょう|fábrica|n
会社|かいしゃ|empresa|n
事務所|じむしょ|escritório|n
ガソリンスタンド||posto de gasolina|n
入口|いりぐち|entrada|n
出口|でぐち|saída|n
受付窓口|うけつけまどぐち|guichê|n
窓口|まどぐち|guichê / balcão|n
お手洗い|おてあらい|banheiro|n
非常口|ひじょうぐち|saída de emergência|n
道|みち|rua / caminho|n
道路|どうろ|estrada / rua|n
通り|とおり|avenida / rua|n
交差点|こうさてん|cruzamento|n
信号|しんごう|semáforo|n
横断歩道|おうだんほどう|faixa de pedestre|n
歩道|ほどう|calçada|n
角|かど|esquina|n
橋|はし|ponte|n
地図|ちず|mapa|n
右|みぎ|direita|n
左|ひだり|esquerda|n
まっすぐ||reto / em frente|adv
前|まえ|frente / antes|n
後ろ|うしろ|atrás|n
上|うえ|em cima|n
下|した|embaixo|n
中|なか|dentro|n
外|そと|fora|n
横|よこ|lado|n
隣|となり|ao lado / vizinho|n
間|あいだ|entre|n
近く|ちかく|perto / arredores|n
向こう|むこう|lá / do outro lado|n
真ん中|まんなか|meio / centro|n
奥|おく|fundo|n
手前|てまえ|à frente / antes de|n
東|ひがし|leste|n
西|にし|oeste|n
南|みなみ|sul|n
北|きた|norte|n
あそこ||ali / lá|n
こちら||por aqui / este lado|n
そちら||esse lado|n
あちら||aquele lado|n
どちら||qual / onde (educado)|n
曲がる|まがる|virar (dobrar)|v
渡る|わたる|atravessar|v
通る|とおる|passar (por)|v
迷う|まよう|perder-se / ficar em dúvida|v
地下鉄|ちかてつ|metrô|n
新幹線|しんかんせん|trem-bala|n
駅員|えきいん|funcionário da estação|n
ホーム||plataforma|n
線路|せんろ|trilho|n
改札|かいさつ|catraca|n
切符|きっぷ|bilhete|n
定期券|ていきけん|passe mensal|n
ICカード|アイシーカード|cartão de transporte|n
チャージ||recarregar|n
乗り換え|のりかえ|baldeação|n
乗り換える|のりかえる|fazer baldeação|v
各駅停車|かくえきていしゃ|trem parador|n
快速|かいそく|trem rápido|n
急行|きゅうこう|trem expresso|n
終電|しゅうでん|último trem|n
始発|しはつ|primeiro trem|n
満員電車|まんいんでんしゃ|trem lotado|n
優先席|ゆうせんせき|assento preferencial|n
時刻表|じこくひょう|tabela de horários|n
遅れる|おくれる|atrasar|v
遅延|ちえん|atraso|n
バス停|バスてい|ponto de ônibus|n
自転車|じてんしゃ|bicicleta|n
バイク||moto|n
飛行機|ひこうき|avião|n
船|ふね|navio / barco|n
運転|うんてん|direção (dirigir) (～する: dirigir)|n
運転免許|うんてんめんきょ|carteira de motorista|n
運転手|うんてんしゅ|motorista|n
乗る|のる|pegar / subir (veículo)|v
降りる|おりる|descer (de veículo)|v
止まる|とまる|parar|v
止める|とめる|parar / estacionar|v
駐輪場|ちゅうりんじょう|bicicletário|n
渋滞|じゅうたい|engarrafamento|n
事故|じこ|acidente|n
片道|かたみち|ida (só ida)|n
往復|おうふく|ida e volta|n
運賃|うんちん|tarifa|n
#空港・旅行|Aeroporto e viagem
空港|くうこう|aeroporto|n
成田|なりた|Narita (aeroporto)|n
羽田|はねだ|Haneda (aeroporto)|n
在留カード|ざいりゅうカード|cartão de residente|n
入国|にゅうこく|entrada no país|n
出国|しゅっこく|saída do país|n
入国審査|にゅうこくしんさ|imigração|n
税関|ぜいかん|alfândega|n
荷物|にもつ|bagagem|n
手荷物|てにもつ|bagagem de mão|n
搭乗口|とうじょうぐち|portão de embarque|n
搭乗券|とうじょうけん|cartão de embarque|n
便|びん|voo|n
国際線|こくさいせん|voo internacional|n
国内線|こくないせん|voo doméstico|n
到着|とうちゃく|chegada (～する: chegar)|n
出発|しゅっぱつ|partida (～する: partir)|n
両替|りょうがえ|câmbio (～する: trocar dinheiro)|n
時差|じさ|fuso horário (diferença)|n
時差ぼけ|じさぼけ|jet lag|n
旅行|りょこう|viagem (～する: viajar)|n
観光|かんこう|turismo (～する: fazer turismo)|n
観光地|かんこうち|ponto turístico|n
お土産|おみやげ|lembrancinha|n
予定|よてい|plano / programação|n
写真|しゃしん|foto|n
外国|がいこく|exterior / país estrangeiro|n
海外|かいがい|exterior|n
国|くに|país|n
東京|とうきょう|Tóquio|n
世界|せかい|mundo|n
#買い物・お金|Compras e dinheiro
お金|おかね|dinheiro|n
円|えん|iene|n
現金|げんきん|dinheiro vivo|n
小銭|こぜに|moedas / trocado|n
お札|おさつ|nota (de dinheiro)|n
おつり||troco|n
値段|ねだん|preço|n
税込|ぜいこみ|imposto incluso|n
税抜|ぜいぬき|sem imposto|n
消費税|しょうひぜい|imposto sobre consumo|n
割引|わりびき|desconto|n
セール||liquidação|n
半額|はんがく|metade do preço|n
無料|むりょう|grátis|n
レシート||nota fiscal / recibo|n
領収書|りょうしゅうしょ|recibo|n
レジ||caixa (de loja)|n
ポイントカード||cartão de pontos|n
袋はいりますか|ふくろはいりますか|precisa de sacola?|x
売る|うる|vender|v
払う|はらう|pagar|v
売り場|うりば|seção (da loja)|n
売り切れ|うりきれ|esgotado|n
在庫|ざいこ|estoque|n
品物|しなもの|mercadoria|n
商品|しょうひん|produto|n
新品|しんぴん|novo (produto)|n
中古|ちゅうこ|usado / seminovo|n
返品|へんぴん|devolução|n
交換|こうかん|troca (～する: trocar)|n
得|とく|vantajoso / economia|na
損|そん|prejuízo|n
貯金|ちょきん|poupança|n
貯める|ためる|juntar / economizar|v
使う|つかう|usar / gastar|v
借りる|かりる|pegar emprestado|v
貸す|かす|emprestar|v
返す|かえす|devolver|v
給料|きゅうりょう|salário|n
口座|こうざ|conta bancária|n
振込|ふりこみ|transferência bancária|n
引き出す|ひきだす|sacar|v
暗証番号|あんしょうばんごう|senha (PIN)|n
通帳|つうちょう|caderneta bancária|n
生活費|せいかつひ|custo de vida|n
光熱費|こうねつひ|contas de luz, gás e água|n
電気代|でんきだい|conta de luz|n
ガス代|ガスだい|conta de gás|n
水道代|すいどうだい|conta de água|n
請求書|せいきゅうしょ|fatura / conta|n
試食|ししょく|degustação|n
特売|とくばい|promoção|n
期間限定|きかんげんてい|por tempo limitado|n
人気|にんき|popularidade|n
新商品|しんしょうひん|produto novo|n
おまけ||brinde / extra|n
ポイント||pontos|n
会員|かいいん|membro / sócio|n
お届け|おとどけ|entrega|n
配達|はいたつ|entrega|n
送料|そうりょう|frete|n
通販|つうはん|compra online / por catálogo|n
温めますか|あたためますか|quer que esquente?|x
お箸はご利用ですか|おはしはごりようですか|vai querer hashi?|x
ご一緒に|ごいっしょに|junto (vai querer junto?)|x
少々|しょうしょう|um pouco (formal)|adv
#時間・季節・天気|Tempo, estações e clima
時間|じかん|tempo / hora|n
時|とき|quando / momento|n
あさって||depois de amanhã|n
おととい||anteontem|n
毎日|まいにち|todo dia|n
毎朝|まいあさ|toda manhã|n
毎晩|まいばん|toda noite|n
毎週|まいしゅう|toda semana|n
毎月|まいつき|todo mês|n
毎年|まいとし|todo ano|n
夕方|ゆうがた|fim de tarde|n
晩|ばん|noite|n
夜中|よなか|madrugada / meia-noite|n
午前|ごぜん|manhã (a.m.)|n
午後|ごご|tarde (p.m.)|n
今朝|けさ|hoje de manhã|n
今晩|こんばん|hoje à noite|n
今夜|こんや|esta noite|n
週|しゅう|semana|n
今週|こんしゅう|esta semana|n
来週|らいしゅう|semana que vem|n
先週|せんしゅう|semana passada|n
週末|しゅうまつ|fim de semana|n
平日|へいじつ|dia útil|n
休日|きゅうじつ|dia de folga|n
祝日|しゅくじつ|feriado|n
月|つき|mês / lua|n
今月|こんげつ|este mês|n
来月|らいげつ|mês que vem|n
先月|せんげつ|mês passado|n
今年|ことし|este ano|n
来年|らいねん|ano que vem|n
去年|きょねん|ano passado|n
月曜日|げつようび|segunda-feira|n
火曜日|かようび|terça-feira|n
水曜日|すいようび|quarta-feira|n
木曜日|もくようび|quinta-feira|n
金曜日|きんようび|sexta-feira|n
土曜日|どようび|sábado|n
日曜日|にちようび|domingo|n
曜日|ようび|dia da semana|n
日付|ひづけ|data|n
一日|ついたち|dia 1 (do mês)|n
二日|ふつか|dia 2 / dois dias|n
三日|みっか|dia 3 / três dias|n
四日|よっか|dia 4 / quatro dias|n
五日|いつか|dia 5 / cinco dias|n
六日|むいか|dia 6 / seis dias|n
七日|なのか|dia 7 / sete dias|n
八日|ようか|dia 8 / oito dias|n
九日|ここのか|dia 9 / nove dias|n
十日|とおか|dia 10 / dez dias|n
二十日|はつか|dia 20 / vinte dias|n
一月|いちがつ|janeiro|n
二月|にがつ|fevereiro|n
三月|さんがつ|março|n
四月|しがつ|abril|n
五月|ごがつ|maio|n
六月|ろくがつ|junho|n
七月|しちがつ|julho|n
八月|はちがつ|agosto|n
九月|くがつ|setembro|n
十月|じゅうがつ|outubro|n
十一月|じゅういちがつ|novembro|n
十二月|じゅうにがつ|dezembro|n
何時|なんじ|que horas|n
何曜日|なんようび|que dia da semana|n
～時|～じ|… horas|x
～分|～ふん|… minutos|x
半|はん|meia (hora)|n
～時間|～じかん|… horas (duração)|x
～週間|～しゅうかん|… semanas|x
～か月|～かげつ|… meses|x
～年|～ねん|… anos|x
秒|びょう|segundo|n
最近|さいきん|recentemente|n
昔|むかし|antigamente|n
前に|まえに|antes|adv
後で|あとで|depois|adv
さっき||agora há pouco|adv
これから||a partir de agora|adv
将来|しょうらい|futuro|n
未来|みらい|futuro|n
過去|かこ|passado|n
現在|げんざい|presente / atualmente|n
始め|はじめ|começo|n
終わり|おわり|fim|n
途中|とちゅう|no meio do caminho|n
最初|さいしょ|primeiro / início|n
最後|さいご|último / final|n
次|つぎ|próximo|n
締め切り|しめきり|prazo|n
期限|きげん|prazo / validade|n
賞味期限|しょうみきげん|data de validade|n
間に合う|まにあう|chegar a tempo|v
季節|きせつ|estação do ano|n
春|はる|primavera|n
夏|なつ|verão|n
秋|あき|outono|n
冬|ふゆ|inverno|n
お正月|おしょうがつ|Ano-Novo|n
大晦日|おおみそか|véspera de Ano-Novo|n
年末|ねんまつ|fim de ano|n
花見|はなみ|piquenique sob as cerejeiras|n
桜|さくら|cerejeira|n
梅雨|つゆ|estação das chuvas|n
夏休み|なつやすみ|férias de verão|n
お盆|おぼん|Obon (feriado de verão)|n
花火|はなび|fogos de artifício|n
祭り|まつり|festival|n
紅葉|こうよう|folhas vermelhas de outono|n
ゴールデンウィーク||Golden Week (feriados de maio)|n
連休|れんきゅう|feriado prolongado|n
休み|やすみ|folga / férias|n
お祝い|おいわい|comemoração / presente|n
天気|てんき|tempo (clima)|n
天気予報|てんきよほう|previsão do tempo|n
晴れ|はれ|tempo bom / ensolarado|n
曇り|くもり|nublado|n
雨|あめ|chuva|n
雪|ゆき|neve|n
風|かぜ|vento|n
台風|たいふう|tufão|n
雷|かみなり|trovão|n
地震|じしん|terremoto|n
津波|つなみ|tsunami|n
空|そら|céu|n
雲|くも|nuvem|n
太陽|たいよう|sol|n
星|ほし|estrela|n
虹|にじ|arco-íris|n
気温|きおん|temperatura (do ar)|n
温度|おんど|temperatura|n
湿気|しっけ|umidade|n
～度|～ど|… graus|x
暖かい|あたたかい|morno / agradável|i
涼しい|すずしい|fresco|i
蒸し暑い|むしあつい|abafado|i
晴れる|はれる|fazer sol / clarear|v
曇る|くもる|nublar|v
降る|ふる|cair (chuva, neve)|v
吹く|ふく|soprar|v
止む|やむ|parar (chuva)|v
傘をさす|かさをさす|abrir o guarda-chuva|v
濡れる|ぬれる|molhar-se|v
乾く|かわく|secar|v
朝日|あさひ|sol da manhã|n
夕日|ゆうひ|pôr do sol|n
日の出|ひので|nascer do sol|n
月見|つきみ|contemplar a lua|n
満月|まんげつ|lua cheia|n
大雨|おおあめ|chuva forte|n
小雨|こさめ|chuvisco|n
にわか雨|にわかあめ|pancada de chuva|n
霧|きり|neblina|n
霜|しも|geada|n
氷点下|ひょうてんか|abaixo de zero|n
暑さ|あつさ|calor|n
寒さ|さむさ|frio|n
熱中症|ねっちゅうしょう|insolação|n
日焼け|ひやけ|bronzeado / queimadura de sol|n
日焼け止め|ひやけどめ|protetor solar|n
花粉|かふん|pólen|n
春らしい|はるらしい|típico da primavera|i
蝉|せみ|cigarra|n
かき氷|かきごおり|raspadinha de gelo|n
冬服|ふゆふく|roupa de inverno|n
夏服|なつふく|roupa de verão|n
衣替え|ころもがえ|troca de roupa da estação|n
雪だるま|ゆきだるま|boneco de neve|n
カイロ||aquecedor de bolso|n
#数・量|Números e quantidades
数|かず|número / quantidade|n
数字|すうじ|algarismo / número|n
万|まん|dez mil|n
億|おく|cem milhões|n
一つ|ひとつ|um (objeto)|n
二つ|ふたつ|dois (objetos)|n
三つ|みっつ|três (objetos)|n
四つ|よっつ|quatro (objetos)|n
五つ|いつつ|cinco (objetos)|n
六つ|むっつ|seis (objetos)|n
七つ|ななつ|sete (objetos)|n
八つ|やっつ|oito (objetos)|n
九つ|ここのつ|nove (objetos)|n
一人|ひとり|uma pessoa / sozinho|n
二人|ふたり|duas pessoas|n
～人|～にん|… pessoas|x
～個|～こ|… unidades|x
～枚|～まい|… (folhas, coisas finas)|x
～本|～ほん|… (coisas compridas)|x
～匹|～ひき|… (animais pequenos)|x
～台|～だい|… (máquinas, carros)|x
～冊|～さつ|… (livros)|x
～杯|～はい|… (copos, tigelas)|x
～回|～かい|… vezes|x
～番|～ばん|número …|x
～階|～かい|… andar|x
～歳|～さい|… anos (idade)|x
～円|～えん|… ienes|x
～つ目|～つめ|…º (ordem)|x
いくつ||quantos / quantos anos|n
いくら||quanto (preço)|n
何個|なんこ|quantos (unidades)|n
何人|なんにん|quantas pessoas|n
半分|はんぶん|metade|n
全部|ぜんぶ|tudo|n
全員|ぜんいん|todos (pessoas)|n
少し|すこし|um pouco|adv
ちょっと||um pouco|adv
たくさん||muito|adv
多い|おおい|muitos|i
少ない|すくない|poucos|i
大体|だいたい|mais ou menos / geralmente|adv
約|やく|aproximadamente|x
以上|いじょう|acima de / mais que|n
以下|いか|abaixo de / menos que|n
以内|いない|dentro de (limite)|n
番号|ばんごう|número (de telefone etc.)|n
順番|じゅんばん|ordem / vez|n
倍|ばい|dobro / vezes|n
重さ|おもさ|peso|n
長さ|ながさ|comprimento|n
大きさ|おおきさ|tamanho|n
量|りょう|quantidade|n
キロ||quilo / quilômetro|n
センチ||centímetro|n
何回|なんかい|quantas vezes|n
何日|なんにち|quantos dias / que dia|n
何月|なんがつ|que mês|n
何歳|なんさい|quantos anos (idade)|n
何分|なんぷん|quantos minutos|n
一回|いっかい|uma vez|n
二回|にかい|duas vezes|n
一度|いちど|uma vez|n
一年|いちねん|um ano|n
一週間|いっしゅうかん|uma semana|n
一か月|いっかげつ|um mês|n
一時間|いちじかん|uma hora|n
三十分|さんじゅっぷん|trinta minutos|n
午前中|ごぜんちゅう|durante a manhã|n
今日中|きょうじゅう|ainda hoje (até o fim do dia)|n
年上|としうえ|mais velho|n
年下|としした|mais novo|n
同い年|おないどし|mesma idade|n
#仕事|Trabalho
仕事|しごと|trabalho|n
働く|はたらく|trabalhar|v
会社員|かいしゃいん|funcionário de empresa|n
社員|しゃいん|funcionário|n
社長|しゃちょう|presidente (da empresa)|n
上司|じょうし|chefe|n
部下|ぶか|subordinado|n
同僚|どうりょう|colega de trabalho|n
先輩|せんぱい|veterano (colega mais antigo)|n
後輩|こうはい|novato (colega mais novo)|n
店長|てんちょう|gerente da loja|n
部長|ぶちょう|gerente de departamento|n
課長|かちょう|chefe de seção|n
バイト||bico / trabalho de meio período|n
アルバイト||trabalho de meio período|n
パート||trabalho de meio período|n
正社員|せいしゃいん|funcionário efetivo|n
派遣|はけん|trabalho temporário (agência)|n
面接|めんせつ|entrevista|n
履歴書|りれきしょ|currículo|n
応募|おうぼ|candidatura (～する: candidatar-se)|n
採用|さいよう|contratação|n
求人|きゅうじん|vaga de emprego|n
就職|しゅうしょく|conseguir emprego|n
転職|てんしょく|mudar de emprego|n
退職|たいしょく|aposentadoria / sair do emprego|n
辞める|やめる|largar / pedir demissão|v
休憩|きゅうけい|intervalo (～する: fazer intervalo)|n
残業|ざんぎょう|hora extra|n
出勤|しゅっきん|ir ao trabalho|n
退勤|たいきん|sair do trabalho|n
通勤|つうきん|deslocamento ao trabalho|n
遅刻|ちこく|atraso (chegar tarde) (～する: chegar atrasado)|n
早退|そうたい|sair mais cedo|n
欠勤|けっきん|falta (no trabalho)|n
有給休暇|ゆうきゅうきゅうか|férias remuneradas|n
シフト||turno / escala|n
時給|じきゅう|salário por hora|n
月給|げっきゅう|salário mensal|n
契約|けいやく|contrato|n
会議|かいぎ|reunião|n
打ち合わせ|うちあわせ|reunião (de alinhamento)|n
資料|しりょう|material / documento|n
書類|しょるい|documentos|n
報告|ほうこく|relatório / relato (～する: relatar)|n
連絡|れんらく|contato / aviso (～する: entrar em contato)|n
相談|そうだん|consulta / conversa (～する: consultar / pedir conselho)|n
確認|かくにん|confirmação (～する: confirmar / verificar)|n
準備|じゅんび|preparação (～する: preparar)|n
担当|たんとう|responsável (por)|n
責任|せきにん|responsabilidade|n
経験|けいけん|experiência (～する: experimentar / vivenciar)|n
能力|のうりょく|capacidade|n
制服|せいふく|uniforme|n
名刺|めいし|cartão de visita|n
職場|しょくば|local de trabalho|n
接客|せっきゃく|atendimento ao cliente|n
通訳|つうやく|intérprete / interpretação|n
翻訳|ほんやく|tradução|n
教える|おしえる|ensinar / dizer|v
手伝う|てつだう|ajudar|v
任せる|まかせる|deixar a cargo de|v
頼む|たのむ|pedir|v
職業|しょくぎょう|profissão|n
店員さん|てんいんさん|atendente|n
料理人|りょうりにん|cozinheiro(a)|n
美容師|びようし|cabeleireiro(a)|n
保育士|ほいくし|educador(a) de creche|n
介護士|かいごし|cuidador(a) de idosos|n
弁護士|べんごし|advogado(a)|n
公務員|こうむいん|funcionário público|n
主婦|しゅふ|dona de casa|n
作業|さぎょう|trabalho / tarefa (～する: trabalhar (numa tarefa))|n
製品|せいひん|produto (fabricado)|n
品質|ひんしつ|qualidade|n
検品|けんぴん|inspeção (de produtos)|n
梱包|こんぽう|embalagem|n
倉庫|そうこ|depósito / armazém|n
ライン||linha (de produção)|n
安全第一|あんぜんだいいち|segurança em primeiro lugar|x
指示|しじ|instrução / ordem (～する: instruir)|n
目上|めうえ|superior (pessoa)|n
ミス||erro (no trabalho)|n
予定表|よていひょう|cronograma|n
会議室|かいぎしつ|sala de reunião|n
事務|じむ|trabalho de escritório|n
電話に出る|でんわにでる|atender o telefone|v
折り返し|おりかえし|retornar (a ligação)|n
伝言|でんごん|recado|n
メモ||anotação|n
印刷|いんさつ|impressão (～する: imprimir)|n
プリンター||impressora|n
ファイル||arquivo / pasta|n
完成|かんせい|conclusão (obra pronta) (～する: ficar pronto)|n
進む|すすむ|avançar|v
進める|すすめる|avançar (algo)|v
#学校・勉強|Escola e estudo
勉強|べんきょう|estudo (～する: estudar)|n
習う|ならう|aprender (com alguém)|v
学ぶ|まなぶ|aprender|v
覚える|おぼえる|memorizar / lembrar|v
忘れる|わすれる|esquecer|v
練習|れんしゅう|treino / prática (～する: praticar)|n
復習|ふくしゅう|revisão|n
予習|よしゅう|estudo prévio|n
宿題|しゅくだい|lição de casa|n
授業|じゅぎょう|aula|n
教室|きょうしつ|sala de aula|n
日本語学校|にほんごがっこう|escola de japonês|n
試験|しけん|prova / exame|n
合格|ごうかく|aprovação (～する: passar (na prova))|n
問題|もんだい|problema / questão|n
答え|こたえ|resposta|n
答える|こたえる|responder|v
質問|しつもん|pergunta (～する: perguntar)|n
意味|いみ|significado|n
言葉|ことば|palavra / língua|n
単語|たんご|vocábulo|n
文|ぶん|frase|n
文法|ぶんぽう|gramática|n
発音|はつおん|pronúncia|n
漢字|かんじ|kanji|n
ひらがな||hiragana|n
日本語|にほんご|japonês (língua)|n
ポルトガル語|ポルトガルご|português (língua)|n
英語|えいご|inglês|n
外国語|がいこくご|língua estrangeira|n
辞書|じしょ|dicionário|n
教科書|きょうかしょ|livro didático|n
例|れい|exemplo|n
例文|れいぶん|frase de exemplo|n
言う|いう|dizer|v
説明|せつめい|explicação (～する: explicar)|n
作文|さくぶん|redação|n
日記|にっき|diário|n
成績|せいせき|nota / desempenho|n
点数|てんすう|pontuação|n
卒業|そつぎょう|formatura|n
入学|にゅうがく|matrícula / ingresso|n
留学|りゅうがく|estudar no exterior|n
留学生|りゅうがくせい|estudante estrangeiro|n
資格|しかく|qualificação / certificado|n
小学校|しょうがっこう|escola primária|n
中学校|ちゅうがっこう|ginásio (fundamental II)|n
高校|こうこう|ensino médio|n
小学生|しょうがくせい|aluno do primário|n
中学生|ちゅうがくせい|aluno do ginásio|n
高校生|こうこうせい|aluno do ensino médio|n
大学生|だいがくせい|universitário|n
給食|きゅうしょく|merenda escolar|n
運動会|うんどうかい|gincana esportiva|n
遠足|えんそく|excursão escolar|n
入学式|にゅうがくしき|cerimônia de ingresso|n
卒業式|そつぎょうしき|cerimônia de formatura|n
部活|ぶかつ|clube escolar (atividade)|n
塾|じゅく|cursinho|n
ランドセル||mochila escolar|n
黒板|こくばん|lousa|n
同級生|どうきゅうせい|colega de classe|n
#役所・電話・ネット|Repartição, telefone e internet
手続き|てつづき|trâmite / procedimento|n
申請|しんせい|solicitação (～する: solicitar (oficialmente))|n
申し込み|もうしこみ|inscrição / pedido|n
申し込む|もうしこむ|inscrever-se / solicitar|v
届け出|とどけで|notificação (oficial)|n
転入届|てんにゅうとどけ|registro de mudança (entrada)|n
住民票|じゅうみんひょう|certificado de residência|n
マイナンバー||número de identificação (My Number)|n
印鑑|いんかん|carimbo pessoal (hanko)|n
はんこ||carimbo pessoal|n
署名|しょめい|assinatura|n
サイン||assinatura / autógrafo|n
身分証明書|みぶんしょうめいしょ|documento de identidade|n
証明書|しょうめいしょ|certificado|n
用紙|ようし|formulário (papel)|n
記入|きにゅう|preenchimento (～する: preencher)|n
提出|ていしゅつ|entrega (de documento) (～する: entregar (documento))|n
必要|ひつよう|necessário|na
整理券|せいりけん|senha (de atendimento)|n
呼ぶ|よぶ|chamar|v
待つ|まつ|esperar|v
並ぶ|ならぶ|fazer fila / enfileirar|v
列|れつ|fila|n
番号札|ばんごうふだ|senha numerada|n
国籍|こくせき|nacionalidade|n
生年月日|せいねんがっぴ|data de nascimento|n
性別|せいべつ|sexo (gênero)|n
年齢|ねんれい|idade|n
電話番号|でんわばんごう|número de telefone|n
配偶者|はいぐうしゃ|cônjuge|n
配偶者ビザ|はいぐうしゃビザ|visto de cônjuge|n
婚姻届|こんいんとどけ|registro de casamento|n
入国管理局|にゅうこくかんりきょく|imigração (órgão)|n
更新|こうしん|renovação (～する: renovar)|n
税金|ぜいきん|imposto|n
年金|ねんきん|aposentadoria / pensão|n
保険|ほけん|seguro|n
電話する|でんわする|telefonar|v
携帯|けいたい|celular|n
スマホ||smartphone|n
メール||e-mail / mensagem|n
返事|へんじ|resposta|n
返信|へんしん|resposta (mensagem)|n
送る|おくる|enviar / levar|v
届く|とどく|chegar (entrega)|v
受け取る|うけとる|receber|v
ネット||internet|n
パソコン||computador|n
アプリ||aplicativo|n
パスワード||senha|n
アカウント||conta (online)|n
登録|とうろく|cadastro (～する: cadastrar-se)|n
検索|けんさく|pesquisa (busca) (～する: pesquisar)|n
画面|がめん|tela|n
充電|じゅうでん|carregar (bateria)|n
充電器|じゅうでんき|carregador|n
電源|でんげん|energia / botão de ligar|n
ビデオ通話|ビデオつうわ|videochamada|n
通知|つうち|notificação|n
設定|せってい|configuração|n
宅配便|たくはいびん|entrega (encomenda)|n
不在票|ふざいひょう|aviso de entrega (ausente)|n
再配達|さいはいたつ|reentrega|n
郵便|ゆうびん|correio (correspondência)|n
#日本の生活・安全|Vida no Japão e segurança
お辞儀|おじぎ|reverência (curvar-se)|n
自動販売機|じどうはんばいき|máquina de venda automática|n
自販機|じはんき|máquina de venda (abrev.)|n
コンビニ弁当|コンビニべんとう|marmita de conveniência|n
レジ袋|レジぶくろ|sacola plástica (de loja)|n
マイバッグ||sacola própria (ecobag)|n
回覧板|かいらんばん|aviso circular do bairro|n
町内会|ちょうないかい|associação do bairro|n
ゴミ出しの日|ごみだしのひ|dia da coleta de lixo|n
年賀状|ねんがじょう|cartão de Ano-Novo|n
お年玉|おとしだま|dinheiro de Ano-Novo (para crianças)|n
初詣|はつもうで|primeira visita ao santuário no ano|n
おみくじ||papel da sorte (no templo)|n
お守り|おまもり|amuleto|n
お参り|おまいり|visita ao templo (para rezar)|n
お通し|おとおし|petisco cobrado (izakaya)|n
割り勘|わりかん|dividir a conta|n
おごる||pagar para alguém|v
空気を読む|くうきをよむ|ler o ambiente|v
遠慮|えんりょ|cerimônia / reserva (～する: fazer cerimônia / abster-se)|n
気を使う|きをつかう|ser atencioso / se preocupar com os outros|v
お世話になる|おせわになる|ser bem cuidado (por alguém)|v
お邪魔します|おじゃまします|com licença (ao entrar na casa de alguém)|x
つまらないものですが||é só uma lembrancinha (ao dar presente)|x
お先にどうぞ|おさきにどうぞ|pode ir na frente|x
お疲れ様でした|おつかれさまでした|bom trabalho (ao terminar)|x
よろしく||conto com você (informal)|x
緊急|きんきゅう|emergência|n
助けて|たすけて|socorro!|x
火事|かじ|incêndio|n
避難|ひなん|evacuação (～する: evacuar / refugiar-se)|n
避難所|ひなんじょ|abrigo (refúgio)|n
防災|ぼうさい|prevenção de desastres|n
非常食|ひじょうしょく|comida de emergência|n
懐中電灯|かいちゅうでんとう|lanterna|n
停電|ていでん|queda de energia|n
断水|だんすい|corte de água|n
泥棒|どろぼう|ladrão|n
落とし物|おとしもの|objeto perdido|n
忘れ物|わすれもの|objeto esquecido|n
迷子|まいご|criança perdida / perder-se|n
盗む|ぬすむ|roubar|v
盗まれる|ぬすまれる|ser roubado|v
怪我をする|けがをする|machucar-se|v
110番|ひゃくとおばん|190 (polícia no Japão)|n
119番|ひゃくじゅうきゅうばん|ligar para bombeiros/ambulância|n
大使館|たいしかん|embaixada|n
領事館|りょうじかん|consulado|n
#自然・動物|Natureza e animais
自然|しぜん|natureza|n
山|やま|montanha|n
川|かわ|rio|n
海|うみ|mar|n
湖|みずうみ|lago|n
池|いけ|lagoa|n
島|しま|ilha|n
森|もり|floresta|n
林|はやし|bosque|n
木|き|árvore / madeira|n
花|はな|flor|n
草|くさ|grama / erva|n
葉|は|folha|n
石|いし|pedra|n
砂|すな|areia|n
土|つち|terra|n
火|ひ|fogo|n
光|ひかり|luz|n
景色|けしき|paisagem|n
空気|くうき|ar|n
浜辺|はまべ|praia (beira-mar)|n
波|なみ|onda|n
坂|さか|ladeira|n
田んぼ|たんぼ|arrozal|n
畑|はたけ|horta / plantação|n
富士山|ふじさん|Monte Fuji|n
動物|どうぶつ|animal|n
犬|いぬ|cachorro|n
猫|ねこ|gato|n
鳥|とり|pássaro|n
うさぎ||coelho|n
馬|うま|cavalo|n
牛|うし|vaca / boi|n
豚|ぶた|porco|n
羊|ひつじ|ovelha|n
猿|さる|macaco|n
熊|くま|urso|n
鹿|しか|cervo|n
狐|きつね|raposa|n
ねずみ||rato|n
虫|むし|inseto|n
蚊|か|mosquito|n
ゴキブリ||barata|n
蝶|ちょう|borboleta|n
蜂|はち|abelha / vespa|n
蛇|へび|cobra|n
カエル||sapo|n
亀|かめ|tartaruga|n
金魚|きんぎょ|peixe dourado|n
象|ぞう|elefante|n
咲く|さく|florescer|v
散る|ちる|cair (pétalas, folhas)|v
育てる|そだてる|criar / cultivar|v
飼う|かう|ter (animal de estimação)|v
#趣味・カタカナ語|Lazer e palavras em katakana
趣味|しゅみ|hobby|n
遊ぶ|あそぶ|brincar / sair para se divertir|v
映画|えいが|filme|n
音楽|おんがく|música|n
歌|うた|canção|n
歌う|うたう|cantar|v
踊る|おどる|dançar|v
絵|え|desenho / pintura|n
絵を描く|えをかく|desenhar / pintar|v
漫画|まんが|mangá / quadrinhos|n
雑誌|ざっし|revista|n
小説|しょうせつ|romance (livro)|n
新聞|しんぶん|jornal|n
サッカー||futebol|n
野球|やきゅう|beisebol|n
水泳|すいえい|natação|n
泳ぐ|およぐ|nadar|v
走る|はしる|correr|v
散歩|さんぽ|passeio a pé (～する: passear)|n
運動|うんどう|exercício físico (～する: fazer exercício)|n
試合|しあい|partida / jogo|n
勝つ|かつ|ganhar / vencer|v
負ける|まける|perder (jogo)|v
選手|せんしゅ|atleta / jogador|n
応援|おうえん|torcida / apoio (～する: torcer / apoiar)|n
料理教室|りょうりきょうしつ|aula de culinária|n
楽器|がっき|instrumento musical|n
弾く|ひく|tocar (instrumento)|v
ドライブ||passeio de carro|n
ライブ||show ao vivo|n
チケット||ingresso|n
番組|ばんぐみ|programa (TV)|n
ニュース||notícia / jornal (TV)|n
動画|どうが|vídeo|n
楽しむ|たのしむ|aproveitar / divertir-se|v
出かける|でかける|sair (de casa)|v
サービス||serviço / cortesia|n
スケジュール||agenda / cronograma|n
タイプ||tipo|n
イメージ||imagem / ideia|n
ペース||ritmo|n
ストレス解消|ストレスかいしょう|alívio do estresse|n
マイペース||no seu ritmo|na
チェック||checagem|n
キャンセル||cancelamento|n
トップ||topo / primeiro|n
セット||conjunto / combo|n
オープン||abertura / inauguração|n
フロア||andar (piso)|n
カウンター||balcão|n
ロッカー||armário (locker)|n
コインロッカー||guarda-volumes|n
トランク||porta-malas|n
シートベルト||cinto de segurança|n
タイヤ||pneu|n
ハンドル||volante / maçaneta|n
ナビ||GPS (navegador)|n
マンガ喫茶|マンガきっさ|café de mangá|n
ネットカフェ||lan house|n
#気持ち|Sentimentos
気持ち|きもち|sentimento|n
気分|きぶん|humor / disposição|n
心|こころ|coração (sentimento)|n
愛|あい|amor|n
恋|こい|paixão / amor romântico (～する: apaixonar-se)|n
夢|ゆめ|sonho|n
嬉しい|うれしい|feliz / contente|i
楽しい|たのしい|divertido|i
悲しい|かなしい|triste|i
寂しい|さびしい|solitário / com saudade|i
怖い|こわい|com medo / assustador|i
恥ずかしい|はずかしい|envergonhado|i
懐かしい|なつかしい|nostálgico|i
羨ましい|うらやましい|com inveja (boa)|i
悔しい|くやしい|frustrado|i
つまらない||chato / sem graça|i
面白い|おもしろい|interessante / engraçado|i
うるさい||barulhento / chato|i
眠い|ねむい|com sono|i
心配|しんぱい|preocupação (～する: preocupar-se)|na
安心|あんしん|alívio / tranquilidade (～する: ficar aliviado)|na
不安|ふあん|ansiedade / insegurança|na
緊張|きんちょう|nervosismo (～する: ficar nervoso)|n
幸せ|しあわせ|feliz / felicidade|na
大好き|だいすき|adorar|na
大嫌い|だいきらい|detestar|na
嫌|いや|desagradável / não quero|na
平気|へいき|tranquilo / tudo bem|na
退屈|たいくつ|tédio|na
びっくりする||levar um susto / surpreender-se|v
驚く|おどろく|surpreender-se|v
笑う|わらう|rir / sorrir|v
泣く|なく|chorar|v
怒る|おこる|ficar bravo|v
喜ぶ|よろこぶ|alegrar-se|v
困る|こまる|ficar em apuros|v
悩む|なやむ|ficar preocupado / em dúvida|v
感動|かんどう|emoção (comoção) (～する: emocionar-se)|n
感謝|かんしゃ|gratidão (～する: agradecer)|n
我慢|がまん|paciência / aguentar (～する: aguentar / segurar)|n
会いたい|あいたい|quero te ver / saudade|x
愛してる|あいしてる|eu te amo|x
希望|きぼう|esperança / desejo|n
期待|きたい|expectativa (～する: ter expectativa)|n
不満|ふまん|insatisfação|n
満足|まんぞく|satisfação (～する: ficar satisfeito)|na
後悔|こうかい|arrependimento (～する: arrepender-se)|n
反省|はんせい|reflexão (autocrítica) (～する: refletir sobre o erro)|n
感想|かんそう|impressão / opinião|n
印象|いんしょう|impressão|n
気になる|きになる|ficar curioso / incomodar|v
気に入る|きにいる|gostar (agradar)|v
気が合う|きがあう|ter afinidade|v
気が楽|きがらく|ficar tranquilo|na
気が重い|きがおもい|desanimado (pesado)|i
気が短い|きがみじかい|impaciente|i
腹が立つ|はらがたつ|ficar irritado|v
頭にくる|あたまにくる|ficar furioso|v
落ち込む|おちこむ|ficar para baixo|v
元気を出す|げんきをだす|animar-se|v
元気になる|げんきになる|melhorar / ficar animado|v
涙が出る|なみだがでる|lágrimas caírem|v
ため息|ためいき|suspiro|n
#動詞|Verbos
なる||tornar-se / ficar|v
帰る|かえる|voltar (para casa)|v
戻る|もどる|retornar|v
出る|でる|sair|v
入る|はいる|entrar|v
出す|だす|tirar / pôr para fora / enviar|v
入れる|いれる|colocar dentro|v
会う|あう|encontrar-se (com alguém)|v
見せる|みせる|mostrar|v
見える|みえる|ser visível / dá para ver|v
聞こえる|きこえる|ser audível / dá para ouvir|v
思う|おもう|achar / pensar|v
考える|かんがえる|pensar / refletir|v
分かる|わかる|entender / saber|v
知る|しる|saber / conhecer|v
知っている|しっている|saber / conhecer (estado)|v
できる||conseguir / poder|v
持つ|もつ|segurar / ter|v
持っていく|もっていく|levar (algo)|v
持ってくる|もってくる|trazer (algo)|v
連れていく|つれていく|levar (alguém)|v
連れてくる|つれてくる|trazer (alguém)|v
あげる||dar|v
くれる||dar (para mim)|v
もらう||receber|v
置く|おく|colocar / deixar|v
取る|とる|pegar|v
開ける|あける|abrir|v
閉める|しめる|fechar|v
開く|あく|abrir-se|v
閉まる|しまる|fechar-se|v
つく||acender-se / ligar-se|v
消える|きえる|apagar-se / sumir|v
消す|けす|apagar / desligar|v
始める|はじめる|começar (algo)|v
始まる|はじまる|começar|v
終わる|おわる|terminar|v
終える|おえる|terminar (algo)|v
続ける|つづける|continuar (algo)|v
続く|つづく|continuar|v
やめる||parar / desistir|v
決める|きめる|decidir|v
決まる|きまる|ser decidido|v
変える|かえる|mudar (algo)|v
変わる|かわる|mudar|v
選ぶ|えらぶ|escolher|v
探す|さがす|procurar|v
見つける|みつける|encontrar (achar)|v
見つかる|みつかる|ser encontrado|v
なくす||perder (objeto)|v
なくなる||acabar / sumir|v
落とす|おとす|deixar cair|v
落ちる|おちる|cair|v
拾う|ひろう|apanhar (do chão)|v
壊す|こわす|quebrar (algo)|v
壊れる|こわれる|quebrar-se|v
直す|なおす|consertar / corrigir|v
割れる|われる|rachar / quebrar (vidro)|v
汚れる|よごれる|sujar-se|v
汚す|よごす|sujar|v
使い方|つかいかた|modo de usar|n
動く|うごく|mover-se / funcionar|v
動かす|うごかす|mover (algo)|v
押す|おす|empurrar / apertar|v
引く|ひく|puxar|v
回す|まわす|girar|v
回る|まわる|girar / rodar|v
押さえる|おさえる|segurar firme|v
上げる|あげる|levantar / subir (algo)|v
下げる|さげる|abaixar|v
上がる|あがる|subir|v
下がる|さがる|baixar / descer|v
登る|のぼる|escalar / subir|v
立つ|たつ|ficar de pé|v
座る|すわる|sentar|v
歩く|あるく|andar|v
急ぐ|いそぐ|ter pressa|v
逃げる|にげる|fugir|v
転ぶ|ころぶ|levar um tombo|v
ぶつかる||bater / colidir|v
触る|さわる|tocar|v
つかむ||agarrar|v
投げる|なげる|jogar / arremessar|v
打つ|うつ|bater / digitar|v
蹴る|ける|chutar|v
握る|にぎる|segurar / apertar (mão)|v
抱く|だく|abraçar / segurar no colo|v
抱きしめる|だきしめる|abraçar forte|v
貼る|はる|colar (adesivo)|v
包む|つつむ|embrulhar|v
結ぶ|むすぶ|amarrar|v
掛ける|かける|pendurar / pôr / ligar (telefone)|v
かかる||levar (tempo) / custar|v
足りる|たりる|ser suficiente|v
余る|あまる|sobrar|v
残る|のこる|restar / ficar|v
残す|のこす|deixar (sobrar)|v
増える|ふえる|aumentar|v
減る|へる|diminuir|v
増やす|ふやす|aumentar (algo)|v
減らす|へらす|diminuir (algo)|v
比べる|くらべる|comparar|v
数える|かぞえる|contar (números)|v
測る|はかる|medir|v
調べる|しらべる|pesquisar / investigar|v
試す|ためす|experimentar|v
集める|あつめる|juntar / colecionar|v
集まる|あつまる|reunir-se|v
分ける|わける|dividir / separar|v
並べる|ならべる|enfileirar / arrumar|v
重ねる|かさねる|empilhar|v
運ぶ|はこぶ|carregar / transportar|v
届ける|とどける|entregar|v
配る|くばる|distribuir|v
迎える|むかえる|receber (alguém) / buscar|v
見送る|みおくる|despedir-se (acompanhar)|v
訪ねる|たずねる|visitar|v
招待する|しょうたいする|convidar|v
誘う|さそう|convidar (chamar)|v
約束|やくそく|promessa / compromisso (～する: prometer)|n
断る|ことわる|recusar|v
許す|ゆるす|perdoar / permitir|v
謝る|あやまる|pedir desculpas|v
褒める|ほめる|elogiar|v
叱る|しかる|repreender|v
信じる|しんじる|acreditar|v
疑う|うたがう|duvidar|v
守る|まもる|proteger / cumprir|v
助ける|たすける|ajudar / salvar|v
生きる|いきる|viver|v
死ぬ|しぬ|morrer|v
生まれる|うまれる|nascer|v
育つ|そだつ|crescer (ser criado)|v
暮らす|くらす|viver (levar a vida)|v
慣れる|なれる|acostumar-se|v
頑張る|がんばる|esforçar-se|v
諦める|あきらめる|desistir|v
間違える|まちがえる|errar|v
間違う|まちがう|estar errado|v
気をつける|きをつける|tomar cuidado|v
気がつく|きがつく|perceber|v
気にする|きにする|se importar / se preocupar|v
決心する|けっしんする|tomar uma decisão|v
用意する|よういする|preparar / providenciar|v
利用する|りようする|utilizar|v
紹介する|しょうかいする|apresentar|v
参加する|さんかする|participar|v
出席する|しゅっせきする|comparecer|v
欠席する|けっせきする|faltar|v
着く|つく|chegar|v
向かう|むかう|dirigir-se a|v
通う|かよう|frequentar (ir regularmente)|v
過ごす|すごす|passar (o tempo)|v
泊まる|とまる|hospedar-se|v
待たせる|またせる|fazer esperar|v
話し合う|はなしあう|conversar (discutir)|v
しゃべる||conversar / tagarelar|v
伝える|つたえる|transmitir / avisar|v
叫ぶ|さけぶ|gritar|v
黙る|だまる|ficar calado|v
頷く|うなずく|acenar com a cabeça|v
眺める|ながめる|contemplar|v
覗く|のぞく|espiar|v
気づく|きづく|perceber|v
感じる|かんじる|sentir|v
におう||cheirar (ter cheiro)|v
味がする|あじがする|ter gosto de|v
音がする|おとがする|fazer barulho / ouvir-se|v
においがする||ter cheiro de|v
寝かせる|ねかせる|pôr para dormir|v
起こす|おこす|acordar (alguém) / causar|v
起こる|おこる|acontecer|v
過ぎる|すぎる|passar (do limite)|v
込む|こむ|ficar lotado|v
空く|すく|esvaziar (ficar vazio)|v
片付く|かたづく|ficar arrumado|v
沸く|わく|ferver (água)|v
沸かす|わかす|ferver (algo)|v
焦げる|こげる|queimar (comida)|v
腐る|くさる|apodrecer / estragar|v
溶ける|とける|derreter|v
凍る|こおる|congelar|v
冷める|さめる|esfriar|v
温まる|あたたまる|esquentar-se|v
光る|ひかる|brilhar|v
鳴る|なる|tocar (som)|v
鳴く|なく|cantar / miar / latir|v
飛ぶ|とぶ|voar / pular|v
浮かぶ|うかぶ|flutuar / vir à mente|v
沈む|しずむ|afundar / pôr-se (sol)|v
流れる|ながれる|correr (fluir)|v
流す|ながす|deixar escorrer / dar descarga|v
揺れる|ゆれる|tremer / balançar|v
燃える|もえる|queimar (pegar fogo)|v
燃やす|もやす|queimar (algo)|v
建てる|たてる|construir|v
支払う|しはらう|pagar|v
稼ぐ|かせぐ|ganhar (dinheiro)|v
もうかる||dar lucro|v
節約する|せつやくする|economizar|v
無駄にする|むだにする|desperdiçar|v
足す|たす|somar / adicionar|v
引き受ける|ひきうける|aceitar (tarefa)|v
受ける|うける|receber / fazer (prova)|v
受かる|うかる|passar (prova)|v
落ち着く|おちつく|acalmar-se|v
楽しみにする|たのしみにする|estar ansioso (positivo)|v
願う|ねがう|desejar|v
祈る|いのる|rezar / desejar|v
憧れる|あこがれる|admirar / sonhar com|v
付き合う|つきあう|namorar / acompanhar|v
別れる|わかれる|separar-se / terminar|v
離れる|はなれる|afastar-se|v
近づく|ちかづく|aproximar-se|v
寄る|よる|passar (em algum lugar)|v
立ち寄る|たちよる|dar uma passada|v
戻す|もどす|devolver / colocar de volta|v
しまう||guardar|v
隠す|かくす|esconder|v
隠れる|かくれる|esconder-se|v
現れる|あらわれる|aparecer|v
表す|あらわす|expressar|v
示す|しめす|indicar / mostrar|v
写す|うつす|copiar / fotografar|v
映る|うつる|refletir / aparecer (na tela)|v
撮る|とる|tirar (foto)|v
録画する|ろくがする|gravar (vídeo)|v
貯まる|たまる|acumular|v
磨く|みがく|polir / escovar|v
剃る|そる|barbear / raspar|v
塗る|ぬる|passar (creme) / pintar|v
外れる|はずれる|soltar-se / errar o alvo|v
当たる|あたる|acertar / ser sorteado|v
当てる|あてる|acertar (adivinhar)|v
慌てる|あわてる|ficar afobado|v
焦る|あせる|ficar apressado / aflito|v
ほっとする||sentir alívio|v
がっかりする||ficar decepcionado|v
どきどきする||ficar com o coração acelerado|v
わくわくする||ficar empolgado|v
いらいらする||ficar irritado|v
にこにこする||sorrir (alegre)|v
ぼーっとする||ficar distraído / avoado|v
すっきりする||sentir-se renovado|v
のんびりする||relaxar / ficar de boa|v
運動不足|うんどうぶそく|falta de exercício|n
見学する|けんがくする|visitar (para conhecer)|v
見物する|けんぶつする|passear vendo / turistar|v
外食する|がいしょくする|comer fora|v
自炊する|じすいする|cozinhar em casa|v
留守番する|るすばんする|ficar tomando conta da casa|v
留守|るす|ausente (não está em casa)|n
世話をする|せわをする|cuidar de|v
看病する|かんびょうする|cuidar de doente|v
介護|かいご|cuidado de idosos|n
子育て|こそだて|criação dos filhos|n
出産|しゅっさん|parto|n
連絡を取る|れんらくをとる|manter contato|v
開店|かいてん|abertura (da loja)|n
閉店|へいてん|fechamento (da loja)|n
営業する|えいぎょうする|funcionar (comércio)|v
譲る|ゆずる|ceder|v
降ろす|おろす|descarregar / sacar (dinheiro)|v
振り込む|ふりこむ|transferir (dinheiro)|v
払い込む|はらいこむ|pagar (depositar)|v
済ませる|すませる|concluir / dar conta de|v
済む|すむ|terminar / resolver-se|v
起き上がる|おきあがる|levantar-se|v
立ち上がる|たちあがる|ficar de pé|v
飛び出す|とびだす|sair correndo|v
走り出す|はしりだす|começar a correr|v
泣き出す|なきだす|começar a chorar|v
思い出す|おもいだす|lembrar-se|v
言い出す|いいだす|começar a dizer / propor|v
取り出す|とりだす|tirar (de dentro)|v
見つめる|みつめる|olhar fixamente|v
見直す|みなおす|rever|v
書き直す|かきなおす|reescrever|v
やり直す|やりなおす|refazer|v
言い直す|いいなおす|dizer de novo (corrigir)|v
聞き取る|ききとる|entender (ouvindo)|v
聞き返す|ききかえす|perguntar de novo|v
話しかける|はなしかける|puxar conversa|v
呼びかける|よびかける|chamar / apelar|v
出会う|であう|conhecer (por acaso)|v
待ち合わせる|まちあわせる|marcar de se encontrar|v
待ち合わせ|まちあわせ|encontro marcado|n
乗り遅れる|のりおくれる|perder (o trem/ônibus)|v
乗り過ごす|のりすごす|passar do ponto|v
寝過ごす|ねすごす|dormir demais|v
食べ過ぎる|たべすぎる|comer demais|v
飲み過ぎる|のみすぎる|beber demais|v
取り替える|とりかえる|trocar (substituir)|v
入れ替える|いれかえる|trocar (de lugar)|v
付け加える|つけくわえる|acrescentar|v
加える|くわえる|adicionar|v
含む|ふくむ|incluir|v
除く|のぞく|excluir|v
確かめる|たしかめる|verificar|v
認める|みとめる|reconhecer / admitir|v
勧める|すすめる|recomendar|v
求める|もとめる|pedir / buscar|v
与える|あたえる|dar / conceder|v
得る|える|obter|v
失う|うしなう|perder|v
防ぐ|ふせぐ|prevenir|v
避ける|さける|evitar|v
離す|はなす|separar / soltar|v
引っ張る|ひっぱる|puxar|v
支える|ささえる|apoiar / sustentar|v
頼る|たよる|depender de / contar com|v
従う|したがう|seguir / obedecer|v
迷惑をかける|めいわくをかける|causar incômodo|v
迷惑|めいわく|incômodo|na
邪魔|じゃま|atrapalho / estorvo (～する: atrapalhar)|na
怒られる|おこられる|levar bronca|v
褒められる|ほめられる|ser elogiado|v
頼まれる|たのまれる|ser pedido (receber um pedido)|v
誘われる|さそわれる|ser convidado|v
言われる|いわれる|ouvir (alguém dizer a você)|v
生まれ育つ|うまれそだつ|nascer e crescer|v
成長する|せいちょうする|crescer / desenvolver-se|v
上達する|じょうたつする|melhorar (numa habilidade)|v
発表する|はっぴょうする|apresentar / anunciar|v
表現する|ひょうげんする|expressar|v
想像する|そうぞうする|imaginar|v
理解する|りかいする|compreender|v
賛成する|さんせいする|concordar|v
反対する|はんたいする|ser contra|v
比較する|ひかくする|comparar|v
計算する|けいさんする|calcular|v
記録する|きろくする|registrar|v
保存する|ほぞんする|salvar / conservar|v
削除する|さくじょする|apagar (dados)|v
変更する|へんこうする|alterar|v
中止する|ちゅうしする|cancelar (evento)|v
延期する|えんきする|adiar|v
はまる||ficar viciado / encaixar|v
すべる||escorregar|v
こぼす||derramar|v
こぼれる||derramar-se|v
こする||esfregar|v
しぼる||espremer / torcer|v
ほどく||desamarrar|v
はがす||descolar / arrancar|v
むく||descascar|v
刻む|きざむ|picar (cortar miúdo)|v
注ぐ|そそぐ|despejar / servir (bebida)|v
盛る|もる|servir (no prato)|v
詰める|つめる|encher / apertar (espaço)|v
詰まる|つまる|entupir|v
漏れる|もれる|vazar|v
冷える|ひえる|esfriar / gelar|v
しみる||arder / penetrar|v
効く|きく|fazer efeito|v
寝つく|ねつく|pegar no sono|v
眠る|ねむる|dormir|v
夢を見る|ゆめをみる|sonhar|v
暮らし|くらし|vida / modo de vida|n
住まい|すまい|moradia|n
荷造り|にづくり|fazer as malas|n
まとめる||organizar / juntar|v
預ける|あずける|deixar guardado / depositar|v
預かる|あずかる|guardar (para alguém)|v
受け付ける|うけつける|aceitar / receber (pedidos)|v
問い合わせる|といあわせる|fazer consulta / perguntar|v
問い合わせ|といあわせ|consulta / contato|n
申し訳ない|もうしわけない|sentir muito|i
ご馳走|ごちそう|banquete / refeição especial (～する: convidar (pagar a refeição))|n
#形容詞|Adjetivos
長い|ながい|comprido / longo|i
短い|みじかい|curto|i
広い|ひろい|amplo / espaçoso|i
狭い|せまい|apertado / estreito|i
重い|おもい|pesado|i
軽い|かるい|leve|i
低い|ひくい|baixo|i
太い|ふとい|grosso|i
細い|ほそい|fino|i
厚い|あつい|grosso (espessura)|i
薄い|うすい|fino / fraco (sabor, cor)|i
濃い|こい|forte / escuro (sabor, cor)|i
深い|ふかい|profundo|i
浅い|あさい|raso|i
丸い|まるい|redondo|i
四角い|しかくい|quadrado|i
近い|ちかい|perto|i
遠い|とおい|longe|i
早い|はやい|cedo|i
速い|はやい|rápido|i
遅い|おそい|tarde / lento|i
難しい|むずかしい|difícil|i
易しい|やさしい|fácil|i
簡単|かんたん|simples / fácil|na
忙しい|いそがしい|ocupado|i
暇|ひま|livre / desocupado|na
楽|らく|fácil / confortável|na
大変|たいへん|difícil / trabalhoso|na
強い|つよい|forte|i
弱い|よわい|fraco|i
黄色い|きいろい|amarelo|i
茶色い|ちゃいろい|marrom|i
緑|みどり|verde|n
色|いろ|cor|n
紫|むらさき|roxo|n
灰色|はいいろ|cinza|n
金色|きんいろ|dourado|n
銀色|ぎんいろ|prateado|n
汚い|きたない|sujo|i
臭い|くさい|fedido|i
危ない|あぶない|perigoso|i
危険|きけん|perigoso|na
安全|あんぜん|seguro|na
静か|しずか|silencioso|na
にぎやか||animado / movimentado|na
便利|べんり|prático / conveniente|na
不便|ふべん|inconveniente|na
有名|ゆうめい|famoso|na
上手|じょうず|habilidoso / bom em|na
下手|へた|ruim em|na
得意|とくい|bom em / ponto forte|na
苦手|にがて|ruim em / ponto fraco|na
丈夫|じょうぶ|resistente / forte|na
大切|たいせつ|importante / precioso|na
大事|だいじ|importante|na
重要|じゅうよう|importante|na
特別|とくべつ|especial|na
普通|ふつう|normal / comum|na
同じ|おなじ|mesmo / igual|x
違う|ちがう|ser diferente / estar errado|v
色々|いろいろ|vários|na
様々|さまざま|diversos|na
自由|じゆう|livre / liberdade|na
無理|むり|impossível / forçado|na
十分|じゅうぶん|suficiente|na
確か|たしか|certo / se não me engano|na
正しい|ただしい|correto|i
詳しい|くわしい|detalhado / entender bem|i
珍しい|めずらしい|raro|i
素晴らしい|すばらしい|maravilhoso|i
素敵|すてき|lindo / encantador|na
立派|りっぱ|esplêndido|na
完璧|かんぺき|perfeito|na
変|へん|estranho|na
不思議|ふしぎ|misterioso / estranho|na
複雑|ふくざつ|complicado|na
単純|たんじゅん|simples|na
適当|てきとう|adequado / de qualquer jeito|na
真剣|しんけん|sério (a sério)|na
一生懸命|いっしょうけんめい|com todo esforço|na
熱心|ねっしん|dedicado / entusiasmado|na
上品|じょうひん|elegante / refinado|na
清潔|せいけつ|limpo / higiênico|na
快適|かいてき|confortável|na
健康的|けんこうてき|saudável|na
有名人|ゆうめいじん|celebridade|n
ひどい||horrível / cruel|i
すごく||muito|adv
偉い|えらい|admirável / importante|i
うまい||gostoso / habilidoso|i
可愛らしい|かわいらしい|graciosa / fofinha|i
ありがたい||grato / bem-vindo|i
もったいない||que desperdício|i
しつこい||insistente|i
細かい|こまかい|detalhado / miúdo|i
緩い|ゆるい|folgado / frouxo|i
きつい||apertado / puxado|i
まぶしい||ofuscante|i
ぬるい||morno (meio frio)|i
騒がしい|さわがしい|barulhento|i
親しい|したしい|próximo / íntimo|i
仲がいい|なかがいい|ser próximo / se dar bem|i
怪しい|あやしい|suspeito|i
惜しい|おしい|quase! / que pena|i
激しい|はげしい|intenso|i
正確|せいかく|preciso / exato|na
楽しみ|たのしみ|ansiedade boa / expectativa|n
ほしい||querer (algo)|i
ない||não ter / não haver|i
かわいそう||coitado|na
おかしい||estranho / engraçado|i
気持ちいい|きもちいい|gostoso (sensação) / agradável|i
心地いい|ここちいい|confortável|i
居心地がいい|いごこちがいい|aconchegante|i
不安定|ふあんてい|instável|na
面倒|めんどう|trabalhoso / chato|na
面倒くさい|めんどうくさい|que preguiça / chato de fazer|i
楽しそう|たのしそう|parece divertido|na
おいしそう||parece gostoso|na
元気そう|げんきそう|parece bem|na
嬉しそう|うれしそう|parece feliz|na
若々しい|わかわかしい|jovial|i
ずるい||trapaceiro / injusto|i
ちょうどいい||na medida certa|i
すばやい||ágil|i
のろい||lento|i
真っ白|まっしろ|branquinho|na
真っ黒|まっくろ|pretinho|na
真っ赤|まっか|vermelhíssimo|na
真っ青|まっさお|azul intenso / pálido|na
真っ暗|まっくら|escuríssimo|na
#副詞・つなぐ言葉|Advérbios e conectivos
本当に|ほんとうに|realmente|adv
かなり||bastante|adv
結構|けっこう|bastante / razoavelmente|adv
もっと||mais|adv
一番|いちばん|o mais / número um|adv
よく||bem / frequentemente|adv
あまり||não muito (com negação)|adv
全然|ぜんぜん|nada / de jeito nenhum|adv
全く|まったく|totalmente / nada|adv
たまに||de vez em quando|adv
時々|ときどき|às vezes|adv
いつも||sempre|adv
いつか||algum dia|adv
いつでも||a qualquer hora|adv
どこでも||em qualquer lugar|adv
何でも|なんでも|qualquer coisa|adv
誰でも|だれでも|qualquer pessoa|adv
もう||já / mais|adv
まだ||ainda|adv
すぐ||logo / imediatamente|adv
すぐに||imediatamente|adv
今すぐ|いますぐ|agora mesmo|adv
早く|はやく|cedo / rápido|adv
やっと||finalmente|adv
ついに||finalmente (enfim)|adv
とうとう||finalmente (por fim)|adv
初めて|はじめて|pela primeira vez|adv
最初に|さいしょに|primeiro|adv
まず||antes de tudo|adv
次に|つぎに|em seguida|adv
最後に|さいごに|por último|adv
また||de novo / também|adv
もう一回|もういっかい|mais uma vez|adv
一緒に|いっしょに|juntos|adv
一人で|ひとりで|sozinho|adv
自分で|じぶんで|por conta própria|adv
きっと||com certeza|adv
たぶん||provavelmente|adv
もしかしたら||talvez|adv
必ず|かならず|sem falta|adv
絶対|ぜったい|com certeza absoluta|adv
ぜひ||sem falta / por favor|adv
なるべく||na medida do possível|adv
できるだけ||o máximo possível|adv
ちゃんと||direito / corretamente|adv
しっかり||firmemente / bem|adv
はっきり||claramente|adv
きちんと||direitinho|adv
だんだん||aos poucos|adv
どんどん||cada vez mais / rapidamente|adv
少しずつ|すこしずつ|pouco a pouco|adv
ずっと||o tempo todo / muito mais|adv
しばらく||por um tempo|adv
そろそろ||já está na hora|adv
ちょうど||exatamente / bem na hora|adv
ほとんど||quase tudo / quase|adv
ほぼ||quase|adv
特に|とくに|especialmente|adv
例えば|たとえば|por exemplo|adv
実は|じつは|na verdade|adv
やはり||como esperado|adv
やっぱり||como esperado / afinal|adv
もし||se (caso)|adv
どうして||por quê|adv
なぜ||por quê|adv
どう||como|adv
どうやって||de que jeito|adv
どのくらい||quanto (tempo, quantidade)|adv
こう||assim|adv
そう||assim / desse jeito|adv
ああ||daquele jeito|adv
なかなか||bastante / difícil de (com negação)|adv
さすが||como era de se esperar|adv
わざわざ||se dar ao trabalho|adv
せっかく||já que (se deu ao trabalho)|adv
うっかり||sem querer / por descuido|adv
こっそり||escondido|adv
ぴったり||perfeitamente / sob medida|adv
ばっちり||perfeito|adv
ぐっすり||(dormir) profundamente|adv
にっこり||sorrindo|adv
ぺこぺこ||morrendo de fome|na
へとへと||exausto|na
ぎりぎり||por pouco / no limite|na
ばらばら||espalhado / separado|na
さっぱり||refrescante / nada (com negação)|adv
びしょびしょ||encharcado|na
ふわふわ||fofinho|na
つるつる||liso / escorregadio|na
ぺらぺら||fluente|na
急に|きゅうに|de repente|adv
突然|とつぜん|de repente|adv
偶然|ぐうぜん|por acaso|adv
相変わらず|あいかわらず|como sempre|adv
改めて|あらためて|novamente / outra vez|adv
代わりに|かわりに|em vez de|adv
先に|さきに|antes / na frente|adv
直接|ちょくせつ|diretamente|adv
そして||e (então)|x
それから||e depois|x
でも||mas|x
しかし||porém|x
だから||por isso|x
それで||então / por isso|x
ですから||portanto|x
なので||por isso|x
けど||mas (coloquial)|x
けれども||porém|x
それに||além disso|x
または||ou|x
それとも||ou (pergunta)|x
つまり||ou seja|x
ところで||a propósito|x
じゃあ||então|x
では||então (formal)|x
どれ||qual|x
この||este (+ substantivo)|x
その||esse (+ substantivo)|x
あの人|あのひと|aquela pessoa|n
どの||qual (+ substantivo)|x
こんな||assim (deste tipo)|x
そんな||desse tipo|x
あんな||daquele tipo|x
どんな||que tipo de|x
何か|なにか|alguma coisa|x
誰か|だれか|alguém|x
どこか||algum lugar|x
何も|なにも|nada (com negação)|x
誰も|だれも|ninguém (com negação)|x
どこにも||em lugar nenhum|x
みなさん||todos (vocês)|n
ほか||outro|n
他の|ほかの|outro (+ substantivo)|x
別|べつ|outro / separado|na
それぞれ||cada um|n
両方|りょうほう|ambos|n
片方|かたほう|um dos dois|n
だけ||só / apenas|x
しか||só (com negação)|x
ばかり||só / acabou de|x
くらい||mais ou menos|x
ほど||cerca de / tanto quanto|x
まで||até|x
から||de / desde / porque|x
ので||porque|x
のに||apesar de / mesmo que|x
ため||para / por causa de|x
ように||para que / como|x
みたい||parece / como|na
らしい||parece que / típico de|x
はず||deveria / supõe-se|n
つもり||intenção|n
かもしれない||talvez|x
でしょう||provavelmente|x
そうだ||dizem que / parece|x
#よく使う名詞|Substantivos comuns
物|もの|coisa|n
事|こと|coisa (assunto, fato)|n
話|はなし|conversa / história|n
用事|ようじ|compromisso / algo para fazer|n
理由|りゆう|motivo|n
原因|げんいん|causa|n
結果|けっか|resultado|n
目的|もくてき|objetivo|n
目標|もくひょう|meta|n
方法|ほうほう|método / jeito|n
やり方|やりかた|jeito de fazer|n
意見|いけん|opinião|n
考え|かんがえ|ideia / pensamento|n
気|き|espírito / atenção|n
興味|きょうみ|interesse|n
関係|かんけい|relação|n
違い|ちがい|diferença|n
特徴|とくちょう|característica|n
種類|しゅるい|tipo / espécie|n
部分|ぶぶん|parte|n
全体|ぜんたい|todo / conjunto|n
中心|ちゅうしん|centro|n
周り|まわり|arredores / em volta|n
側|がわ|lado|n
表|おもて|frente / tabela|n
裏|うら|verso / atrás|n
方|ほう|lado / direção|n
形|かたち|forma|n
音|おと|som|n
におい||cheiro|n
様子|ようす|aspecto / situação|n
状態|じょうたい|estado / condição|n
場合|ばあい|caso / situação|n
機会|きかい|oportunidade|n
問題ない|もんだいない|sem problema|x
都合|つごう|conveniência / disponibilidade|n
予算|よさん|orçamento|n
計画|けいかく|plano|n
準備中|じゅんびちゅう|em preparação|n
営業中|えいぎょうちゅう|aberto (funcionando)|n
休業|きゅうぎょう|fechado (não funciona)|n
定休日|ていきゅうび|dia de folga fixo (loja)|n
営業時間|えいぎょうじかん|horário de funcionamento|n
注意|ちゅうい|atenção / cuidado (～する: prestar atenção / advertir)|n
規則|きそく|regra|n
マナー||boas maneiras|n
習慣|しゅうかん|hábito / costume|n
文化|ぶんか|cultura|n
歴史|れきし|história|n
社会|しゃかい|sociedade|n
生活|せいかつ|vida (dia a dia)|n
人生|じんせい|vida (trajetória)|n
命|いのち|vida|n
経済|けいざい|economia|n
政治|せいじ|política|n
法律|ほうりつ|lei|n
戦争|せんそう|guerra|n
平和|へいわ|paz|na
環境|かんきょう|meio ambiente|n
情報|じょうほう|informação|n
技術|ぎじゅつ|técnica / tecnologia|n
科学|かがく|ciência|n
宗教|しゅうきょう|religião|n
言語|げんご|idioma|n
方言|ほうげん|dialeto|n
敬語|けいご|linguagem formal (keigo)|n
冗談|じょうだん|piada|n
嘘|うそ|mentira|n
秘密|ひみつ|segredo|n
噂|うわさ|boato|n
自信|じしん|autoconfiança|n
勇気|ゆうき|coragem|n
努力|どりょく|esforço|n
成功|せいこう|sucesso (～する: ter sucesso)|n
失敗|しっぱい|erro / fracasso (～する: errar / falhar)|n
間違い|まちがい|erro|n
変化|へんか|mudança|n
差|さ|diferença|n
力|ちから|força|n
元|もと|origem / antes|n
半年|はんとし|meio ano|n
一生|いっしょう|a vida toda|n
思い出|おもいで|lembrança|n
記憶|きおく|memória|n
お礼|おれい|agradecimento|n
お願い|おねがい|pedido / favor|n
お詫び|おわび|desculpas (formal)|n
挨拶|あいさつ|cumprimento|n
自己紹介|じこしょうかい|autoapresentação|n
会話|かいわ|conversa|n
声をかける|こえをかける|chamar / puxar conversa|v
トラブル||problema / encrenca|n
故障|こしょう|defeito / pane|n
修理|しゅうり|conserto (～する: consertar)|n
工事|こうじ|obra|n
工事中|こうじちゅう|em obras|n
騒音|そうおん|barulho (ruído)|n
騒ぐ|さわぐ|fazer barulho / bagunçar|v
苦情|くじょう|reclamação|n
文句|もんく|reclamação / queixa|n
お知らせ|おしらせ|aviso / comunicado|n
案内|あんない|guia / informação (～する: guiar / mostrar o caminho)|n
説明書|せつめいしょ|manual|n
表示|ひょうじ|indicação / exibição|n
人数|にんずう|número de pessoas|n
空席|くうせき|lugar vago|n
満席|まんせき|lotado (todos os lugares)|n
指定席|していせき|assento reservado|n
自由席|じゆうせき|assento livre (sem reserva)|n
窓側|まどがわ|lado da janela|n
通路側|つうろがわ|lado do corredor|n
行き先|いきさき|destino|n
～行き|～いき|com destino a …|x
～方面|～ほうめん|sentido …|x
～番線|～ばんせん|plataforma nº …|x
～号車|～ごうしゃ|vagão nº …|x
近道|ちかみち|atalho|n
遠回り|とおまわり|caminho mais longo|n
徒歩|とほ|a pé|n
歩いて|あるいて|a pé (andando)|adv
目の前|めのまえ|bem na frente|n
すぐそこ||logo ali|x
向かい|むかい|em frente (do outro lado)|n
突き当たり|つきあたり|fim da rua|n
一つ目|ひとつめ|primeiro (da ordem)|n
二つ目|ふたつめ|segundo (da ordem)|n
半日|はんにち|meio dia|n
一日中|いちにちじゅう|o dia todo|n
一晩中|ひとばんじゅう|a noite toda|n
年中|ねんじゅう|o ano todo|n
朝早く|あさはやく|de manhã cedo|adv
夜遅く|よるおそく|tarde da noite|adv
日中|にっちゅう|durante o dia|n
深夜|しんや|madrugada|n
早朝|そうちょう|madrugada / bem cedo|n
昼間|ひるま|durante o dia|n
その日|そのひ|nesse dia|n
次の日|つぎのひ|no dia seguinte|n
前の日|まえのひ|no dia anterior|n
この前|このまえ|outro dia|n
今度|こんど|da próxima vez|n
今回|こんかい|desta vez|n
前回|ぜんかい|da última vez|n
毎回|まいかい|toda vez|n
年末年始|ねんまつねんし|fim e começo de ano|n
来日|らいにち|vinda ao Japão|n
帰国|きこく|volta ao país de origem (～する: voltar ao país)|n
一時帰国|いちじきこく|visita temporária ao país|n
意外|いがい|inesperado|na
当然|とうぜん|natural / óbvio|na
当たり前|あたりまえ|óbvio / normal|na
普段|ふだん|normalmente / no dia a dia|n
日常|にちじょう|cotidiano|n
一般|いっぱん|geral / comum|n
基本|きほん|básico / base|n
初心者|しょしんしゃ|iniciante|n
上級|じょうきゅう|avançado|n
中級|ちゅうきゅう|intermediário|n
初級|しょきゅう|básico (nível)|n
最高|さいこう|o melhor / incrível|na
最低|さいてい|o pior / no mínimo|na
最大|さいだい|o maior / máximo|n
最小|さいしょう|o menor / mínimo|n
最新|さいしん|o mais novo|n
一部|いちぶ|uma parte|n
全国|ぜんこく|todo o país|n
地方|ちほう|região / interior|n
県|けん|província|n
都道府県|とどうふけん|províncias do Japão|n
首都|しゅと|capital|n
人口|じんこう|população|n
大阪|おおさか|Osaka|n
京都|きょうと|Kyoto|n
北海道|ほっかいどう|Hokkaido|n
沖縄|おきなわ|Okinawa|n
中国|ちゅうごく|China|n
韓国|かんこく|Coreia do Sul|n
都市|とし|cidade (metrópole)|n
郊外|こうがい|subúrbio|n
駅前|えきまえ|em frente à estação|n
`;
