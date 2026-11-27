/* ことばの例文。1行に1つ：ことば（vocab.js の1列目と同じ）|例文|ポルトガル語
   - 例文がない単語は、助詞・作文の問題からその単語をふくむ一番短い文を自動で出す。
   - 例文の漢字は、ふりがなの辞書（FURI）か vocab.js の読みで読めるものにする（足したら全部の文のふりがなを確かめる）。
   - 書く順：単語が出てくる順（カテゴリーの順）に、少しずつ足す。 */
const EXAMPLES_TXT = `
失礼します|会議室に入るとき、「失礼します」と言います。|Ao entrar na sala de reunião, dizemos “shitsurei shimasu”.
いってきます|「いってきます！」と言って、仕事に行きました。|Disse “já vou!” e foi trabalhar.
いってらっしゃい|ジャスは毎朝「いってらっしゃい」と言ってくれます。|Todas as manhãs o Jas me diz “vá e volte bem”.
ただいま|ただいま！今日はとても疲れたよ。|Cheguei! Hoje eu estou muito cansada.
おかえり|おかえり！ご飯できてるよ。|Bem-vindo de volta! O jantar está pronto.
そうですね|「今日は寒いですね。」「そうですね。」|“Está frio hoje, né?” “Pois é.”
なるほど|なるほど、そういう意味ですか。|Entendi, então é esse o significado.
お疲れ様です|お疲れ様です。お先に失礼します。|Bom trabalho. Vou indo na frente.
お先に失礼します|仕事が終わったので、お先に失礼します。|Terminei o trabalho, então vou indo na frente.
お大事に|風邪ですか。お大事に。|Está resfriado? Melhoras.
おめでとうございます|ご結婚、おめでとうございます。|Parabéns pelo casamento.
いらっしゃいませ|店に入ると、「いらっしゃいませ」と言われました。|Quando entrei na loja, me disseram “seja bem-vinda”.
かしこまりました|「コーヒーを二つください。」「かしこまりました。」|“Dois cafés, por favor.” “Pois não.”
少々お待ちください|少々お待ちください。すぐに確認します。|Aguarde um momento, por favor. Vou verificar já.
ちょっと待って|ちょっと待って！すぐ行くよ。|Espera um pouco! Já estou indo.
知りません|すみません、その人は知りません。|Desculpe, não conheço essa pessoa.
どうも|どうも、ありがとうございます。|Muito obrigada.
いいですね|週末に海に行くんですか。いいですね。|Vai para a praia no fim de semana? Que legal.
やった|やった！テストに合格した！|Oba! Passei na prova!
よかった|財布が見つかって、よかった。|Que bom que a carteira apareceu.
残念|雨で花火が中止になって、残念です。|Que pena que os fogos foram cancelados por causa da chuva.
仕方ない|電車が遅れたから、仕方ないね。|O trem atrasou, não tem jeito.
お元気ですか|お母さん、お元気ですか。|Mãe, como vai?
お久しぶりです|お久しぶりです。元気でしたか。|Quanto tempo! Você estava bem?
乾杯|みんなで「乾杯！」と言いました。|Todos disseram “saúde!”.
せーの|せーので、いっしょに写真を撮ろう。|No “um, dois, já”, vamos tirar a foto juntos.
もしもし|もしもし、ジャス？今、駅に着いたよ。|Alô, Jas? Acabei de chegar na estação.
えっと|えっと、駅はどっちだったかな。|Hmm, para que lado era a estação mesmo?
ほら|ほら、富士山が見えるよ！|Olha, dá para ver o Monte Fuji!
ねえ|ねえ、明日どこに行きたい？|Ei, aonde você quer ir amanhã?
さあ|さあ、出かけよう！|Vamos, vamos sair!
まあまあ|日本語のテストはまあまあでした。|A prova de japonês foi mais ou menos.
とりあえず|とりあえず、ビールをください。|Por enquanto, uma cerveja, por favor.
楽しかった|今日のデートは本当に楽しかった。|O encontro de hoje foi muito divertido.
疲れました|今日はたくさん歩いて、疲れました。|Hoje eu andei muito e fiquei cansada.
気分が悪い|バスの中で気分が悪くなりました。|Passei mal dentro do ônibus.
楽しみにしています|日本に行く日を楽しみにしています。|Estou ansiosa pelo dia de ir ao Japão.
会えて嬉しい|やっと会えて嬉しい！|Que feliz que finalmente nos encontramos!
気にしないで|大丈夫、気にしないで。|Tudo bem, não se preocupe.
無理しないで|熱があるなら、無理しないで休んでね。|Se está com febre, não se force e descanse.
大好きだよ|ジャス、大好きだよ。|Jas, eu te adoro.
どうしよう|どうしよう、鍵をなくしちゃった。|E agora? Perdi a chave.
しょうがない|雨だから、しょうがないね。|Está chovendo, não tem jeito.
まさか|まさか、本当に来てくれたの？|Não acredito, você veio mesmo?
いいよ|「一緒に行ってもいい？」「いいよ。」|“Posso ir junto?” “Pode.”
だめ|ここで写真を撮ってはだめです。|Não pode tirar foto aqui.
大丈夫です|「袋はいりますか。」「大丈夫です。」|“Precisa de sacola?” “Não, obrigada.”
結構です|お水はもう結構です。ありがとうございます。|Água não precisa mais. Obrigada.
どうしたの|どうしたの？元気がないね。|O que houve? Você está desanimada.
どうしましたか|どうしましたか。どこが痛いですか。|O que aconteceu? Onde dói?
わかった|わかった、七時に駅で待ってるね。|Entendi, vou esperar na estação às sete.
了解|了解！すぐ行きます。|Ok! Vou já.
また今度|今日は忙しいから、また今度ね。|Hoje estou ocupada, fica para a próxima.
またあとで|またあとで電話するね。|Te ligo mais tarde.
すみませんが|すみませんが、もう一度言ってください。|Desculpe, mas pode repetir, por favor?
申し訳ありません|遅れてしまって、申し訳ありません。|Sinto muito pelo atraso.
恐れ入ります|恐れ入りますが、お名前をお願いします。|Com licença, seu nome, por favor.
大切にする|この指輪をずっと大切にします。|Vou cuidar deste anel para sempre.
会える|来年の二月に、やっと会える。|Em fevereiro do ano que vem, finalmente vamos nos ver.
待ち遠しい|日本に行く日が待ち遠しいです。|Mal posso esperar pelo dia de ir ao Japão.
恋しい|ブラジルの家族が恋しいです。|Sinto saudade da minha família no Brasil.
愛しい|愛しい人と一緒にいたい。|Quero ficar com a pessoa que eu amo.
そばにいる|ずっとそばにいるよ。|Vou ficar sempre ao seu lado.
見守る|両親がいつも見守ってくれています。|Meus pais sempre cuidam de mim.
支え合う|二人で支え合って生きていきたい。|Quero viver com nós dois nos apoiando.
抱っこ|赤ちゃんを抱っこしました。|Peguei o bebê no colo.
手をつなぐ|公園で手をつないで歩きました。|Andamos de mãos dadas no parque.
約束を守る|ジャスはいつも約束を守ります。|O Jas sempre cumpre as promessas.
二人の時間|週末は二人の時間を大切にしたい。|No fim de semana quero valorizar nosso tempo a dois.
宝物|この手紙は私の宝物です。|Esta carta é o meu tesouro.
贈り物|母に贈り物を送りました。|Mandei um presente para a minha mãe.
花束|誕生日に花束をもらいました。|Ganhei um buquê de flores no aniversário.
手作り|手作りのケーキを作りました。|Fiz um bolo caseiro.
お揃い|お揃いのコップを買いました。|Compramos copos iguais.
記念写真|空港で記念写真を撮りました。|Tiramos uma foto de recordação no aeroporto.
思いやり|ジャスは思いやりがある人です。|O Jas é uma pessoa atenciosa.
笑い声|子供たちの笑い声が聞こえます。|Dá para ouvir as risadas das crianças.
寝顔|ジャスの寝顔はかわいいです。|O Jas dormindo é fofo.
ありのまま|ありのままの私でいい？|Tudo bem eu ser do jeito que sou?
いつまでも|いつまでも一緒にいようね。|Vamos ficar juntos para sempre.
これからも|これからもよろしくね。|Conto com você daqui para frente também.
ずっと前から|ずっと前から日本に行きたかった。|Faz muito tempo que eu queria ir ao Japão.
おかえりなさい|おかえりなさい。お仕事、お疲れ様。|Bem-vindo de volta. Bom trabalho hoje.
一緒にいよう|これからもずっと一緒にいよう。|Vamos ficar sempre juntos.
新しい生活|日本で新しい生活が始まります。|Uma vida nova vai começar no Japão.
第一歩|今日が新しい生活の第一歩です。|Hoje é o primeiro passo da vida nova.
僕|僕はブラジルが大好きです。|Eu amo o Brasil.
みんな|みんなで晩ご飯を食べましょう。|Vamos jantar todos juntos.
自分|自分で料理を作ります。|Eu mesma faço a comida.
父|父は銀行で働いています。|Meu pai trabalha no banco.
母|母は料理が上手です。|Minha mãe cozinha bem.
兄|兄は東京に住んでいます。|Meu irmão mais velho mora em Tóquio.
姉|姉は二人の子供がいます。|Minha irmã mais velha tem dois filhos.
弟|弟はサッカーが好きです。|Meu irmão mais novo gosta de futebol.
妹|妹は大学生です。|Minha irmã mais nova é universitária.
お兄さん|ジャスのお兄さんは優しいです。|O irmão mais velho do Jas é gentil.
お姉さん|お姉さんは何歳ですか。|Quantos anos tem sua irmã mais velha?
兄弟|兄弟は何人いますか。|Quantos irmãos você tem?
祖父|祖父は九十歳です。|Meu avô tem noventa anos.
祖母|祖母の家は海の近くです。|A casa da minha avó fica perto do mar.
おじいさん|おじいさんが公園を散歩しています。|Um senhor está passeando no parque.
おばあさん|電車でおばあさんに席を譲りました。|No trem, cedi o lugar para uma senhora.
おじさん|おじさんがお年玉をくれました。|Meu tio me deu dinheiro de Ano-Novo.
おばさん|隣のおばさんはとても親切です。|A senhora do lado é muito gentil.
いとこ|いとこの結婚式に行きます。|Vou ao casamento do meu primo.
孫|祖母は孫が五人います。|Minha avó tem cinco netos.
夫|夫は会社員です。|Meu marido é funcionário de empresa.
妻|妻はブラジル人です。|Minha esposa é brasileira.
主人|主人は今、出かけています。|Meu marido saiu agora.
奥さん|田中さんの奥さんは料理の先生です。|A esposa do Sr. Tanaka é professora de culinária.
旦那さん|旦那さんはお元気ですか。|Seu marido está bem?
息子|息子は小学生です。|Meu filho está no primário.
娘|娘はピアノを習っています。|Minha filha faz aula de piano.
親|親に電話をしました。|Liguei para os meus pais.
親戚|お正月に親戚が集まります。|No Ano-Novo os parentes se reúnem.
義理の母|義理の母と一緒に料理をしました。|Cozinhei junto com a minha sogra.
義理の父|義理の父は釣りが好きです。|Meu sogro gosta de pescar.
夫婦|あの夫婦はとても仲がいいです。|Aquele casal se dá muito bem.
恋人|恋人と映画を見ました。|Vi um filme com meu namorado.
親友|親友に手紙を書きました。|Escrevi uma carta para minha melhor amiga.
知り合い|知り合いに仕事を紹介してもらいました。|Um conhecido me apresentou um trabalho.
大人|大人二人、子供一人です。|Dois adultos e uma criança.
若者|この町は若者が多いです。|Esta cidade tem muitos jovens.
お年寄り|お年寄りに席を譲りましょう。|Vamos ceder o lugar aos idosos.
近所の人|近所の人にあいさつをしました。|Cumprimentei os vizinhos.
隣の人|隣の人はとても静かです。|A pessoa ao lado é muito quieta.
お客さん|今日はお客さんが来ます。|Hoje vem visita.
どなた|失礼ですが、どなたですか。|Com licença, quem é o senhor?
名字|日本では名字で呼ぶことが多いです。|No Japão é comum chamar as pessoas pelo sobrenome.
年|ジャスは私より年が上です。|O Jas é mais velho do que eu.
結婚式|結婚式は神社でしたいです。|Quero fazer o casamento num santuário.
婚約|二人は婚約しました。|Os dois ficaram noivos.
離婚|両親は離婚していません。|Meus pais não são divorciados.
記念日|二月二十五日は私たちの記念日です。|25 de fevereiro é o nosso aniversário de namoro.
デート|週末に浅草でデートしました。|No fim de semana tivemos um encontro em Asakusa.
仲間|仕事の仲間と食事に行きました。|Fui comer com os colegas de trabalho.
仲良し|私たちは仲良しです。|Nós somos muito amigos.
仲直り|喧嘩したけど、すぐ仲直りしました。|Brigamos, mas logo fizemos as pazes.
喧嘩|小さいことで喧嘩しました。|Brigamos por uma bobagem.
片思い|高校のとき、片思いをしていました。|No colégio, eu tinha um amor não correspondido.
両思い|二人は両思いです。|Os dois se gostam.
一目惚れ|初めて会ったとき、一目惚れしました。|Quando nos conhecemos, foi amor à primeira vista.
遠距離恋愛|私たちは遠距離恋愛をしています。|Nós namoramos a distância.
告白|ジャスが先に告白しました。|O Jas se declarou primeiro.
婚約者|こちらは私の婚約者です。|Este é o meu noivo.
新婚|二人は新婚です。|Os dois são recém-casados.
新婚旅行|新婚旅行は沖縄に行きたい。|Quero ir para Okinawa na lua de mel.
同棲|日本で同棲を始めます。|Vamos começar a morar juntos no Japão.
ずっと一緒|これからもずっと一緒だよ。|Vamos estar sempre juntos daqui para frente.
大切な人|あなたは私の大切な人です。|Você é a pessoa mais querida para mim.
相手|結婚の相手を両親に紹介しました。|Apresentei aos meus pais a pessoa com quem vou casar.
お互い|お互いの国の料理を作りましょう。|Vamos cozinhar a comida do país um do outro.
信頼|二人の間には信頼があります。|Existe confiança entre nós dois.
家庭|温かい家庭を作りたいです。|Quero formar um lar aconchegante.
実家|お正月はジャスの実家に行きます。|No Ano-Novo vamos para a casa dos pais do Jas.
里帰り|夏に里帰りをする予定です。|Planejo visitar minha terra natal no verão.
親孝行|両親を旅行に連れていって、親孝行しました。|Levei meus pais para viajar para retribuir a eles.
家族旅行|毎年、家族旅行に行きます。|Todo ano fazemos uma viagem em família.
誕生日会|友達の誕生日会に呼ばれました。|Fui convidada para a festa de aniversário de uma amiga.
お見舞い|入院している友達のお見舞いに行きました。|Fui visitar um amigo internado.
お葬式|お葬式には黒い服を着ます。|No funeral se usa roupa preta.
お墓|お盆にお墓に行きます。|No Obon vamos ao túmulo da família.
法事|週末は祖父の法事があります。|No fim de semana tem a cerimônia em memória do meu avô.
仏壇|仏壇に花をあげます。|Coloco flores no altar budista.
お正月休み|お正月休みは一週間です。|A folga de Ano-Novo é de uma semana.
冬休み|冬休みにスキーに行きます。|Nas férias de inverno vou esquiar.
春休み|春休みに京都へ旅行します。|Nas férias de primavera vou viajar para Kyoto.
性格|ジャスは明るい性格です。|O Jas tem uma personalidade alegre.
親切|駅員さんが親切に教えてくれました。|O funcionário da estação me explicou com gentileza.
真面目|弟は真面目に勉強しています。|Meu irmão estuda com dedicação.
明るい|この部屋は明るいですね。|Este quarto é bem claro, né.
暗い|夜の道は暗いから、気をつけてね。|A rua à noite é escura, tome cuidado.
厳しい|日本語の先生は少し厳しいです。|A professora de japonês é um pouco rigorosa.
頭がいい|妹は頭がいいです。|Minha irmã é inteligente.
賢い|この犬はとても賢いです。|Este cachorro é muito esperto.
素直|子供は素直です。|As crianças são sinceras.
正直|正直に言ってください。|Diga com sinceridade, por favor.
わがまま|わがままを言って、ごめんね。|Desculpa por ser mimada.
大人しい|この猫は大人しいです。|Este gato é calmo.
恥ずかしがり屋|私は恥ずかしがり屋です。|Eu sou tímida.
怠け者|休みの日は怠け者になります。|Nos dias de folga eu fico preguiçosa.
かっこいい|ジャスのスーツ姿はかっこいい。|O Jas fica bonito de terno.
美しい|富士山は本当に美しいです。|O Monte Fuji é realmente belo.
若い|先生は若くて元気です。|A professora é jovem e animada.
背が低い|私は背が低いです。|Eu sou baixa.
太る|日本の料理がおいしくて、太りました。|A comida japonesa é tão gostosa que engordei.
痩せる|夏までに少し痩せたいです。|Quero emagrecer um pouco até o verão.
似ている|私は母に似ています。|Eu me pareço com a minha mãe.
笑顔|あなたの笑顔が大好きです。|Eu adoro o seu sorriso.
髪|髪が長くなりました。|Meu cabelo ficou comprido.
髪の毛|お風呂に髪の毛が落ちています。|Tem fios de cabelo caídos no banheiro.
歯|毎日、歯を磨きます。|Escovo os dentes todos os dias.
舌|熱いお茶で舌をやけどしました。|Queimei a língua com o chá quente.
唇|冬は唇が乾きます。|No inverno os lábios ressecam.
首|首が痛いです。|Estou com dor no pescoço.
喉|喉が痛くて、声が出ません。|Estou com dor de garganta e sem voz.
肩|肩が重いです。|Meus ombros estão pesados.
胸|胸が痛いときは、すぐ病院に行ってください。|Quando sentir dor no peito, vá logo ao hospital.
背中|背中がかゆいです。|Minhas costas estão coçando.
腰|重い荷物を持って、腰が痛くなりました。|Carreguei uma bagagem pesada e fiquei com dor lombar.
指|包丁で指を切りました。|Cortei o dedo com a faca.
爪|爪が長いです。|Minhas unhas estão compridas.
腕|腕を上げてください。|Levante o braço, por favor.
肘|机に肘をぶつけました。|Bati o cotovelo na mesa.
膝|階段で膝が痛くなります。|Meu joelho dói na escada.
お尻|ずっと座っていて、お尻が痛いです。|Fiquei sentada muito tempo e meu bumbum está doendo.
肌|冬は肌が乾燥します。|No inverno a pele resseca.
骨|魚の骨に気をつけてね。|Cuidado com as espinhas do peixe.
血|指から血が出ています。|Está saindo sangue do dedo.
心臓|走ったあと、心臓がどきどきします。|Depois de correr, meu coração dispara.
胃|食べすぎて、胃が痛いです。|Comi demais e estou com dor no estômago.
声|ジャスの声が聞きたい。|Quero ouvir a voz do Jas.
汗|夏は汗をたくさんかきます。|No verão a gente sua muito.
涙|うれしくて涙が出ました。|Fiquei tão feliz que chorei.
眉毛|眉毛を細くしました。|Afinei as sobrancelhas.
まつげ|まつげが長いですね。|Seus cílios são compridos, né.
ひげ|ジャスは毎朝ひげを剃ります。|O Jas faz a barba todas as manhãs.
身長|身長は何センチですか。|Quantos centímetros você tem de altura?
体重|毎朝、体重を量ります。|Me peso todas as manhãs.
病気|病気のときは、ゆっくり休んでください。|Quando estiver doente, descanse bem.
医者|医者に「三日休んでください」と言われました。|O médico me disse para descansar três dias.
看護師|看護師さんが熱を測ってくれました。|A enfermeira mediu minha febre.
歯医者|明日、歯医者に行きます。|Amanhã vou ao dentista.
薬|この薬は一日三回飲みます。|Este remédio é para tomar três vezes ao dia.
薬局|薬局で風邪の薬を買いました。|Comprei remédio para resfriado na farmácia.
熱|熱が三十八度あります。|Estou com 38 graus de febre.
咳|咳が止まりません。|A tosse não para.
鼻水|鼻水が出ます。|Estou com coriza.
頭痛|朝から頭痛がします。|Estou com dor de cabeça desde de manhã.
腹痛|腹痛で仕事を休みました。|Faltei ao trabalho por dor de barriga.
けが|足にけがをしました。|Machuquei o pé.
やけど|料理中に手をやけどしました。|Queimei a mão enquanto cozinhava.
花粉症|春は花粉症で目がかゆいです。|Na primavera meus olhos coçam por causa da alergia a pólen.
かゆい|蚊に刺されて、足がかゆいです。|Fui picada por mosquito e minha perna está coçando.
だるい|熱があって、体がだるいです。|Estou com febre e sem energia.
気持ち悪い|船に乗って、気持ち悪くなりました。|Andei de barco e fiquei enjoada.
吐き気|朝から吐き気があります。|Estou com náusea desde de manhã.
めまい|立つと、めまいがします。|Quando me levanto, fico tonta.
下痢|昨日から下痢をしています。|Estou com diarreia desde ontem.
便秘|便秘の薬はありますか。|Tem remédio para prisão de ventre?
寒気|寒気がして、熱を測りました。|Senti calafrios e medi a febre.
症状|どんな症状がありますか。|Que sintomas você tem?
診察|診察は十時からです。|A consulta começa às dez.
受付|まず受付で名前を書いてください。|Primeiro escreva seu nome na recepção.
保険証|保険証を見せてください。|Mostre o cartão do seguro saúde, por favor.
健康保険|日本では健康保険に入ります。|No Japão a gente entra no seguro saúde.
問診票|問診票に症状を書きます。|Escrevo os sintomas na ficha.
予約|病院の予約をしました。|Agendei a consulta no hospital.
検査|血の検査をします。|Vou fazer exame de sangue.
注射|注射は少し痛いです。|A injeção dói um pouco.
手術|父は来週、手術をします。|Meu pai vai fazer uma cirurgia semana que vem.
入院|祖母は一週間入院しました。|Minha avó ficou internada uma semana.
退院|明日、退院できます。|Amanhã posso ter alta.
救急車|すぐに救急車を呼んでください。|Chame uma ambulância agora, por favor.
処方箋|処方箋を持って薬局に行きます。|Vou à farmácia com a receita.
飲み薬|飲み薬を三日分もらいました。|Recebi remédio para três dias.
目薬|目が疲れたので、目薬をさしました。|Meus olhos estavam cansados, então pinguei colírio.
湿布|肩に湿布を貼りました。|Coloquei um emplastro no ombro.
絆創膏|指に絆創膏を貼りました。|Coloquei um band-aid no dedo.
体温計|体温計で熱を測りました。|Medi a febre com o termômetro.
妊娠|姉が妊娠しました。|Minha irmã está grávida.
健康|健康のために毎日歩きます。|Ando todos os dias pela saúde.
健康診断|会社で健康診断があります。|Tem check-up na empresa.
治る|風邪はもう治りました。|O resfriado já sarou.
休む|今日は熱があるので、仕事を休みます。|Hoje estou com febre, então vou faltar ao trabalho.
倒れる|暑さで人が倒れました。|Uma pessoa desmaiou por causa do calor.
吐く|飲みすぎて、吐きました。|Bebi demais e vomitei.
具合|具合はどうですか。|Como você está se sentindo?
調子|最近、体の調子がいいです。|Ultimamente estou me sentindo bem.
内科|熱があるので、内科に行きます。|Estou com febre, então vou à clínica geral.
外科|けがをしたら外科に行きます。|Quando se machuca, vai-se ao cirurgião.
皮膚科|肌がかゆくて、皮膚科に行きました。|Minha pele coçava, então fui ao dermatologista.
眼科|目が赤いので、眼科に行きます。|Meu olho está vermelho, então vou ao oftalmologista.
耳鼻科|花粉症で耳鼻科に行きました。|Fui ao otorrino por causa da alergia a pólen.
産婦人科|姉は産婦人科で検査をしました。|Minha irmã fez exames no ginecologista.
小児科|子供が熱を出して、小児科に行きました。|A criança teve febre e fomos ao pediatra.
体調|体調はどうですか。|Como está sua saúde?
体調が悪い|今日は体調が悪いので、早く寝ます。|Hoje não estou bem, então vou dormir cedo.
診てもらう|お医者さんに診てもらいました。|Fui examinada pelo médico.
治療|歯の治療に三回通います。|Vou três vezes ao dentista para o tratamento.
虫歯|甘いものを食べすぎて、虫歯になりました。|Comi doce demais e tive cárie.
肩こり|パソコンの仕事で肩こりがひどいです。|Com o trabalho no computador, meus ombros ficam muito tensos.
腰痛|腰痛で歩くのがつらいです。|Com a dor lombar, é difícil andar.
寝不足|昨日は寝不足で、眠いです。|Dormi pouco ontem e estou com sono.
食欲|風邪で食欲がありません。|Por causa do resfriado, estou sem apetite.
二日酔い|昨日飲みすぎて、二日酔いです。|Bebi demais ontem e estou de ressaca.
生理|生理で、お腹が痛いです。|Estou menstruada e com dor de barriga.
骨折|足を骨折しました。|Quebrei a perna.
ねんざ|階段で足をねんざしました。|Torci o pé na escada.
傷|手に小さい傷があります。|Tenho uma pequena ferida na mão.
血が出る|転んで、膝から血が出ました。|Caí e meu joelho sangrou.
腫れる|蜂に刺されて、手が腫れました。|Fui picada por uma abelha e minha mão inchou.
呼吸|深く呼吸をしてください。|Respire fundo, por favor.
息|走って、息が苦しいです。|Corri e estou sem fôlego.
息をする|大きく息をして、落ち着いて。|Respire fundo e se acalme.
咳をする|咳をするときは、口を手で押さえましょう。|Ao tossir, cubra a boca com a mão.
くしゃみ|花粉症で、くしゃみが止まりません。|Por causa da alergia, não paro de espirrar.
あくび|眠くて、あくびが出ます。|Estou com sono e bocejando.
寝返り|赤ちゃんが寝返りをしました。|O bebê se virou sozinho.
手を振る|駅でジャスに手を振りました。|Acenei para o Jas na estação.
振る|犬がしっぽを振っています。|O cachorro está balançando o rabo.
しゃがむ|しゃがんで、猫をなでました。|Me agachei e fiz carinho no gato.
横になる|少し横になって休みます。|Vou deitar um pouco para descansar.
伸ばす|朝、体を伸ばします。|De manhã eu me alongo.
伸びる|髪が伸びました。|Meu cabelo cresceu.
曲げる|膝を曲げてください。|Dobre o joelho, por favor.
噛む|よく噛んで食べましょう。|Vamos mastigar bem ao comer.
飲み込む|薬を水で飲み込みます。|Engulo o remédio com água.
なめる|猫が私の手をなめました。|O gato lambeu minha mão.
吸う|ここでタバコを吸わないでください。|Não fume aqui, por favor.
かく|蚊に刺されたところをかかないでね。|Não coce onde o mosquito picou.
たたく|ドアをたたく音がしました。|Ouvi alguém batendo na porta.
キス|おやすみのキスをしました。|Dei um beijo de boa noite.
ハグ|空港で家族とハグしました。|Abracei minha família no aeroporto.
目をつぶる|目をつぶって、ゆっくり休んで。|Feche os olhos e descanse.
瞬き|写真を撮るとき、瞬きしてしまいました。|Pisquei na hora da foto.
化粧品|日本の化粧品はかわいいです。|Os cosméticos japoneses são fofos.
化粧水|お風呂のあとに化粧水をつけます。|Depois do banho passo tônico facial.
口紅|赤い口紅をつけました。|Passei batom vermelho.
香水|この香水はいいにおいですね。|Este perfume tem um cheiro bom, né.
ネイル|結婚式の前にネイルをしました。|Fiz as unhas antes do casamento.
爪切り|爪切りはどこにありますか。|Onde está o cortador de unha?
くし|くしで髪をとかします。|Penteio o cabelo com o pente.
髪型|新しい髪型、似合ってるね。|O corte novo ficou bem em você.
前髪|前髪を短く切りました。|Cortei a franja curta.
パーマ|美容院でパーマをかけました。|Fiz permanente no salão.
カラー|髪のカラーを明るくしました。|Clareei a cor do cabelo.
髪を染める|髪を茶色に染めました。|Pintei o cabelo de castanho.
乾かす|ドライヤーで髪を乾かします。|Seco o cabelo com o secador.
朝ご飯|朝ご飯はいつもパンとコーヒーです。|No café da manhã sempre como pão e tomo café.
昼ご飯|昼ご飯を一緒に食べませんか。|Vamos almoçar juntos?
晩ご飯|今日の晩ご飯はカレーです。|O jantar de hoje é curry.
夕飯|夕飯の準備を手伝います。|Ajudo a preparar o jantar.
食事|仕事のあとで食事に行きましょう。|Vamos comer algo depois do trabalho.
お弁当|毎朝、ジャスのお弁当を作ります。|Toda manhã faço a marmita do Jas.
米|スーパーで米を五キロ買いました。|Comprei cinco quilos de arroz no supermercado.
麺|この店の麺はとても細いです。|O macarrão deste restaurante é bem fino.
うどん|寒い日は温かいうどんが食べたいです。|Em dia frio dá vontade de comer udon quente.
そば|大晦日にそばを食べます。|Na véspera de Ano-Novo comemos soba.
刺身|刺身は醤油をつけて食べます。|Sashimi se come com shoyu.
おにぎり|コンビニでおにぎりを二つ買いました。|Comprei dois onigiris na loja de conveniência.
味噌汁|毎朝、味噌汁を作ります。|Toda manhã faço sopa de missô.
味噌|味噌は体にいいです。|Missô faz bem para o corpo.
納豆|納豆はまだ少し苦手です。|Ainda não gosto muito de natto.
豆腐|豆腐を味噌汁に入れます。|Coloco tofu na sopa de missô.
天ぷら|エビの天ぷらが好きです。|Gosto de tempurá de camarão.
焼き肉|週末に焼き肉を食べに行きました。|No fim de semana fomos comer churrasco japonês.
焼き鳥|居酒屋で焼き鳥を注文しました。|Pedi espetinho de frango no izakaya.
鍋|冬は家族で鍋を食べます。|No inverno comemos nabe em família.
丼|この丼は大きくて安いです。|Esta tigela é grande e barata.
定食|昼は魚の定食にしました。|No almoço escolhi o prato feito de peixe.
牛肉|牛肉は少し高いです。|Carne bovina é um pouco cara.
豚肉|豚肉と野菜を炒めました。|Refoguei carne de porco com legumes.
鶏肉|鶏肉でカレーを作ります。|Faço curry com frango.
ひき肉|ひき肉でハンバーグを作りました。|Fiz hambúrguer com carne moída.
ハム|サンドイッチにハムを入れます。|Coloco presunto no sanduíche.
ソーセージ|朝ご飯にソーセージを焼きました。|Fritei salsicha no café da manhã.
鮭|お弁当に焼いた鮭を入れました。|Coloquei salmão grelhado na marmita.
マグロ|マグロのお寿司が一番好きです。|Sushi de atum é o meu favorito.
エビ|エビフライを作りました。|Fiz camarão empanado.
イカ|イカは少しかたいです。|A lula é um pouco dura.
タコ|タコが入っているから、たこ焼きです。|Chama takoyaki porque tem polvo dentro.
貝|海で貝を拾いました。|Peguei conchas na praia.
キャベツ|とんかつにはキャベツがつきます。|O tonkatsu vem com repolho.
レタス|サラダにレタスとトマトを入れます。|Coloco alface e tomate na salada.
きゅうり|夏はきゅうりが安いです。|No verão o pepino é barato.
玉ねぎ|玉ねぎを切ると、涙が出ます。|Quando corto cebola, saem lágrimas.
ねぎ|うどんにねぎをのせます。|Coloco cebolinha no udon.
にんじん|カレーににんじんを入れます。|Coloco cenoura no curry.
じゃがいも|じゃがいもをゆでました。|Cozinhei batatas.
さつまいも|焼いたさつまいもは甘いです。|Batata-doce assada é doce.
大根|大根を煮ました。|Cozinhei nabo japonês.
白菜|鍋に白菜をたくさん入れます。|Coloco bastante acelga chinesa no nabe.
ほうれん草|ほうれん草は体にいいです。|Espinafre faz bem para a saúde.
なす|なすを焼いて、醤油をかけました。|Assei a berinjela e coloquei shoyu.
ピーマン|子供はピーマンが嫌いです。|As crianças não gostam de pimentão.
かぼちゃ|かぼちゃのスープを作りました。|Fiz sopa de abóbora.
きのこ|秋はきのこがおいしいです。|No outono os cogumelos são gostosos.
にんにく|にんにくを少し入れると、おいしくなります。|Com um pouco de alho fica gostoso.
しょうが|風邪のときは、しょうがのお茶を飲みます。|Quando estou resfriada, tomo chá de gengibre.
豆|ブラジルでは毎日豆を食べます。|No Brasil comemos feijão todos os dias.
みかん|冬はこたつでみかんを食べます。|No inverno comemos tangerina no kotatsu.
いちご|いちごのケーキを買いました。|Comprei um bolo de morango.
ぶどう|このぶどうはとても甘いです。|Esta uva é muito doce.
桃|夏は桃がおいしいです。|No verão o pêssego é gostoso.
梨|日本の梨は大きくて、みずみずしいです。|A pera japonesa é grande e suculenta.
すいか|夏休みにすいかを食べました。|Comi melancia nas férias de verão.
パイナップル|パイナップルを切ってください。|Corte o abacaxi, por favor.
柿|秋になると、柿が安くなります。|No outono o caqui fica barato.
お菓子|子供にお菓子をあげました。|Dei doces para as crianças.
アイス|暑いから、アイスを食べよう。|Está quente, vamos tomar sorvete.
クッキー|手作りのクッキーをもらいました。|Ganhei biscoitos caseiros.
あめ|のどが痛いので、あめをなめます。|Estou com dor de garganta, então chupo uma bala.
ガム|電車の中でガムをかみます。|Masco chiclete no trem.
和菓子|お茶と一緒に和菓子を食べます。|Como doce japonês com chá.
もち|お正月にもちを食べます。|No Ano-Novo comemos mochi.
デザート|デザートにケーキはいかがですか。|Que tal bolo de sobremesa?
お湯|お湯をわかして、お茶を入れます。|Fervo água e preparo o chá.
緑茶|日本ではよく緑茶を飲みます。|No Japão se toma muito chá verde.
麦茶|夏は冷たい麦茶がおいしいです。|No verão o chá de cevada gelado é gostoso.
お酒|私はお酒をあまり飲みません。|Eu quase não bebo álcool.
氷|ジュースに氷を入れてください。|Coloque gelo no suco, por favor.
砂糖|コーヒーに砂糖を入れますか。|Você coloca açúcar no café?
塩|塩を少し入れてください。|Coloque um pouco de sal, por favor.
こしょう|塩とこしょうで味をつけます。|Tempero com sal e pimenta.
醤油|醤油を取ってください。|Me passa o shoyu, por favor.
酢|酢を入れると、さっぱりします。|Com vinagre fica mais leve.
油|フライパンに油をひきます。|Coloco óleo na frigideira.
バター|パンにバターをぬります。|Passo manteiga no pão.
チーズ|ピザにチーズをたくさんのせます。|Coloco bastante queijo na pizza.
ソース|お好み焼きにソースをかけます。|Coloco molho no okonomiyaki.
調味料|日本の調味料を集めています。|Estou juntando temperos japoneses.
味|この料理は優しい味がします。|Esta comida tem um sabor suave.
まずい|このコーヒーはちょっとまずいです。|Este café está um pouco ruim.
甘い|このケーキは甘すぎます。|Este bolo é doce demais.
辛い|このカレーは少し辛いです。|Este curry é um pouco apimentado.
しょっぱい|このスープはしょっぱいです。|Esta sopa está salgada.
苦い|この薬は苦いです。|Este remédio é amargo.
酸っぱい|レモンは酸っぱいです。|O limão é azedo.
熱い|熱いので、気をつけて飲んでね。|Está quente, beba com cuidado.
冷たい|冷たい水をください。|Água gelada, por favor.
柔らかい|このお肉は柔らかいです。|Esta carne é macia.
硬い|このパンは硬いです。|Este pão está duro.
新鮮|この魚は新鮮です。|Este peixe é fresco.
作る|日曜日に一緒に料理を作りましょう。|Vamos cozinhar juntos no domingo.
焼く|魚をグリルで焼きます。|Asso o peixe na grelha.
煮る|野菜を三十分煮ます。|Cozinho os legumes por trinta minutos.
炒める|玉ねぎを炒めます。|Refogo a cebola.
揚げる|鶏肉を揚げて、唐揚げを作ります。|Frito o frango e faço karaage.
ゆでる|卵を十分ゆでます。|Cozinho o ovo por dez minutos.
蒸す|野菜を蒸すと、甘くなります。|Legume cozido no vapor fica doce.
切る|にんじんを小さく切ってください。|Corte a cenoura em pedaços pequenos.
混ぜる|卵と砂糖をよく混ぜます。|Misturo bem o ovo e o açúcar.
温める|お弁当を電子レンジで温めます。|Esquento a marmita no micro-ondas.
冷やす|ビールを冷蔵庫で冷やします。|Gelo a cerveja na geladeira.
味見|ちょっと味見してくれる？|Pode provar um pouquinho?
材料|カレーの材料を買いに行きます。|Vou comprar os ingredientes do curry.
お腹がすく|お腹がすいたね。何か食べよう。|Estou com fome. Vamos comer algo.
のどが渇く|のどが渇いたので、水を飲みます。|Estou com sede, então vou beber água.
お腹いっぱい|もうお腹いっぱいです。|Já estou satisfeita.
おかわり|ご飯のおかわりをください。|Mais arroz, por favor.
大盛り|ラーメンを大盛りにしてください。|Uma porção grande de lámen, por favor.
お好み焼き|大阪でお好み焼きを食べたいです。|Quero comer okonomiyaki em Osaka.
たこ焼き|お祭りでたこ焼きを買いました。|Comprei takoyaki no festival.
すき焼き|特別な日にすき焼きを作ります。|Em dia especial faço sukiyaki.
しゃぶしゃぶ|しゃぶしゃぶはお肉を少しだけ煮ます。|No shabu-shabu a carne é cozida só um pouquinho.
とんかつ|試験の前にとんかつを食べます。|Antes da prova comemos tonkatsu.
唐揚げ|唐揚げはジャスの好きな料理です。|Karaage é o prato favorito do Jas.
餃子|みんなで餃子を作りました。|Fizemos guioza todos juntos.
焼きそば|お祭りで焼きそばを食べました。|Comi yakisoba no festival.
牛丼|牛丼は早くて安いです。|O gyudon é rápido e barato.
親子丼|親子丼は鶏肉と卵の料理です。|Oyakodon é um prato de frango e ovo.
カツ丼|カツ丼を注文しました。|Pedi katsudon.
オムライス|オムライスにケチャップで絵を描きました。|Desenhei no omurice com ketchup.
ハンバーグ|ハンバーグは子供に人気があります。|O hambúrguer é popular entre as crianças.
ポテト|ハンバーガーとポテトを注文しました。|Pedi hambúrguer e batata frita.
漬物|ご飯と漬物はよく合います。|Arroz combina bem com conserva.
梅干し|梅干しはとても酸っぱいです。|Umeboshi é muito azedo.
のり巻き|節分にのり巻きを食べます。|No Setsubun comemos sushi enrolado.
海苔|おにぎりに海苔をまきます。|Enrolo o onigiri com alga.
わかめ|味噌汁にわかめを入れます。|Coloco wakame na sopa de missô.
わさび|わさびが多すぎて、鼻が痛い！|Muito wasabi, meu nariz está doendo!
ごま|サラダにごまをかけます。|Coloco gergelim na salada.
小麦粉|小麦粉でパンを作ります。|Faço pão com farinha de trigo.
パン粉|とんかつにパン粉をつけます。|Passo o porco na farinha de rosca.
片栗粉|片栗粉でスープを少し固くします。|Engrosso a sopa com amido.
だし|日本料理はだしが大切です。|Na culinária japonesa o caldo é importante.
みりん|醤油とみりんで味をつけます。|Tempero com shoyu e mirin.
ドレッシング|ごまのドレッシングが好きです。|Gosto de molho de gergelim.
ジャム|パンにいちごのジャムをぬります。|Passo geleia de morango no pão.
はちみつ|紅茶にはちみつを入れます。|Coloco mel no chá.
おやつ|三時におやつを食べます。|Às três horas como um lanchinho.
ポテトチップス|ポテトチップスを食べすぎました。|Comi batata chips demais.
せんべい|おばあちゃんはせんべいが好きです。|A vovó gosta de biscoito de arroz.
とうもろこし|夏祭りで焼いたとうもろこしを食べました。|Comi milho assado no festival de verão.
もやし|もやしは安くて便利です。|Broto de feijão é barato e prático.
セロリ|セロリは少し苦手です。|Não gosto muito de salsão.
香辛料|カレーには香辛料がたくさん入っています。|O curry leva muitas especiarias.
唐辛子|唐辛子を入れると、辛くなります。|Com pimenta fica apimentado.
冷凍食品|忙しい日は冷凍食品を使います。|Em dia corrido uso comida congelada.
インスタントラーメン|夜中にインスタントラーメンを食べました。|Comi miojo de madrugada.
カップ麺|カップ麺はお湯を入れて三分です。|O lámen de copo fica pronto em três minutos com água quente.
お惣菜|スーパーのお惣菜を買って帰ります。|Compro comida pronta no supermercado e volto para casa.
生|日本では卵を生で食べます。|No Japão se come ovo cru.
焼き魚|朝ご飯は焼き魚とご飯です。|O café da manhã é peixe grelhado e arroz.
煮物|母の煮物はおいしいです。|O cozido da minha mãe é gostoso.
炒め物|今日は簡単な炒め物にします。|Hoje vou fazer um refogado simples.
揚げ物|揚げ物は食べすぎないようにしています。|Tento não comer fritura demais.
炊く|炊飯器でご飯を炊きます。|Cozinho o arroz na panela elétrica.
キッチン|新しい家のキッチンは広いです。|A cozinha da casa nova é espaçosa.
冷凍庫|アイスは冷凍庫に入れてね。|Coloque o sorvete no freezer.
電子レンジ|電子レンジで牛乳を温めます。|Esquento o leite no micro-ondas.
炊飯器|炊飯器のスイッチを押してください。|Aperte o botão da panela de arroz, por favor.
コンロ|コンロの火を消してください。|Apague o fogo do fogão, por favor.
オーブン|オーブンでケーキを焼きます。|Asso o bolo no forno.
やかん|やかんでお湯をわかします。|Fervo água na chaleira.
フライパン|フライパンで卵を焼きます。|Frito o ovo na frigideira.
包丁|包丁で野菜を切ります。|Corto os legumes com a faca.
まな板|まな板を洗ってください。|Lave a tábua de corte, por favor.
皿|この皿は割れやすいです。|Este prato quebra fácil.
お皿|お皿を並べてくれる？|Pode arrumar os pratos?
茶碗|茶碗にご飯をよそいます。|Sirvo arroz na tigela.
お椀|お椀に味噌汁を入れます。|Coloco a sopa de missô na tigela.
コップ|コップに水を入れてください。|Coloque água no copo, por favor.
グラス|ワインをグラスに注ぎます。|Sirvo o vinho na taça.
カップ|コーヒーのカップを二つ出します。|Pego duas xícaras de café.
箸|日本では箸でご飯を食べます。|No Japão se come com hashi.
お箸|お箸を使うのが上手になりました。|Fiquei boa em usar hashi.
スプーン|カレーはスプーンで食べます。|Curry se come com colher.
フォーク|フォークとナイフをください。|Garfo e faca, por favor.
ナイフ|ナイフでケーキを切ります。|Corto o bolo com a faca.
ストロー|ストローはいりません。|Não preciso de canudo.
蓋|鍋の蓋を閉めてください。|Feche a tampa da panela, por favor.
瓶|瓶はほかのゴミと分けて出します。|As garrafas de vidro vão separadas do outro lixo.
缶|缶のジュースを買いました。|Comprei um suco em lata.
ペットボトル|ペットボトルのお茶を買いました。|Comprei chá em garrafa PET.
ラップ|残ったご飯にラップをかけます。|Cubro o arroz que sobrou com filme plástico.
アルミホイル|アルミホイルで魚を包んで焼きます。|Embrulho o peixe em papel alumínio e asso.
食堂|会社の食堂は安いです。|O refeitório da empresa é barato.
居酒屋|仕事のあと、居酒屋に行きました。|Depois do trabalho fomos ao izakaya.
喫茶店|駅前の喫茶店で待っています。|Estou esperando no café em frente à estação.
注文|注文はお決まりですか。|Já escolheram o pedido?
席|窓の近くの席がいいです。|Prefiro um lugar perto da janela.
お会計|すみません、お会計をお願いします。|Com licença, a conta, por favor.
おしぼり|お店でおしぼりをもらいました。|Recebi uma toalhinha úmida no restaurante.
持ち帰り|持ち帰りでお願いします。|Para viagem, por favor.
店内|店内で食べます。|Vou comer aqui.
食べ放題|食べ放題のお店に行きました。|Fomos a um restaurante de rodízio.
飲み放題|飲み放題は二時間です。|A bebida à vontade é por duas horas.
おすすめ|おすすめは何ですか。|O que você recomenda?
禁煙|この店は全席禁煙です。|Neste restaurante é proibido fumar em todos os lugares.
喫煙|喫煙は外でお願いします。|Fumar, só do lado de fora, por favor.
うち|今日はうちでゆっくりします。|Hoje vou descansar em casa.
マンション|駅の近くのマンションに住んでいます。|Moro num prédio perto da estação.
一軒家|将来は一軒家に住みたいです。|No futuro quero morar numa casa.
寮|会社の寮に住んでいます。|Moro no alojamento da empresa.
玄関|玄関で靴を脱いでください。|Tire os sapatos na entrada, por favor.
戸|戸を閉めてください。|Feche a porta, por favor.
壁|壁に写真を飾りました。|Pendurei fotos na parede.
床|床が冷たいです。|O chão está frio.
天井|この部屋は天井が高いです。|Este quarto tem o teto alto.
屋根|屋根に雪が積もっています。|Tem neve acumulada no telhado.
階段|階段で三階まで上がります。|Subo de escada até o terceiro andar.
廊下|廊下を走らないでください。|Não corra no corredor, por favor.
居間|家族は居間でテレビを見ています。|A família está vendo TV na sala.
リビング|リビングにソファーを置きたいです。|Quero colocar um sofá na sala.
寝室|寝室は二階にあります。|O quarto fica no segundo andar.
和室|和室で布団を敷いて寝ます。|Durmo no quarto japonês estendendo o futon.
畳|畳の上に座ります。|Sento em cima do tatame.
押し入れ|布団を押し入れにしまいます。|Guardo o futon no armário embutido.
風呂場|風呂場を掃除しました。|Limpei o banheiro.
洗面所|洗面所で手を洗います。|Lavo as mãos no lavabo.
ベランダ|ベランダで洗濯物を干します。|Estendo a roupa na varanda.
庭|庭に花を植えました。|Plantei flores no jardim.
駐車場|駐車場はどこですか。|Onde fica o estacionamento?
鍵|鍵をかけるのを忘れました。|Esqueci de trancar a porta.
家賃|家賃は毎月二十五日に払います。|Pago o aluguel todo dia 25.
大家さん|大家さんはとても親切です。|O proprietário é muito gentil.
不動産屋|不動産屋で部屋を探しました。|Procurei apartamento na imobiliária.
住む|私たちは東京に住む予定です。|Planejamos morar em Tóquio.
間取り|この部屋の間取りはいいですね。|A planta deste apartamento é boa, né.
家具|新しい家具を買いました。|Comprei móveis novos.
テーブル|テーブルの上にお皿を置きます。|Coloco os pratos na mesa.
布団|天気がいいので、布団を干します。|O tempo está bom, então vou estender o futon.
枕|この枕はとても柔らかいです。|Este travesseiro é bem macio.
毛布|寒いので、毛布をもう一枚ください。|Está frio, me dê mais um cobertor, por favor.
シーツ|シーツを洗いました。|Lavei o lençol.
棚|棚の上に置いてください。|Coloque em cima da prateleira, por favor.
本棚|本棚に日本語の本が並んでいます。|Livros de japonês estão enfileirados na estante.
タンス|服をタンスにしまいます。|Guardo as roupas na cômoda.
クローゼット|コートはクローゼットにかけます。|Penduro o casaco no closet.
引き出し|はさみは引き出しの中です。|A tesoura está dentro da gaveta.
鏡|鏡を見て、髪を直します。|Olho no espelho e arrumo o cabelo.
カーテン|朝、カーテンを開けます。|De manhã abro a cortina.
カーペット|リビングにカーペットを敷きました。|Coloquei um tapete na sala.
電球|トイレの電球が切れました。|A lâmpada do banheiro queimou.
コンセント|コンセントはどこですか。|Onde fica a tomada?
電池|リモコンの電池がなくなりました。|A pilha do controle acabou.
エアコン|暑いので、エアコンをつけます。|Está quente, então vou ligar o ar-condicionado.
暖房|寒いから、暖房をつけよう。|Está frio, vamos ligar o aquecedor.
冷房|冷房が強すぎて寒いです。|O ar frio está forte demais e estou com frio.
ストーブ|ストーブの近くは暖かいです。|Perto do aquecedor está quentinho.
こたつ|冬はこたつから出たくないです。|No inverno não dá vontade de sair do kotatsu.
扇風機|夏は扇風機を使います。|No verão uso ventilador.
洗濯機|洗濯機が止まりました。|A máquina de lavar parou.
掃除機|週末に掃除機をかけます。|No fim de semana passo o aspirador.
リモコン|テレビのリモコンはどこ？|Cadê o controle da TV?
時計|あの時計は五分進んでいます。|Aquele relógio está cinco minutos adiantado.
目覚まし時計|目覚まし時計を六時にセットしました。|Coloquei o despertador para as seis.
ドライヤー|ドライヤーはどこにありますか。|Onde está o secador de cabelo?
アイロン|シャツにアイロンをかけます。|Passo a camisa com o ferro.
ゴミ箱|ゴミはゴミ箱に捨ててください。|Jogue o lixo na lixeira, por favor.
家事|家事は二人で分けてやります。|Dividimos as tarefas de casa entre nós dois.
洗濯物|雨が降ってきたから、洗濯物を入れて！|Começou a chover, recolha a roupa!
干す|天気がいいので、洗濯物を外に干します。|O tempo está bom, então estendo a roupa lá fora.
たたむ|乾いた服をたたみます。|Dobro as roupas secas.
片付ける|部屋を片付けてから出かけます。|Arrumo o quarto antes de sair.
洗う|ご飯の前に手を洗います。|Lavo as mãos antes de comer.
拭く|テーブルを拭いてください。|Limpe a mesa, por favor.
燃えるゴミ|燃えるゴミは月曜日と木曜日です。|O lixo queimável é segunda e quinta.
燃えないゴミ|燃えないゴミは月に二回です。|O lixo não queimável é duas vezes por mês.
資源ゴミ|ペットボトルは資源ゴミです。|Garrafa PET é lixo reciclável.
粗大ゴミ|古いソファーを粗大ゴミに出します。|Vou jogar o sofá velho como lixo grande.
ゴミを出す|朝、ゴミを出してから仕事に行きます。|De manhã coloco o lixo para fora e vou trabalhar.
分別|日本ではゴミの分別が大切です。|No Japão é importante separar o lixo.
捨てる|古い服を捨てました。|Joguei fora as roupas velhas.
目が覚める|朝五時に目が覚めました。|Acordei às cinco da manhã.
寝坊|寝坊して、電車に乗り遅れました。|Perdi a hora e perdi o trem.
昼寝|日曜日は昼寝をします。|No domingo tiro um cochilo.
着替える|家に帰ったら、すぐ着替えます。|Quando chego em casa, troco de roupa logo.
化粧|朝、化粧に二十分かかります。|De manhã levo vinte minutos para me maquiar.
タオル|お風呂のタオルを替えました。|Troquei a toalha do banheiro.
石けん|石けんで手を洗いましょう。|Vamos lavar as mãos com sabonete.
リンス|シャンプーのあとにリンスをします。|Depois do xampu uso condicionador.
歯ブラシ|新しい歯ブラシを買いました。|Comprei uma escova de dentes nova.
歯磨き粉|歯磨き粉がもうありません。|A pasta de dente acabou.
トイレットペーパー|トイレットペーパーを買っておいてね。|Compre papel higiênico, viu.
ティッシュ|ティッシュを取ってください。|Me passa o lenço de papel, por favor.
洗剤|洗剤を少しだけ使います。|Uso só um pouco de detergente.
ハンガー|コートをハンガーにかけます。|Penduro o casaco no cabide.
ほうき|ほうきで玄関を掃きます。|Varro a entrada com a vassoura.
雑巾|雑巾で床を拭きます。|Limpo o chão com o pano.
袋|袋を一つください。|Uma sacola, por favor.
ビニール袋|ゴミをビニール袋に入れます。|Coloco o lixo na sacola plástica.
紙|この紙に名前を書いてください。|Escreva seu nome neste papel, por favor.
箱|プレゼントを箱に入れました。|Coloquei o presente na caixa.
はさみ|はさみを貸してください。|Me empresta a tesoura, por favor.
テープ|箱をテープで止めます。|Fecho a caixa com fita adesiva.
のり|写真をのりで貼りました。|Colei a foto com cola.
消しゴム|消しゴムで字を消します。|Apago a letra com a borracha.
ノート|新しい単語をノートに書きます。|Escrevo as palavras novas no caderno.
手帳|予定を手帳に書きます。|Escrevo os compromissos na agenda.
封筒|手紙を封筒に入れます。|Coloco a carta no envelope.
切手|切手を貼るのを忘れました。|Esqueci de colar o selo.
はがき|旅行先からはがきを送りました。|Mandei um cartão-postal da viagem.
傘|雨が降りそうなので、傘を持っていきます。|Parece que vai chover, então vou levar o guarda-chuva.
かばん|かばんの中に財布があります。|A carteira está dentro da bolsa.
リュック|リュックを背負って山に登りました。|Subi a montanha com a mochila nas costas.
スーツケース|スーツケースが重すぎます。|A mala está pesada demais.
眼鏡|眼鏡をかけないと、よく見えません。|Sem óculos não enxergo bem.
窓ガラス|窓ガラスを拭きました。|Limpei o vidro da janela.
網戸|夏は網戸にして寝ます。|No verão durmo com a tela fechada e a janela aberta.
蛇口|蛇口をしっかり閉めてください。|Feche bem a torneira, por favor.
流し|お皿を流しに置いてください。|Coloque os pratos na pia, por favor.
排水口|排水口が詰まりました。|O ralo entupiu.
換気扇|料理のときは換気扇を回します。|Quando cozinho, ligo o exaustor.
給湯器|給湯器のボタンを押すと、お湯が出ます。|Apertando o botão do aquecedor, sai água quente.
湯船|日本人は毎日湯船に入ります。|Os japoneses entram na banheira todos os dias.
便器|便器をブラシで掃除します。|Limpo o vaso com a escova.
ウォシュレット|日本のトイレにはウォシュレットがあります。|Os banheiros no Japão têm vaso com ducha.
スイッチ|電気のスイッチはドアの横です。|O interruptor da luz fica ao lado da porta.
ブレーカー|ブレーカーが落ちて、電気が消えました。|O disjuntor caiu e a luz apagou.
インターホン|インターホンが鳴りました。|O interfone tocou.
郵便受け|郵便受けに手紙が入っていました。|Tinha uma carta na caixa de correio.
物干し|ベランダに物干しがあります。|Tem um varal na varanda.
洗濯ばさみ|洗濯ばさみで靴下を止めます。|Prendo as meias com prendedor.
植木鉢|植木鉢に花の種をまきました。|Plantei sementes de flor no vaso.
はしご|はしごに上って、電球を替えます。|Subo na escada e troco a lâmpada.
工具|工具を使って、棚を作りました。|Fiz uma prateleira usando ferramentas.
ドライバー|ドライバーでねじを回します。|Giro o parafuso com a chave de fenda.
くぎ|壁にくぎを打ちます。|Prego um prego na parede.
ひも|段ボールをひもで結びます。|Amarro o papelão com barbante.
ロープ|ロープで荷物を止めます。|Prendo a carga com corda.
バケツ|バケツに水を入れます。|Coloco água no balde.
スポンジ|スポンジでお皿を洗います。|Lavo os pratos com a esponja.
ブラシ|ブラシで靴をきれいにします。|Limpo os sapatos com a escova.
マット|玄関にマットを置きました。|Coloquei um capacho na entrada.
クッション|ソファーにクッションを置きます。|Coloco almofadas no sofá.
座布団|お客さんに座布団を出します。|Ofereço uma almofada para a visita sentar.
ふすま|ふすまを開けると、和室があります。|Abrindo a porta de correr, tem um quarto japonês.
障子|猫が障子を破りました。|O gato rasgou a porta de papel.
ろうそく|ケーキにろうそくを立てます。|Coloco velas no bolo.
花瓶|花瓶に花を飾ります。|Arrumo as flores no vaso.
写真立て|二人の写真を写真立てに入れました。|Coloquei a foto de nós dois no porta-retrato.
ぬいぐるみ|ジャスがくまのぬいぐるみをくれました。|O Jas me deu um ursinho de pelúcia.
おもちゃ|子供がおもちゃで遊んでいます。|A criança está brincando com o brinquedo.
人形|祖母から人形をもらいました。|Ganhei uma boneca da minha avó.
一人暮らし|兄は一人暮らしをしています。|Meu irmão mora sozinho.
二人暮らし|二人暮らしが始まります。|Vamos começar a morar a dois.
新居|新居にカーテンをつけました。|Coloquei cortinas na casa nova.
家事分担|家事分担を決めましょう。|Vamos decidir a divisão das tarefas.
献立|明日の献立を考えます。|Penso no cardápio de amanhã.
作り置き|週末に作り置きをします。|No fim de semana deixo comida pronta.
残り物|昨日の残り物を食べます。|Vou comer as sobras de ontem.
お皿洗い|お皿洗いは私がやるね。|Eu lavo a louça, tá.
食器|食器を棚にしまいます。|Guardo a louça no armário.
食器棚|食器棚にコップがあります。|Tem copos no armário de louça.
洗い物|洗い物がたくさんあります。|Tem muita louça para lavar.
ふきん|ふきんでお皿を拭きます。|Seco os pratos com o pano de prato.
エプロン|エプロンをつけて料理します。|Cozinho usando avental.
買い置き|トイレットペーパーの買い置きがあります。|Tem papel higiênico estocado em casa.
日用品|ドラッグストアで日用品を買います。|Compro itens do dia a dia na drogaria.
生ゴミ|生ゴミは袋に入れて出します。|O lixo orgânico vai num saco.
空き缶|空き缶を洗ってから捨てます。|Lavo as latas vazias antes de jogar fora.
古紙|古紙は水曜日に出します。|O papel velho sai na quarta-feira.
段ボール|段ボールをたたんで出します。|Dobro o papelão e coloco para fora.
収集日|ゴミの収集日を確認しました。|Conferi os dias de coleta do lixo.
自治体|ゴミのルールは自治体によって違います。|As regras do lixo mudam conforme o município.
地域|この地域は静かで安全です。|Esta região é tranquila e segura.
近所付き合い|近所付き合いを大切にしています。|Dou valor à convivência com os vizinhos.
回収|古い電池はお店で回収しています。|As lojas recolhem pilhas velhas.
節電|夏は節電しましょう。|Vamos economizar energia no verão.
節水|お皿を洗うとき、節水します。|Economizo água ao lavar a louça.
水道|水道の水は飲めます。|Dá para beber a água da torneira.
ガス|ガスの火を止めてください。|Desligue o fogo do gás, por favor.
電気屋|電気屋でドライヤーを買いました。|Comprei um secador na loja de eletrônicos.
家電量販店|家電量販店で冷蔵庫を見ました。|Vi geladeiras na loja grande de eletrônicos.
ホームセンター|ホームセンターで棚を買いました。|Comprei uma prateleira na loja de materiais.
ショッピングモール|週末はショッピングモールに行きます。|No fim de semana vamos ao shopping.
商店街|商店街のパン屋さんはおいしいです。|A padaria da rua comercial é gostosa.
市場|朝の市場で魚を買いました。|Comprei peixe no mercado da manhã.
屋台|お祭りに屋台がたくさん出ています。|Tem muitas barracas no festival.
服|この服はどこで買いましたか。|Onde você comprou esta roupa?
洋服|洋服をたくさん持っています。|Tenho muita roupa.
着物|成人式で着物を着ました。|Usei quimono na cerimônia da maioridade.
浴衣|花火大会に浴衣で行きます。|Vou de yukata ao festival de fogos.
シャツ|白いシャツを着ます。|Visto uma camisa branca.
セーター|寒いので、セーターを着ます。|Está frio, então vou vestir um suéter.
パーカー|パーカーを着て散歩します。|Passeio de moletom com capuz.
上着|上着を持っていったほうがいいよ。|É melhor levar um casaco.
コート|冬のコートを買いました。|Comprei um casaco de inverno.
スーツ|面接にスーツを着ていきます。|Vou de terno à entrevista.
ズボン|このズボンは少し長いです。|Esta calça está um pouco comprida.
スカート|長いスカートが好きです。|Gosto de saia longa.
ワンピース|デートにワンピースを着ていきます。|Vou de vestido ao encontro.
下着|旅行に下着を三枚持っていきます。|Levo três peças de roupa íntima para a viagem.
靴下|靴下に穴があいています。|A meia está furada.
靴|新しい靴で足が痛いです。|Estou com dor no pé por causa do sapato novo.
スニーカー|歩くときはスニーカーがいいです。|Para andar, tênis é melhor.
スリッパ|家の中ではスリッパをはきます。|Dentro de casa uso chinelo.
帽子|夏は帽子をかぶります。|No verão uso chapéu.
手袋|手が冷たいので、手袋をします。|Minhas mãos estão frias, então coloco luvas.
マフラー|ジャスにマフラーをあげました。|Dei um cachecol para o Jas.
ネクタイ|父の日にネクタイを贈ります。|No Dia dos Pais vou dar uma gravata.
ベルト|ベルトが少しきついです。|O cinto está um pouco apertado.
水着|海に行くので、水着を買いました。|Vou à praia, então comprei um maiô.
ポケット|鍵をポケットに入れました。|Coloquei a chave no bolso.
ネックレス|誕生日にネックレスをもらいました。|Ganhei um colar de aniversário.
ピアス|かわいいピアスですね。|Que brinco bonito.
腕時計|腕時計を見たら、もう七時でした。|Olhei o relógio e já eram sete horas.
着る|今日は何を着ようかな。|O que será que eu visto hoje?
はく|寒いから、長いズボンをはきます。|Está frio, então vou de calça comprida.
かぶる|帽子をかぶって出かけます。|Saio de chapéu.
脱ぐ|日本の家では靴を脱ぎます。|Nas casas japonesas se tiram os sapatos.
外す|写真を撮るとき、眼鏡を外します。|Tiro os óculos para a foto.
似合う|その色、よく似合うね。|Essa cor fica muito bem em você.
地味|この服はちょっと地味かな。|Esta roupa é meio sem graça?
派手|派手な色の服は着ません。|Não uso roupa de cor chamativa.
おしゃれ|東京の人はおしゃれです。|As pessoas de Tóquio são estilosas.
道具|料理の道具をそろえました。|Juntei os utensílios de cozinha.
機械|この機械の使い方を教えてください。|Me ensine a usar esta máquina, por favor.
電気製品|日本の電気製品は便利です。|Os aparelhos elétricos japoneses são práticos.
ライター|ライターで火をつけます。|Acendo o fogo com o isqueiro.
マッチ|ろうそくにマッチで火をつけます。|Acendo a vela com fósforo.
カバー|スマホのカバーを替えました。|Troquei a capa do celular.
ケース|眼鏡をケースに入れます。|Coloco os óculos no estojo.
シール|ノートにかわいいシールを貼りました。|Colei adesivos fofos no caderno.
ラベル|瓶にラベルを貼ります。|Colo uma etiqueta no pote.
リボン|プレゼントにリボンをつけました。|Coloquei uma fita no presente.
地球|地球を大切にしましょう。|Vamos cuidar da Terra.
旗|オリンピックでブラジルの旗を見ました。|Vi a bandeira do Brasil nas Olimpíadas.
看板|あの赤い看板の店です。|É a loja com aquela placa vermelha.
標識|この標識は「止まれ」という意味です。|Esta placa quer dizer “pare”.
町|この町は静かで住みやすいです。|Esta cidade é tranquila e boa de morar.
市|私たちは横浜市に住む予定です。|Planejamos morar na cidade de Yokohama.
村|祖母は小さい村に住んでいます。|Minha avó mora numa vila pequena.
都会|東京は大きな都会です。|Tóquio é uma cidade grande.
田舎|ジャスの実家は田舎にあります。|A casa dos pais do Jas fica no interior.
近所|近所にスーパーがあって便利です。|Tem um supermercado na vizinhança, é prático.
場所|待ち合わせの場所はどこですか。|Onde é o lugar do encontro?
所|ここは静かな所ですね。|Aqui é um lugar tranquilo, né.
建物|あの高い建物は何ですか。|O que é aquele prédio alto?
ビル|会社はあのビルの五階です。|A empresa fica no quinto andar daquele prédio.
お店|このお店はいつも混んでいます。|Esta loja está sempre cheia.
デパート|デパートでプレゼントを買いました。|Comprei o presente na loja de departamentos.
ドラッグストア|ドラッグストアで薬とシャンプーを買います。|Compro remédio e xampu na drogaria.
百円ショップ|百円ショップは何でもあります。|A loja de 100 ienes tem de tudo.
本屋|本屋で日本語の本を探しました。|Procurei livros de japonês na livraria.
花屋|花屋で花束を買いました。|Comprei um buquê na floricultura.
パン屋|朝、パン屋でパンを買います。|De manhã compro pão na padaria.
八百屋|八百屋の野菜は新鮮です。|Os legumes da quitanda são frescos.
床屋|ジャスは床屋で髪を切ります。|O Jas corta o cabelo na barbearia.
クリーニング屋|スーツをクリーニング屋に出しました。|Levei o terno à lavanderia.
コインランドリー|布団はコインランドリーで洗います。|Lavo o futon na lavanderia self-service.
区役所|区役所で住所の手続きをします。|Faço o registro de endereço na subprefeitura.
交番|道が分からないときは、交番で聞きます。|Quando não sei o caminho, pergunto no posto policial.
警察|財布を落としたので、警察に行きました。|Perdi a carteira, então fui à polícia.
警察官|警察官が道を教えてくれました。|O policial me ensinou o caminho.
消防署|家の近くに消防署があります。|Tem um corpo de bombeiros perto de casa.
幼稚園|妹の子供は幼稚園に通っています。|O filho da minha irmã vai ao jardim de infância.
保育園|保育園に子供を迎えに行きます。|Vou buscar a criança na creche.
神社|お正月に神社に行きます。|No Ano-Novo vamos ao santuário.
お寺|京都にはお寺がたくさんあります。|Kyoto tem muitos templos.
教会|日曜日に教会に行きます。|Vou à igreja no domingo.
映画館|映画館でアニメの映画を見ました。|Vimos um filme de anime no cinema.
美術館|雨の日は美術館に行きましょう。|Em dia de chuva vamos ao museu de arte.
博物館|博物館で日本の歴史を勉強しました。|Estudei a história do Japão no museu.
動物園|動物園でパンダを見ました。|Vi o panda no zoológico.
水族館|水族館のイルカがかわいかったです。|Os golfinhos do aquário eram fofos.
遊園地|週末に遊園地に行きたいです。|Quero ir ao parque de diversões no fim de semana.
旅館|旅館で浴衣を着ました。|Usei yukata na pousada japonesa.
温泉|冬の温泉は最高です。|Fonte termal no inverno é maravilhosa.
銭湯|近所の銭湯は四百円です。|O banho público do bairro custa 400 ienes.
プール|夏は市のプールで泳ぎます。|No verão nado na piscina municipal.
工場|父は車の工場で働いています。|Meu pai trabalha numa fábrica de carros.
事務所|事務所は駅の近くにあります。|O escritório fica perto da estação.
ガソリンスタンド|ガソリンスタンドでガソリンを入れます。|Coloco gasolina no posto.
入口|入口はあちらです。|A entrada é por ali.
出口|東口の出口で待っています。|Estou esperando na saída leste.
受付窓口|受付窓口で番号札を取ります。|Pego a senha no guichê.
お手洗い|すみません、お手洗いはどこですか。|Com licença, onde fica o banheiro?
非常口|非常口の場所を確認してください。|Confira onde fica a saída de emergência.
道|この道をまっすぐ行ってください。|Siga reto por esta rua, por favor.
道路|道路を渡るときは気をつけて。|Tome cuidado ao atravessar a rua.
通り|この通りにはカフェが多いです。|Esta avenida tem muitos cafés.
交差点|次の交差点を右に曲がってください。|Vire à direita no próximo cruzamento.
信号|信号が赤のときは止まります。|Quando o semáforo está vermelho, a gente para.
横断歩道|横断歩道を渡ります。|Atravesso na faixa de pedestre.
歩道|自転車は歩道を走らないでください。|Bicicletas não andem na calçada, por favor.
角|あの角にコンビニがあります。|Tem uma loja de conveniência naquela esquina.
橋|橋を渡ると、駅があります。|Atravessando a ponte, tem a estação.
地図|スマホの地図を見ながら歩きます。|Ando olhando o mapa no celular.
右|右に曲がると、銀行があります。|Virando à direita, tem um banco.
左|左に見えるのが東京タワーです。|O que se vê à esquerda é a Torre de Tóquio.
前|駅の前で待っています。|Estou esperando em frente à estação.
後ろ|後ろの席に座ってください。|Sente no banco de trás, por favor.
上|机の上に鍵があります。|A chave está em cima da mesa.
下|猫がベッドの下にいます。|O gato está embaixo da cama.
中|かばんの中に何がありますか。|O que tem dentro da bolsa?
外|外は寒いですよ。|Lá fora está frio.
横|銀行の横に郵便局があります。|O correio fica ao lado do banco.
隣|隣の部屋から音がします。|Vem barulho do quarto ao lado.
間|駅と公園の間に図書館があります。|A biblioteca fica entre a estação e o parque.
向こう|川の向こうに山が見えます。|Do outro lado do rio dá para ver a montanha.
真ん中|写真の真ん中にいるのがジャスです。|Quem está no meio da foto é o Jas.
奥|トイレは店の奥にあります。|O banheiro fica no fundo da loja.
手前|駅の手前で降ります。|Desço um pouco antes da estação.
東|東京は日本の東にあります。|Tóquio fica no leste do Japão.
西|夕日は西にしずみます。|O sol se põe no oeste.
南|沖縄は日本の南にあります。|Okinawa fica no sul do Japão.
北|北海道は冬がとても寒いです。|Em Hokkaido o inverno é muito frio.
そちら|そちらの天気はどうですか。|Como está o tempo aí?
あちら|お手洗いはあちらです。|O banheiro é por ali.
曲がる|二つ目の角を左に曲がります。|Viro à esquerda na segunda esquina.
渡る|信号を渡ると、駅です。|Atravessando o semáforo, é a estação.
通る|毎日この公園を通って会社に行きます。|Todo dia passo por este parque para ir à empresa.
迷う|駅で迷ってしまいました。|Me perdi na estação.
地下鉄|地下鉄で行くと、十分です。|De metrô são dez minutos.
駅員|分からないことは駅員さんに聞きます。|Pergunto ao funcionário da estação o que não sei.
ホーム|三番線のホームで待っています。|Estou esperando na plataforma 3.
線路|線路に入らないでください。|Não entre nos trilhos, por favor.
改札|改札の前で会いましょう。|Vamos nos encontrar em frente à catraca.
切符|切符を買うのは初めてです。|É a primeira vez que compro bilhete.
定期券|会社の定期券を買いました。|Comprei o passe mensal da empresa.
ICカード|ICカードで電車に乗ります。|Pego o trem com o cartão de transporte.
チャージ|ICカードに千円チャージしました。|Recarreguei mil ienes no cartão.
各駅停車|各駅停車は時間がかかります。|O trem parador demora.
快速|快速に乗ると、早く着きます。|Pegando o trem rápido, chega mais cedo.
急行|急行はこの駅に止まりません。|O expresso não para nesta estação.
終電|終電に乗り遅れました。|Perdi o último trem.
始発|始発の電車で空港に行きます。|Vou ao aeroporto no primeiro trem.
満員電車|朝の満員電車は大変です。|O trem lotado de manhã é difícil.
優先席|優先席では電話をしないでください。|Não fale ao telefone no assento preferencial.
時刻表|時刻表を見て、電車の時間を調べます。|Vejo a tabela e confiro o horário do trem.
遅れる|電車が十分遅れています。|O trem está dez minutos atrasado.
遅延|事故で電車に遅延が出ています。|Por causa de um acidente, os trens estão atrasados.
自転車|自転車で駅まで行きます。|Vou de bicicleta até a estação.
バイク|兄はバイクが好きです。|Meu irmão gosta de moto.
飛行機|飛行機で日本まで二十四時間かかります。|De avião leva 24 horas até o Japão.
船|船で島に行きました。|Fomos à ilha de barco.
運転免許|日本の運転免許を取りたいです。|Quero tirar a carteira de motorista japonesa.
運転手|タクシーの運転手さんに住所を見せました。|Mostrei o endereço para o taxista.
乗る|この電車は新宿に行きますか。乗ってもいいですか。|Este trem vai para Shinjuku? Posso entrar?
止める|車をここに止めてもいいですか。|Posso estacionar o carro aqui?
駐輪場|自転車は駐輪場に止めてください。|Deixe a bicicleta no bicicletário, por favor.
渋滞|道路が渋滞しています。|A rua está engarrafada.
事故|駅の近くで事故がありました。|Teve um acidente perto da estação.
片道|片道の切符を一枚ください。|Um bilhete só de ida, por favor.
往復|往復で二千円です。|Ida e volta custa dois mil ienes.
運賃|バスの運賃はいくらですか。|Quanto é a passagem do ônibus?
成田|成田空港から東京駅まで電車で行きます。|Do aeroporto de Narita até a estação de Tóquio vou de trem.
羽田|羽田空港は都心に近いです。|O aeroporto de Haneda fica perto do centro.
在留カード|在留カードはいつも持っていてください。|Ande sempre com o cartão de residente.
入国|入国のとき、パスポートを見せます。|Na entrada do país, mostro o passaporte.
出国|出国の手続きをしました。|Fiz os trâmites de saída do país.
入国審査|入国審査は少し時間がかかりました。|A imigração demorou um pouco.
税関|税関で荷物を見せました。|Mostrei a bagagem na alfândega.
荷物|荷物が重いので、手伝ってください。|A bagagem está pesada, me ajude, por favor.
手荷物|手荷物は一つまでです。|Só uma bagagem de mão.
搭乗口|搭乗口は十番です。|O portão de embarque é o 10.
搭乗券|搭乗券を見せてください。|Mostre o cartão de embarque, por favor.
便|この便は十時に出発します。|Este voo parte às dez.
国際線|国際線のターミナルはどこですか。|Onde fica o terminal internacional?
国内線|国内線で沖縄に行きます。|Vou para Okinawa num voo doméstico.
到着|飛行機は朝七時に到着します。|O avião chega às sete da manhã.
出発|出発の二時間前に空港に着きました。|Cheguei ao aeroporto duas horas antes da partida.
両替|空港でお金を両替しました。|Troquei dinheiro no aeroporto.
時差|日本とブラジルの時差は十二時間です。|A diferença de fuso entre Japão e Brasil é de 12 horas.
時差ぼけ|時差ぼけで夜眠れません。|Por causa do jet lag, não consigo dormir à noite.
観光|週末は京都を観光します。|No fim de semana vou fazer turismo em Kyoto.
観光地|ここは有名な観光地です。|Aqui é um ponto turístico famoso.
予定|明日の予定は何ですか。|Qual é o plano para amanhã?
海外|海外旅行は初めてです。|É minha primeira viagem ao exterior.
国|あなたの国はどこですか。|De que país você é?
世界|世界で一番好きな人はジャスです。|A pessoa de quem mais gosto no mundo é o Jas.
円|このシャツは三千円でした。|Esta camisa custou três mil ienes.
現金|この店は現金だけです。|Esta loja só aceita dinheiro.
小銭|小銭がたくさんあります。|Tenho muitas moedas.
お札|一万円札しかありません。|Só tenho nota de dez mil ienes.
おつり|おつりは二百円です。|O troco é de 200 ienes.
値段|この値段は税込ですか。|Este preço inclui imposto?
税込|税込で千百円です。|Com imposto são 1.100 ienes.
税抜|税抜の値段が書いてあります。|Está escrito o preço sem imposto.
消費税|日本の消費税は十パーセントです。|O imposto sobre consumo no Japão é de 10%.
割引|学生は割引があります。|Estudantes têm desconto.
セール|デパートでセールをしています。|A loja de departamentos está em liquidação.
半額|夜になると、お弁当が半額になります。|À noite as marmitas ficam pela metade do preço.
無料|ここのお水は無料です。|A água aqui é grátis.
領収書|領収書をお願いします。|O recibo, por favor.
レジ|レジに並びます。|Entro na fila do caixa.
袋はいりますか|「袋はいりますか。」「いいえ、大丈夫です。」|“Precisa de sacola?” “Não, obrigada.”
売る|この店では古い本を売っています。|Esta loja vende livros usados.
払う|カードで払えますか。|Posso pagar com cartão?
売り場|靴の売り場は三階です。|A seção de sapatos fica no terceiro andar.
売り切れ|人気のケーキは売り切れでした。|O bolo popular estava esgotado.
在庫|このサイズの在庫はありますか。|Tem estoque deste tamanho?
品物|品物はあした届きます。|A mercadoria chega amanhã.
商品|この商品はどこにありますか。|Onde fica este produto?
新品|新品のパソコンを買いました。|Comprei um computador novo.
中古|中古の自転車を買いました。|Comprei uma bicicleta usada.
返品|サイズが合わないので、返品したいです。|O tamanho não serve, então quero devolver.
交換|小さいサイズに交換できますか。|Posso trocar por um tamanho menor?
得|まとめて買うと得です。|Comprando junto sai mais em conta.
損|安いものを買って、損をしました。|Comprei uma coisa barata e saí no prejuízo.
貯金|旅行のために貯金しています。|Estou poupando para a viagem.
貯める|ポイントを貯めて、ご褒美と交換します。|Junto pontos e troco por recompensas.
貸す|ペンを貸してくれませんか。|Pode me emprestar uma caneta?
返す|図書館に本を返します。|Devolvo o livro à biblioteca.
給料|給料は毎月二十五日です。|O salário sai todo dia 25.
振込|家賃は振込で払います。|Pago o aluguel por transferência.
引き出す|ATMでお金を引き出します。|Saco dinheiro no caixa eletrônico.
暗証番号|暗証番号を忘れました。|Esqueci a senha.
通帳|通帳を見て、お金を確認します。|Confiro o dinheiro na caderneta.
生活費|東京は生活費が高いです。|Em Tóquio o custo de vida é alto.
光熱費|冬は光熱費が上がります。|No inverno as contas de luz e gás sobem.
電気代|エアコンを使うと、電気代が高くなります。|Usando o ar-condicionado, a conta de luz fica cara.
ガス代|ガス代はコンビニで払えます。|Dá para pagar a conta de gás na loja de conveniência.
水道代|水道代は二か月に一回です。|A conta de água é a cada dois meses.
請求書|請求書が郵便で届きました。|A fatura chegou pelo correio.
試食|スーパーで試食をしました。|Provei uma degustação no supermercado.
特売|今日は卵が特売です。|Hoje o ovo está em promoção.
期間限定|期間限定のアイスを食べました。|Tomei um sorvete de tempo limitado.
人気|このラーメン屋はとても人気です。|Este restaurante de lámen é muito popular.
新商品|コンビニの新商品を買ってみました。|Experimentei um produto novo da loja de conveniência.
おまけ|おまけでお菓子をもらいました。|Ganhei um doce de brinde.
会員|会員になると、安くなります。|Virando membro, fica mais barato.
お届け|お届けは明日の午前です。|A entrega é amanhã de manhã.
配達|荷物の配達は何時ですか。|A que horas é a entrega da encomenda?
送料|五千円以上は送料が無料です。|Acima de 5 mil ienes o frete é grátis.
通販|通販で服を買いました。|Comprei roupa pela internet.
温めますか|「お弁当は温めますか。」「はい、お願いします。」|“Quer que esquente a marmita?” “Sim, por favor.”
お箸はご利用ですか|「お箸はご利用ですか。」「一つお願いします。」|“Vai querer hashi?” “Um, por favor.”
ご一緒に|ご一緒にポテトはいかがですか。|Vai querer batata frita junto?
少々|少々お待ちください。|Aguarde um momento, por favor.
時|子供の時、海の近くに住んでいました。|Quando era criança, morava perto do mar.
あさって|あさっては休みです。|Depois de amanhã é folga.
おととい|おととい、ジャスと電話しました。|Anteontem falei com o Jas por telefone.
毎週|毎週土曜日に日本語の授業があります。|Toda semana, no sábado, tenho aula de japonês.
毎月|毎月、本を一冊読みます。|Todo mês leio um livro.
毎年|毎年、誕生日にケーキを作ります。|Todo ano faço um bolo no aniversário.
夕方|夕方になると、少し涼しくなります。|No fim da tarde fica um pouco mais fresco.
晩|今晩は何を食べたい？|O que você quer comer hoje à noite?
夜中|夜中に目が覚めました。|Acordei de madrugada.
午前|午前中に買い物に行きます。|Vou fazer compras de manhã.
午後|午後から雨が降るそうです。|Dizem que vai chover à tarde.
今朝|今朝は早く起きました。|Hoje de manhã acordei cedo.
今晩|今晩、電話してもいい？|Posso te ligar hoje à noite?
今夜|今夜は星がきれいです。|Esta noite as estrelas estão lindas.
週|一週間に三回、運動します。|Faço exercício três vezes por semana.
今週|今週はとても忙しいです。|Esta semana estou muito ocupada.
来週|来週、テストがあります。|Semana que vem tem prova.
平日|平日は九時から五時まで働きます。|Nos dias úteis trabalho das nove às cinco.
休日|休日は家でゆっくりします。|Nos dias de folga descanso em casa.
祝日|月曜日は祝日なので、休みです。|Segunda é feriado, então é folga.
月|月がとてもきれいですね。|A lua está muito bonita, né.
今月|今月は誕生日があります。|Este mês tem meu aniversário.
来月|来月、引っ越しをします。|Mês que vem vou me mudar.
先月|先月、東京に行きました。|Mês passado fui a Tóquio.
今年|今年はたくさん日本語を勉強しました。|Este ano estudei muito japonês.
去年|去年の夏、ジャスがブラジルに来ました。|No verão do ano passado o Jas veio ao Brasil.
火曜日|火曜日はゴミの日です。|Terça-feira é dia de lixo.
水曜日|水曜日に病院の予約があります。|Tenho consulta marcada na quarta-feira.
木曜日|木曜日の夜は空いていますか。|Você está livre na quinta à noite?
日付|書類に今日の日付を書いてください。|Escreva a data de hoje no documento, por favor.
二日|二日の朝に出発します。|Parto na manhã do dia 2.
四日|旅行は四日間です。|A viagem é de quatro dias.
五日|五日に家賃を払います。|Pago o aluguel no dia 5.
六日|六日の夜は空いています。|Estou livre na noite do dia 6.
七日|七日間、日本にいます。|Vou ficar sete dias no Japão.
八日|八日に荷物が届きます。|A encomenda chega no dia 8.
九日|九日は母の誕生日です。|Dia 9 é aniversário da minha mãe.
十日|十日までに申し込んでください。|Inscreva-se até o dia 10, por favor.
二十日|給料は二十日に入ります。|O salário cai no dia 20.
一月|一月はとても寒いです。|Janeiro é muito frio.
二月|二月二十二日に日本に着きます。|Chego ao Japão no dia 22 de fevereiro.
三月|三月二十八日は私の誕生日です。|28 de março é o meu aniversário.
四月|四月に桜が咲きます。|As cerejeiras florescem em abril.
五月|五月は天気がいい日が多いです。|Em maio tem muitos dias de tempo bom.
六月|六月は雨が多いです。|Junho tem muita chuva.
八月|八月はとても暑いです。|Agosto é muito quente.
九月|九月になっても、まだ暑いです。|Mesmo em setembro ainda está quente.
十月|十月十三日はプロポーズの日です。|13 de outubro é o dia do pedido de casamento.
十一月|十一月は紅葉がきれいです。|Em novembro as folhas vermelhas são lindas.
十二月|十二月はクリスマスがあります。|Dezembro tem Natal.
何曜日|今日は何曜日ですか。|Que dia da semana é hoje?
～時|毎朝七時に起きます。|Acordo às sete todas as manhãs.
～分|駅まで歩いて五分です。|Até a estação são cinco minutos a pé.
半|九時半に会いましょう。|Vamos nos encontrar às nove e meia.
～か月|日本に来て三か月です。|Faz três meses que vim para o Japão.
～年|日本語を勉強して二年になります。|Faz dois anos que estudo japonês.
秒|あと十秒で始まります。|Começa em dez segundos.
最近|最近、日本語が上手になりました。|Ultimamente meu japonês melhorou.
昔|昔、この町に住んでいました。|Antigamente eu morava nesta cidade.
さっき|さっき、ジャスから電話がありました。|Agora há pouco o Jas ligou.
これから|これから仕事に行きます。|Vou trabalhar agora.
将来|将来、日本で先生になりたいです。|No futuro quero ser professora no Japão.
未来|二人の未来が楽しみです。|Estou ansiosa pelo nosso futuro.
過去|過去のことは気にしないで。|Não se preocupe com o passado.
現在|現在、東京に住んでいます。|Atualmente moro em Tóquio.
始め|月の始めは忙しいです。|O começo do mês é corrido.
途中|仕事の途中で電話がありました。|Recebi uma ligação no meio do trabalho.
最初|最初は日本語が全然分かりませんでした。|No começo eu não entendia nada de japonês.
最後|最後まで頑張りましょう。|Vamos nos esforçar até o fim.
次|次の駅で降ります。|Desço na próxima estação.
締め切り|レポートの締め切りは金曜日です。|O prazo do relatório é sexta-feira.
期限|この券の期限は今月までです。|Este cupom vale até este mês.
賞味期限|牛乳の賞味期限を見ます。|Olho a validade do leite.
間に合う|走ったので、電車に間に合いました。|Corri e consegui pegar o trem.
季節|一番好きな季節は春です。|A estação de que mais gosto é a primavera.
春|春になると、暖かくなります。|Na primavera fica mais quente.
夏|日本の夏はとても蒸し暑いです。|O verão japonês é muito abafado.
秋|秋は食べ物がおいしい季節です。|O outono é a estação em que a comida é gostosa.
冬|冬は雪が降ります。|No inverno neva.
お正月|お正月は家族とゆっくり過ごします。|No Ano-Novo passo o tempo com a família.
大晦日|大晦日の夜にそばを食べます。|Na noite da véspera de Ano-Novo comemos soba.
年末|年末は大掃除をします。|No fim do ano fazemos a grande faxina.
花見|公園で花見をしました。|Fizemos piquenique sob as cerejeiras no parque.
桜|桜が満開です。|As cerejeiras estão em plena floração.
梅雨|梅雨は毎日雨が降ります。|Na estação das chuvas chove todo dia.
お盆|お盆はジャスの実家に帰ります。|No Obon vamos para a casa dos pais do Jas.
花火|夏の夜に花火を見ました。|Vimos fogos de artifício numa noite de verão.
紅葉|京都に紅葉を見に行きます。|Vou a Kyoto ver as folhas vermelhas.
ゴールデンウィーク|ゴールデンウィークはどこも混んでいます。|Na Golden Week todo lugar fica lotado.
連休|三連休に旅行に行きます。|No feriado de três dias vamos viajar.
お祝い|合格のお祝いに食事に行きました。|Fomos comer para comemorar a aprovação.
天気予報|天気予報によると、明日は雨です。|Segundo a previsão do tempo, amanhã vai chover.
晴れ|明日は晴れるといいですね。|Tomara que amanhã faça sol.
曇り|今日は一日中曇りです。|Hoje fica nublado o dia todo.
雨|雨が降っているので、傘を持っていきます。|Está chovendo, então vou levar o guarda-chuva.
雪|東京で雪を見たいです。|Quero ver neve em Tóquio.
風|今日は風が強いです。|Hoje o vento está forte.
台風|台風が来るので、外に出ないでください。|Vem um tufão, não saia, por favor.
雷|雷の音が怖いです。|Tenho medo do barulho do trovão.
地震|地震のときは、机の下に入ります。|Quando tem terremoto, entro embaixo da mesa.
津波|地震のあとは、津波に気をつけてください。|Depois de um terremoto, cuidado com tsunami.
空|今日は空が青いです。|Hoje o céu está azul.
雲|白い雲が浮かんでいます。|Nuvens brancas estão flutuando.
太陽|太陽がまぶしいです。|O sol está ofuscante.
星|田舎は星がよく見えます。|No interior dá para ver bem as estrelas.
虹|雨のあとに虹が出ました。|Depois da chuva apareceu um arco-íris.
気温|今日の気温は三十五度です。|A temperatura hoje é de 35 graus.
温度|エアコンの温度を下げてください。|Abaixe a temperatura do ar-condicionado, por favor.
湿気|日本の夏は湿気が多いです。|O verão japonês é muito úmido.
～度|今日は十度しかありません。|Hoje só faz dez graus.
暖かい|今日は暖かくて、気持ちがいいです。|Hoje está morno e agradável.
蒸し暑い|七月は蒸し暑い日が続きます。|Em julho seguem os dias abafados.
晴れる|午後から晴れるそうです。|Dizem que vai abrir o sol à tarde.
曇る|空が曇ってきました。|O céu ficou nublado.
吹く|冷たい風が吹いています。|Está soprando um vento frio.
止む|雨が止んだら、出かけましょう。|Quando a chuva parar, vamos sair.
傘をさす|雨なので、傘をさして歩きます。|Está chovendo, então ando com o guarda-chuva aberto.
濡れる|傘を忘れて、濡れてしまいました。|Esqueci o guarda-chuva e me molhei.
乾く|洗濯物がよく乾きました。|A roupa secou bem.
朝日|海で朝日を見ました。|Vi o sol nascer no mar.
夕日|夕日がとてもきれいでした。|O pôr do sol estava lindo.
日の出|お正月に日の出を見に行きます。|No Ano-Novo vamos ver o nascer do sol.
月見|秋に月見をします。|No outono contemplamos a lua.
満月|今夜は満月です。|Hoje à noite é lua cheia.
大雨|大雨で電車が止まりました。|O trem parou por causa da chuva forte.
小雨|小雨なので、傘はいりません。|É só um chuvisco, não precisa de guarda-chuva.
にわか雨|にわか雨に気をつけてください。|Cuidado com pancadas de chuva.
霧|朝は霧で何も見えません。|De manhã não se vê nada por causa da neblina.
霜|冬の朝は霜がおります。|Nas manhãs de inverno cai geada.
氷点下|北海道は氷点下になります。|Em Hokkaido fica abaixo de zero.
暑さ|この暑さはつらいです。|Este calor é difícil.
寒さ|日本の冬の寒さに慣れました。|Me acostumei com o frio do inverno japonês.
熱中症|熱中症に気をつけて、水を飲みましょう。|Cuidado com a insolação, vamos beber água.
日焼け|海で日焼けしました。|Me queimei de sol na praia.
日焼け止め|出かける前に日焼け止めを塗ります。|Passo protetor solar antes de sair.
花粉|春は花粉がたくさん飛びます。|Na primavera voa muito pólen.
春らしい|今日は春らしい天気ですね。|Hoje o tempo está bem de primavera, né.
蝉|夏は蝉の声がうるさいです。|No verão o canto das cigarras é barulhento.
かき氷|お祭りでかき氷を食べました。|Comi raspadinha de gelo no festival.
冬服|そろそろ冬服を出します。|Já está na hora de tirar as roupas de inverno.
夏服|夏服を買いに行きます。|Vou comprar roupas de verão.
衣替え|六月に衣替えをします。|Em junho troco as roupas da estação.
雪だるま|公園で雪だるまを作りました。|Fizemos um boneco de neve no parque.
カイロ|寒い日はカイロを持っていきます。|Em dia frio levo um aquecedor de bolso.
数|参加する人の数を数えます。|Conto o número de participantes.
数字|この数字は何と読みますか。|Como se lê este número?
万|この時計は三万円でした。|Este relógio custou trinta mil ienes.
億|東京には一千万人以上が住んでいます。日本は一億人以上です。|Em Tóquio moram mais de dez milhões de pessoas. No Japão, mais de cem milhões.
二つ|りんごを二つください。|Duas maçãs, por favor.
四つ|椅子が四つあります。|Tem quatro cadeiras.
五つ|おにぎりを五つ作りました。|Fiz cinco onigiris.
六つ|卵を六つ買います。|Vou comprar seis ovos.
七つ|この町には駅が七つあります。|Esta cidade tem sete estações.
八つ|ケーキを八つに切りました。|Cortei o bolo em oito pedaços.
九つ|箱の中にボールが九つあります。|Tem nove bolas dentro da caixa.
二人|二人で旅行に行きます。|Vamos viajar a dois.
～人|クラスには学生が十五人います。|Tem quinze alunos na turma.
～個|りんごを三個ください。|Três maçãs, por favor.
～枚|切手を二枚ください。|Dois selos, por favor.
～本|ペンを一本貸してください。|Me empresta uma caneta, por favor.
～匹|猫を二匹飼っています。|Tenho dois gatos.
～台|家に車が一台あります。|Tem um carro em casa.
～冊|本を三冊借りました。|Peguei três livros emprestados.
～杯|コーヒーを一杯飲みました。|Tomei uma xícara de café.
～回|一日に三回、歯を磨きます。|Escovo os dentes três vezes por dia.
～番|三番の窓口へどうぞ。|Dirija-se ao guichê número três.
～階|トイレは二階にあります。|O banheiro fica no segundo andar.
～歳|弟は二十五歳です。|Meu irmão mais novo tem 25 anos.
～円|このパンは百五十円です。|Este pão custa 150 ienes.
～つ目|二つ目の信号を右です。|É à direita no segundo semáforo.
いくつ|りんごはいくつありますか。|Quantas maçãs tem?
何個|卵は何個いりますか。|Quantos ovos precisa?
何人|家族は何人ですか。|Quantas pessoas tem na sua família?
半分|ケーキを半分ずつ食べましょう。|Vamos comer metade do bolo cada um.
全員|全員そろいましたか。|Estão todos aqui?
ちょっと|ちょっと待ってください。|Espere um pouco, por favor.
たくさん|今日はたくさん歩きました。|Hoje andei bastante.
多い|東京は人が多いです。|Tóquio tem muita gente.
少ない|この道は車が少ないです。|Esta rua tem poucos carros.
大体|駅まで大体十分です。|Até a estação são mais ou menos dez minutos.
約|空港まで約一時間かかります。|Leva aproximadamente uma hora até o aeroporto.
以上|二十歳以上はお酒が飲めます。|Quem tem 20 anos ou mais pode beber álcool.
以下|六歳以下の子供は無料です。|Crianças de seis anos ou menos não pagam.
以内|三日以内に返事をください。|Responda dentro de três dias, por favor.
番号|電話番号を教えてください。|Me passa seu número de telefone, por favor.
順番|順番に並んでください。|Faça fila por ordem, por favor.
倍|日本の夏はブラジルの二倍暑く感じます。|O verão japonês parece duas vezes mais quente que o do Brasil.
重さ|荷物の重さは二十キロまでです。|O peso da bagagem é de até 20 quilos.
長さ|このズボンの長さを直してください。|Ajuste o comprimento desta calça, por favor.
大きさ|この箱の大きさはちょうどいいです。|O tamanho desta caixa está certinho.
量|この店はご飯の量が多いです。|Este restaurante serve bastante arroz.
キロ|毎日五キロ歩きます。|Ando cinco quilômetros por dia.
センチ|ジャスは私より二十センチ高いです。|O Jas é vinte centímetros mais alto que eu.
何日|今日は何日ですか。|Que dia é hoje?
何月|誕生日は何月ですか。|Em que mês é o seu aniversário?
何歳|お子さんは何歳ですか。|Quantos anos tem seu filho?
一回|もう一回言ってください。|Fale mais uma vez, por favor.
一年|日本に来て一年になりました。|Já faz um ano que vim para o Japão.
一か月|一か月に一回、映画を見ます。|Vejo um filme uma vez por mês.
三十分|三十分だけ昼寝をします。|Vou cochilar só trinta minutos.
午前中|荷物は午前中に届きます。|A encomenda chega de manhã.
今日中|今日中にこの仕事を終わらせます。|Vou terminar este trabalho ainda hoje.
年上|ジャスは私より三つ年上です。|O Jas é três anos mais velho que eu.
年下|妹は私より五つ年下です。|Minha irmã é cinco anos mais nova que eu.
同い年|私たちは同い年です。|Nós temos a mesma idade.
働く|兄は銀行で働いています。|Meu irmão trabalha num banco.
会社員|父は会社員です。|Meu pai é funcionário de empresa.
社員|この会社には社員が百人います。|Esta empresa tem cem funcionários.
社長|社長にあいさつをしました。|Cumprimentei o presidente da empresa.
部下|課長は部下にとても優しいです。|O chefe é muito gentil com os subordinados.
同僚|同僚とお昼を食べます。|Almoço com os colegas de trabalho.
先輩|先輩に仕事を教えてもらいました。|Um colega mais antigo me ensinou o trabalho.
後輩|後輩の仕事を手伝いました。|Ajudei no trabalho de um colega mais novo.
店長|店長にシフトを相談しました。|Conversei com o gerente sobre a escala.
課長|課長は今、会議中です。|O chefe de seção está em reunião agora.
バイト|週に三回、カフェでバイトをしています。|Faço bico num café três vezes por semana.
アルバイト|アルバイトを探しています。|Estou procurando um trabalho de meio período.
パート|母はスーパーでパートをしています。|Minha mãe trabalha meio período no supermercado.
正社員|来年、正社員になりたいです。|Quero virar funcionária efetiva no ano que vem.
派遣|派遣の仕事を始めました。|Comecei um trabalho temporário.
面接|明日、会社の面接があります。|Amanhã tenho entrevista numa empresa.
履歴書|履歴書に写真を貼ります。|Colo a foto no currículo.
応募|ホテルの仕事に応募しました。|Me candidatei a um trabalho num hotel.
採用|面接のあと、採用の電話がありました。|Depois da entrevista, me ligaram dizendo que fui contratada.
求人|ネットで求人を見ています。|Estou vendo vagas na internet.
就職|日本で就職したいです。|Quero arrumar emprego no Japão.
転職|兄は去年、転職しました。|Meu irmão mudou de emprego no ano passado.
退職|父は来年、退職します。|Meu pai vai se aposentar no ano que vem.
辞める|バイトを辞めることにしました。|Decidi largar o bico.
休憩|十二時から一時まで休憩です。|O intervalo é do meio-dia à uma.
残業|今日は残業で遅くなります。|Hoje vou chegar tarde por causa de hora extra.
出勤|毎朝八時に出勤します。|Chego ao trabalho às oito toda manhã.
退勤|退勤の時間は六時です。|O horário de saída é às seis.
通勤|通勤に一時間かかります。|Levo uma hora para ir ao trabalho.
遅刻|電車が遅れて、遅刻しました。|O trem atrasou e eu cheguei atrasada.
早退|熱があって、早退しました。|Estava com febre e saí mais cedo.
欠勤|病気で欠勤の連絡をしました。|Avisei que ia faltar por estar doente.
有給休暇|有給休暇を取って、旅行に行きます。|Vou tirar férias remuneradas e viajar.
シフト|来週のシフトが出ました。|Saiu a escala da semana que vem.
時給|このバイトは時給千二百円です。|Este bico paga 1.200 ienes por hora.
月給|月給は二十五万円です。|O salário mensal é de 250 mil ienes.
契約|一年の契約で働きます。|Vou trabalhar com contrato de um ano.
打ち合わせ|午後に打ち合わせがあります。|Tem uma reunião à tarde.
報告|仕事が終わったら、課長に報告します。|Quando terminar o trabalho, informo o chefe.
連絡|遅れるときは、必ず連絡してください。|Quando for se atrasar, avise sem falta.
相談|困ったことがあったら、相談してね。|Se tiver algum problema, fale comigo.
確認|もう一度、確認してください。|Confira mais uma vez, por favor.
準備|会議の準備をします。|Preparo a reunião.
担当|この仕事の担当は私です。|Eu sou a responsável por este trabalho.
責任|大切な仕事なので、責任があります。|É um trabalho importante, então tenho responsabilidade.
経験|接客の経験があります。|Tenho experiência em atendimento.
能力|日本語の能力試験を受けます。|Vou fazer o exame de proficiência em japonês.
制服|この店では制服を着ます。|Nesta loja se usa uniforme.
名刺|初めて会った人と名刺を交換しました。|Troquei cartão de visita com quem conheci.
職場|職場の人はみんな親切です。|O pessoal do trabalho é todo gentil.
接客|ホテルで接客の仕事をしています。|Trabalho com atendimento num hotel.
通訳|病院で通訳をお願いしました。|Pedi um intérprete no hospital.
翻訳|ポルトガル語の翻訳の仕事がしたいです。|Quero trabalhar com tradução de português.
任せる|この仕事はあなたに任せます。|Deixo este trabalho com você.
頼む|ジャスに買い物を頼みました。|Pedi para o Jas fazer as compras.
職業|ご職業は何ですか。|Qual é a sua profissão?
料理人|兄は料理人です。|Meu irmão é cozinheiro.
美容師|美容師さんに髪を切ってもらいました。|A cabeleireira cortou meu cabelo.
保育士|保育士は子供が好きな人の仕事です。|Educador de creche é trabalho para quem gosta de criança.
介護士|日本では介護士が足りません。|No Japão faltam cuidadores de idosos.
弁護士|弁護士に相談しました。|Consultei um advogado.
公務員|姉は市役所の公務員です。|Minha irmã é funcionária pública da prefeitura.
主婦|母は主婦です。|Minha mãe é dona de casa.
作業|この作業は二人でします。|Este trabalho é feito a dois.
製品|この工場では車の製品を作っています。|Esta fábrica faz peças de carro.
品質|この会社は品質を大切にしています。|Esta empresa valoriza a qualidade.
検品|商品を一つずつ検品します。|Inspeciono os produtos um por um.
梱包|商品を箱に梱包します。|Embalo os produtos em caixas.
倉庫|荷物を倉庫に運びます。|Levo a carga para o depósito.
ライン|工場のラインで働いています。|Trabalho na linha de produção da fábrica.
安全第一|工場では安全第一です。|Na fábrica, segurança em primeiro lugar.
指示|上司の指示に従います。|Sigo as instruções do chefe.
目上|目上の人には敬語を使います。|Com pessoas superiores usa-se linguagem formal.
ミス|小さいミスをしてしまいました。|Cometi um pequeno erro.
予定表|来月の予定表を作りました。|Fiz o cronograma do mês que vem.
会議室|会議室は三階です。|A sala de reunião fica no terceiro andar.
事務|会社で事務の仕事をしています。|Trabalho no escritório de uma empresa.
電話に出る|会社の電話に出るのは緊張します。|Atender o telefone da empresa me deixa nervosa.
折り返し|あとで折り返し電話します。|Retorno a ligação depois.
伝言|田中さんに伝言をお願いします。|Por favor, deixe um recado para o Sr. Tanaka.
メモ|大事なことはメモします。|Anoto as coisas importantes.
印刷|資料を十部印刷してください。|Imprima dez cópias do material, por favor.
プリンター|プリンターの紙がなくなりました。|Acabou o papel da impressora.
ファイル|書類をファイルに入れます。|Coloco os documentos na pasta.
完成|新しいビルが完成しました。|O prédio novo ficou pronto.
進む|仕事が順調に進んでいます。|O trabalho está avançando bem.
進める|この計画を進めましょう。|Vamos levar este plano adiante.
習う|ピアノを習っています。|Faço aula de piano.
学ぶ|日本の文化を学びたいです。|Quero aprender sobre a cultura japonesa.
覚える|毎日、新しい言葉を十個覚えます。|Todo dia aprendo dez palavras novas.
練習|毎日、日本語の練習をします。|Pratico japonês todos os dias.
復習|寝る前に、今日の単語を復習します。|Antes de dormir, reviso as palavras do dia.
予習|授業の前に予習をします。|Estudo antes da aula.
宿題|宿題を忘れました。|Esqueci a lição de casa.
授業|授業は九時に始まります。|A aula começa às nove.
教室|教室に学生が十人います。|Tem dez alunos na sala de aula.
日本語学校|日本語学校に通う予定です。|Planejo frequentar uma escola de japonês.
試験|来月、日本語の試験があります。|Mês que vem tem prova de japonês.
合格|試験に合格しました！|Passei na prova!
問題|この問題は難しいです。|Esta questão é difícil.
答え|答えが分かりません。|Não sei a resposta.
答える|先生の質問に答えました。|Respondi à pergunta do professor.
言葉|日本語の言葉はおもしろいです。|As palavras em japonês são interessantes.
単語|この単語の意味は何ですか。|Qual é o significado desta palavra?
文|短い文を作ってください。|Faça uma frase curta, por favor.
文法|日本語の文法は少し難しいです。|A gramática japonesa é um pouco difícil.
発音|発音を練習します。|Pratico a pronúncia.
ポルトガル語|ジャスはポルトガル語が少し話せます。|O Jas fala um pouco de português.
英語|英語も少し話せます。|Também falo um pouco de inglês.
外国語|外国語を勉強するのは楽しいです。|Estudar língua estrangeira é divertido.
辞書|分からない言葉は辞書で調べます。|Procuro no dicionário as palavras que não sei.
教科書|教科書の十ページを開いてください。|Abram o livro na página dez, por favor.
例|例を見せてください。|Me mostre um exemplo, por favor.
例文|例文を読んで、使い方を覚えます。|Leio as frases de exemplo e aprendo como usar.
言う|日本語で何と言いますか。|Como se diz em japonês?
説明|先生の説明はとても分かりやすいです。|A explicação da professora é muito fácil de entender.
作文|日本語で作文を書きました。|Escrevi uma redação em japonês.
成績|今学期は成績がよかったです。|Minhas notas foram boas neste semestre.
点数|テストの点数は八十点でした。|A nota da prova foi oitenta.
卒業|姉は今年、大学を卒業しました。|Minha irmã se formou na faculdade este ano.
入学|弟は四月に高校に入学します。|Meu irmão entra no ensino médio em abril.
留学|日本に留学したいです。|Quero fazer intercâmbio no Japão.
留学生|この学校には留学生が多いです。|Esta escola tem muitos estudantes estrangeiros.
資格|仕事のために資格を取りたいです。|Quero tirar um certificado para o trabalho.
小学校|小学校は家から近いです。|A escola primária é perto de casa.
中学校|中学校で英語を習いました。|Aprendi inglês no ginásio.
高校|高校のとき、バレーボールをしていました。|No ensino médio eu jogava vôlei.
小学生|小学生が元気に走っています。|As crianças do primário estão correndo animadas.
中学生|中学生の弟は毎日部活をしています。|Meu irmão, que está no ginásio, faz atividade de clube todo dia.
高校生|高校生のとき、日本のアニメを見始めました。|Comecei a ver anime japonês quando estava no ensino médio.
大学生|妹は大学生です。|Minha irmã mais nova é universitária.
給食|日本の小学校には給食があります。|As escolas primárias japonesas têm merenda.
運動会|秋に運動会があります。|No outono tem a gincana esportiva.
遠足|子供たちは遠足で動物園に行きました。|As crianças foram ao zoológico na excursão.
入学式|入学式は桜の季節です。|A cerimônia de ingresso é na época das cerejeiras.
卒業式|卒業式で泣きました。|Chorei na formatura.
部活|部活でサッカーをしています。|Jogo futebol no clube da escola.
塾|子供は放課後に塾に行きます。|As crianças vão ao cursinho depois da aula.
ランドセル|小学生はランドセルを背負っています。|As crianças do primário usam mochila escolar.
黒板|先生が黒板に字を書きます。|A professora escreve na lousa.
同級生|同級生と久しぶりに会いました。|Encontrei um colega de classe depois de muito tempo.
申請|ビザの申請をしました。|Fiz o pedido de visto.
申し込み|申し込みは明日までです。|A inscrição é até amanhã.
申し込む|日本語の授業に申し込みました。|Me inscrevi na aula de japonês.
届け出|引っ越したら、届け出が必要です。|Quando se muda, é preciso fazer a notificação.
転入届|市役所に転入届を出しました。|Entreguei o registro de mudança na prefeitura.
住民票|住民票を一枚ください。|Um certificado de residência, por favor.
マイナンバー|マイナンバーのカードを作りました。|Fiz o cartão do My Number.
印鑑|ここに印鑑を押してください。|Carimbe aqui, por favor.
署名|書類に署名してください。|Assine o documento, por favor.
身分証明書|身分証明書を見せてください。|Mostre um documento de identidade, por favor.
証明書|会社に証明書を出します。|Entrego o certificado para a empresa.
用紙|この用紙に住所を書いてください。|Escreva o endereço neste formulário, por favor.
記入|名前と住所を記入してください。|Preencha nome e endereço, por favor.
提出|書類は窓口に提出してください。|Entregue os documentos no guichê, por favor.
必要|手続きにはパスポートが必要です。|Para o trâmite é preciso o passaporte.
整理券|整理券を取って、待ってください。|Pegue a senha e aguarde, por favor.
呼ぶ|番号を呼ばれたら、窓口へ行きます。|Quando chamam meu número, vou ao guichê.
待つ|三十分も待ちました。|Esperei uns bons trinta minutos.
並ぶ|人気の店の前に人が並んでいます。|Tem gente fazendo fila na frente da loja famosa.
列|この列に並んでください。|Entre nesta fila, por favor.
番号札|番号札は十五番です。|A senha é número quinze.
国籍|国籍はブラジルです。|Minha nacionalidade é brasileira.
生年月日|生年月日を書いてください。|Escreva sua data de nascimento, por favor.
性別|用紙に性別を書きます。|Escrevo o sexo no formulário.
年齢|年齢を教えてください。|Me diga a sua idade, por favor.
電話番号|電話番号が変わりました。|Meu número de telefone mudou.
配偶者|配偶者の名前を書いてください。|Escreva o nome do cônjuge, por favor.
配偶者ビザ|配偶者ビザで日本に住みます。|Vou morar no Japão com visto de cônjuge.
婚姻届|二人で婚姻届を出しに行きました。|Fomos juntos entregar o registro de casamento.
入国管理局|入国管理局でビザを更新します。|Renovo o visto na imigração.
更新|在留カードの更新を忘れないでね。|Não esqueça de renovar o cartão de residente.
税金|毎年、税金を払います。|Todo ano pago impostos.
年金|日本では年金を払います。|No Japão se paga a previdência.
保険|車の保険に入りました。|Fiz seguro do carro.
電話する|家に着いたら電話するね。|Te ligo quando chegar em casa.
携帯|携帯を家に忘れました。|Esqueci o celular em casa.
スマホ|新しいスマホを買いました。|Comprei um smartphone novo.
返事|メールの返事が来ました。|Chegou a resposta do e-mail.
返信|すぐに返信してくれてありがとう。|Obrigada por responder logo.
送る|ジャスに写真を送りました。|Mandei uma foto para o Jas.
届く|ブラジルから荷物が届きました。|Chegou uma encomenda do Brasil.
受け取る|郵便局で荷物を受け取りました。|Retirei a encomenda no correio.
ネット|ネットで電車の時間を調べます。|Vejo o horário do trem na internet.
パソコン|パソコンで書類を作ります。|Faço os documentos no computador.
アプリ|日本語のアプリで勉強しています。|Estudo com um aplicativo de japonês.
パスワード|パスワードを忘れてしまいました。|Esqueci a senha.
アカウント|新しいアカウントを作りました。|Criei uma conta nova.
登録|アプリに名前を登録します。|Cadastro meu nome no aplicativo.
検索|分からないことはネットで検索します。|Pesquiso na internet o que não sei.
画面|スマホの画面が割れました。|A tela do celular rachou.
充電|スマホの充電がなくなりそうです。|A bateria do celular está quase acabando.
充電器|充電器を貸してくれる？|Pode me emprestar o carregador?
電源|電源を切ってください。|Desligue, por favor.
通知|アプリの通知が来ました。|Chegou uma notificação do aplicativo.
設定|スマホの言葉の設定を日本語にしました。|Coloquei o idioma do celular em japonês.
宅配便|宅配便で荷物を送ります。|Mando a encomenda pela transportadora.
不在票|郵便受けに不在票が入っていました。|Tinha um aviso de entrega na caixa de correio.
再配達|不在票を見て、再配達を頼みました。|Vi o aviso e pedi a reentrega.
お辞儀|日本ではあいさつのときにお辞儀をします。|No Japão a gente se curva ao cumprimentar.
自動販売機|自動販売機で温かいお茶を買いました。|Comprei chá quente na máquina de venda.
自販機|駅の自販機でジュースを買います。|Compro suco na máquina da estação.
コンビニ弁当|忙しい日はコンビニ弁当を食べます。|Nos dias corridos como marmita de conveniência.
レジ袋|レジ袋は三円です。|A sacola plástica custa três ienes.
マイバッグ|買い物にはマイバッグを持っていきます。|Levo minha sacola para as compras.
回覧板|回覧板を隣の家に回します。|Passo o aviso do bairro para a casa ao lado.
町内会|町内会のお祭りに参加しました。|Participei do festival da associação do bairro.
ゴミ出しの日|明日はゴミ出しの日です。|Amanhã é dia de coleta de lixo.
年賀状|お正月に年賀状が届きます。|No Ano-Novo chegam os cartões de Ano-Novo.
お年玉|子供たちはお年玉をもらって喜びました。|As crianças ficaram felizes com o dinheiro de Ano-Novo.
初詣|お正月に初詣に行きます。|No Ano-Novo fazemos a primeira visita ao santuário.
おみくじ|おみくじで「大吉」が出ました。|Tirei “muita sorte” no papel da sorte.
お守り|神社でお守りを買いました。|Comprei um amuleto no santuário.
お参り|お寺にお参りに行きました。|Fui rezar no templo.
お通し|居酒屋ではお通しが出ます。|No izakaya servem um petisco cobrado.
割り勘|今日は割り勘にしましょう。|Hoje vamos dividir a conta.
おごる|今日は私がおごるね。|Hoje eu pago, tá.
空気を読む|日本では空気を読むことが大切です。|No Japão é importante ler o ambiente.
遠慮|遠慮しないで、たくさん食べてね。|Não faça cerimônia, coma bastante.
気を使う|ジャスの家族はいつも気を使ってくれます。|A família do Jas sempre é atenciosa comigo.
お世話になる|日本でいろいろな人にお世話になりました。|No Japão fui ajudada por muitas pessoas.
お邪魔します|「お邪魔します」と言って、家に入りました。|Disse “com licença” e entrei na casa.
つまらないものですが|つまらないものですが、どうぞ。|É só uma lembrancinha, mas aceite, por favor.
お先にどうぞ|エレベーターで「お先にどうぞ」と言いました。|No elevador eu disse “pode ir na frente”.
お疲れ様でした|今日もお疲れ様でした。|Bom trabalho hoje também.
緊急|緊急のときは、この番号に電話してください。|Em emergência, ligue para este número.
助けて|助けて！誰か来てください！|Socorro! Alguém venha, por favor!
火事|近所で火事がありました。|Teve um incêndio na vizinhança.
避難|地震のあと、公園に避難しました。|Depois do terremoto, nos refugiamos no parque.
避難所|近くの避難所は小学校です。|O abrigo mais perto é a escola primária.
防災|防災のために水を買っておきます。|Compro água para prevenção de desastres.
非常食|非常食を三日分用意しました。|Preparei comida de emergência para três dias.
懐中電灯|停電のときのために懐中電灯を置いています。|Deixo uma lanterna para caso de queda de energia.
停電|台風で停電しました。|Faltou luz por causa do tufão.
断水|工事で明日は断水です。|Amanhã vai ter corte de água por causa da obra.
泥棒|泥棒に気をつけてください。|Cuidado com ladrões.
落とし物|駅で落とし物をしました。|Perdi uma coisa na estação.
忘れ物|電車に忘れ物をしてしまいました。|Esqueci uma coisa no trem.
迷子|デパートで子供が迷子になりました。|Uma criança se perdeu na loja de departamentos.
盗む|自転車を盗まないでください。|Não roube bicicletas.
盗まれる|自転車が盗まれました。|Roubaram minha bicicleta.
怪我をする|転んで怪我をしました。|Caí e me machuquei.
110番|泥棒を見たら、110番に電話します。|Se vir um ladrão, ligo para o 110.
119番|火事のときは119番に電話します。|Em caso de incêndio, ligo para o 119.
大使館|東京のブラジル大使館に行きました。|Fui à Embaixada do Brasil em Tóquio.
領事館|パスポートの手続きは領事館でします。|O trâmite do passaporte é feito no consulado.
自然|日本は自然がきれいです。|O Japão tem uma natureza bonita.
山|週末に山に登ります。|No fim de semana vou subir a montanha.
川|川の近くを散歩しました。|Passeei perto do rio.
海|夏はいつも海に行きます。|No verão sempre vou à praia.
湖|湖でボートに乗りました。|Andei de barco no lago.
池|公園の池に魚がいます。|Tem peixes na lagoa do parque.
島|日本にはたくさんの島があります。|O Japão tem muitas ilhas.
森|森の中は涼しいです。|Dentro da floresta é fresco.
林|家の裏に小さい林があります。|Tem um pequeno bosque atrás de casa.
木|公園に大きな木があります。|Tem uma árvore grande no parque.
花|ジャスに花をもらいました。|Ganhei flores do Jas.
草|庭の草を取ります。|Tiro o mato do jardim.
葉|秋は木の葉が赤くなります。|No outono as folhas das árvores ficam vermelhas.
石|川で白い石を拾いました。|Peguei uma pedra branca no rio.
砂|靴に砂が入りました。|Entrou areia no sapato.
土|花を植えるために土を買いました。|Comprei terra para plantar flores.
火|火を使うときは気をつけてください。|Tome cuidado ao usar fogo.
光|窓から光が入ります。|Entra luz pela janela.
景色|ここからの景色は最高です。|A vista daqui é maravilhosa.
空気|山の空気はおいしいです。|O ar da montanha é gostoso.
浜辺|浜辺を二人で歩きました。|Andamos nós dois pela beira-mar.
波|今日は波が高いです。|Hoje as ondas estão altas.
坂|家の前に長い坂があります。|Tem uma ladeira comprida na frente de casa.
田んぼ|田舎には田んぼが広がっています。|No interior se estendem os arrozais.
畑|祖父は畑で野菜を作っています。|Meu avô planta legumes na horta.
動物|動物が好きです。|Gosto de animais.
犬|毎朝、犬と散歩します。|Toda manhã passeio com o cachorro.
猫|猫が窓の近くで寝ています。|O gato está dormindo perto da janela.
鳥|朝、鳥の声で目が覚めます。|De manhã acordo com o canto dos pássaros.
うさぎ|うさぎがにんじんを食べています。|O coelho está comendo cenoura.
馬|牧場で馬に乗りました。|Andei a cavalo na fazenda.
牛|北海道には牛がたくさんいます。|Em Hokkaido tem muitas vacas.
豚|豚は頭がいい動物です。|O porco é um animal inteligente.
羊|羊を見に牧場へ行きました。|Fomos à fazenda ver as ovelhas.
猿|温泉に入る猿を見ました。|Vi macacos tomando banho na fonte termal.
熊|山で熊に気をつけてください。|Cuidado com ursos na montanha.
鹿|奈良には鹿がたくさんいます。|Em Nara tem muitos cervos.
狐|神社に狐の像があります。|Tem uma estátua de raposa no santuário.
ねずみ|台所でねずみを見ました。|Vi um rato na cozinha.
虫|夏の夜は虫の声が聞こえます。|Nas noites de verão dá para ouvir os insetos.
蚊|蚊に刺されました。|Fui picada por um mosquito.
ゴキブリ|ゴキブリが出て、びっくりしました。|Apareceu uma barata e levei um susto.
蝶|花に蝶がとまっています。|Tem uma borboleta pousada na flor.
蜂|蜂に気をつけてね。|Cuidado com as abelhas.
蛇|山道で蛇を見ました。|Vi uma cobra na trilha da montanha.
カエル|雨の日はカエルが鳴きます。|Em dia de chuva os sapos coaxam.
亀|池に亀がいます。|Tem uma tartaruga na lagoa.
金魚|お祭りで金魚をもらいました。|Ganhei um peixinho dourado no festival.
象|象は鼻が長いです。|O elefante tem a tromba comprida.
咲く|庭にきれいな花が咲きました。|Floresceu uma flor bonita no jardim.
散る|桜が散って、少し寂しいです。|As cerejeiras perderam as pétalas, fico um pouco triste.
育てる|ベランダでトマトを育てています。|Estou plantando tomates na varanda.
飼う|将来、犬を飼いたいです。|No futuro quero ter um cachorro.
趣味|私の趣味は料理です。|Meu hobby é cozinhar.
遊ぶ|週末は友達と遊びます。|No fim de semana saio com os amigos.
歌|この歌が大好きです。|Eu adoro esta música.
踊る|お祭りでみんなと踊りました。|Dancei com todo mundo no festival.
絵|子供が上手な絵を描きました。|A criança fez um desenho bonito.
絵を描く|休みの日に絵を描きます。|Nos dias de folga eu desenho.
漫画|漫画で日本語を勉強しています。|Estudo japonês com mangá.
雑誌|電車で雑誌を読みます。|Leio revista no trem.
小説|日本の小説を読んでみたいです。|Quero tentar ler um romance japonês.
新聞|父は毎朝、新聞を読みます。|Meu pai lê o jornal toda manhã.
野球|日本では野球が人気です。|No Japão o beisebol é popular.
水泳|水泳は体にいいです。|Natação faz bem para o corpo.
泳ぐ|海で泳ぐのが好きです。|Gosto de nadar no mar.
走る|毎朝、公園を走ります。|Corro no parque todas as manhãs.
運動|健康のために運動しています。|Faço exercício pela saúde.
試合|明日はサッカーの試合です。|Amanhã tem jogo de futebol.
勝つ|ブラジルが試合に勝ちました！|O Brasil ganhou o jogo!
負ける|一点差で負けました。|Perdemos por um ponto.
選手|あの選手はとても有名です。|Aquele jogador é muito famoso.
応援|試合でブラジルを応援しました。|Torci pelo Brasil no jogo.
料理教室|料理教室で和食を習います。|Aprendo culinária japonesa numa aula de culinária.
楽器|何か楽器ができますか。|Você toca algum instrumento?
弾く|ジャスはギターが弾けます。|O Jas sabe tocar violão.
ドライブ|週末に海までドライブしました。|No fim de semana fomos de carro até a praia.
ライブ|好きな歌手のライブに行きました。|Fui ao show do meu cantor favorito.
チケット|コンサートのチケットが取れました。|Consegui ingresso para o show.
番組|この番組はおもしろいです。|Este programa é divertido.
ニュース|毎朝ニュースを見ます。|Vejo o jornal toda manhã.
動画|料理の動画を見ながら作ります。|Cozinho vendo vídeo de receita.
出かける|雨なので、出かけたくないです。|Está chovendo, não quero sair.
サービス|このホテルはサービスがいいです。|Este hotel tem um bom atendimento.
スケジュール|来週のスケジュールを確認します。|Confiro a agenda da semana que vem.
タイプ|ジャスは私のタイプです。|O Jas é o meu tipo.
イメージ|日本のイメージが変わりました。|Minha imagem do Japão mudou.
ペース|自分のペースで勉強しましょう。|Vamos estudar no próprio ritmo.
ストレス解消|私のストレス解消は散歩です。|Meu jeito de aliviar o estresse é passear.
マイペース|私はマイペースな人です。|Sou uma pessoa que faz as coisas no seu ritmo.
チェック|もう一度、チェックしてください。|Cheque mais uma vez, por favor.
キャンセル|予約をキャンセルしました。|Cancelei a reserva.
トップ|彼はクラスでトップです。|Ele é o primeiro da turma.
セット|ハンバーガーのセットを注文しました。|Pedi o combo de hambúrguer.
オープン|駅前に新しいカフェがオープンしました。|Abriu um café novo em frente à estação.
フロア|このフロアは服の売り場です。|Este andar é a seção de roupas.
カウンター|カウンターの席でもいいですか。|Pode ser no balcão?
ロッカー|荷物をロッカーに入れます。|Coloco a bagagem no armário.
コインロッカー|駅のコインロッカーにスーツケースを預けました。|Deixei a mala no guarda-volumes da estação.
トランク|荷物を車のトランクに入れます。|Coloco a bagagem no porta-malas.
シートベルト|車に乗ったら、シートベルトをしてください。|Ao entrar no carro, coloque o cinto de segurança.
タイヤ|自転車のタイヤに空気を入れます。|Encho o pneu da bicicleta.
ハンドル|ハンドルをしっかり持ってください。|Segure firme o volante.
ナビ|ナビを見ながら運転します。|Dirijo olhando o GPS.
マンガ喫茶|終電がなくて、マンガ喫茶に泊まりました。|Perdi o último trem e dormi num café de mangá.
ネットカフェ|ネットカフェでパソコンを使いました。|Usei o computador na lan house.
気持ち|ジャスの気持ちがうれしいです。|Fico feliz com o carinho do Jas.
気分|今日は気分がいいです。|Hoje estou de bom humor.
心|心をこめて手紙を書きました。|Escrevi a carta de todo o coração.
愛|二人の愛は遠くても変わりません。|Nosso amor não muda, mesmo de longe.
恋|日本で恋をしました。|Me apaixonei no Japão.
夢|日本に住むのが私の夢でした。|Morar no Japão era o meu sonho.
悲しい|悲しい映画を見て、泣きました。|Vi um filme triste e chorei.
寂しい|ジャスに会えなくて、寂しいです。|Sinto saudade por não poder ver o Jas.
怖い|地震は怖いです。|Terremoto dá medo.
恥ずかしい|日本語を間違えて、恥ずかしかったです。|Errei o japonês e fiquei com vergonha.
懐かしい|この歌を聞くと、懐かしい気持ちになります。|Quando ouço esta música, fico nostálgica.
羨ましい|日本に住んでいる友達が羨ましいです。|Tenho inveja dos amigos que moram no Japão.
悔しい|試合に負けて、悔しいです。|Perdi o jogo e estou frustrada.
つまらない|この映画はつまらないです。|Este filme é chato.
面白い|日本語の勉強は面白いです。|Estudar japonês é interessante.
うるさい|隣の部屋がうるさいです。|O quarto ao lado está barulhento.
眠い|昨日遅く寝たので、眠いです。|Dormi tarde ontem, então estou com sono.
安心|ジャスの声を聞いて、安心しました。|Fiquei aliviada ao ouvir a voz do Jas.
不安|一人で日本に行くのは少し不安です。|Ir sozinha para o Japão me deixa um pouco insegura.
緊張|面接でとても緊張しました。|Fiquei muito nervosa na entrevista.
幸せ|あなたといると、幸せです。|Quando estou com você, sou feliz.
大好き|日本の食べ物が大好きです。|Eu adoro comida japonesa.
大嫌い|ゴキブリが大嫌いです。|Detesto baratas.
嫌|雨の日は嫌です。|Não gosto de dia de chuva.
平気|寒いのは平気です。|O frio não me incomoda.
退屈|雨の日は退屈です。|Dia de chuva é entediante.
びっくりする|地震があって、びっくりしました。|Teve um terremoto e levei um susto.
驚く|日本の電車が時間通りで驚きました。|Me surpreendi com os trens japoneses no horário.
笑う|ジャスはよく笑います。|O Jas ri bastante.
泣く|空港で別れるとき、泣いてしまいました。|Chorei na despedida no aeroporto.
怒る|母は怒るととても怖いです。|Minha mãe brava dá muito medo.
喜ぶ|プレゼントをあげたら、とても喜びました。|Quando dei o presente, ficou muito feliz.
困る|言葉が分からなくて、困りました。|Fiquei em apuros por não entender a língua.
悩む|どの服を買うか悩んでいます。|Estou em dúvida sobre qual roupa comprar.
感動|富士山を見て、感動しました。|Fiquei emocionada ao ver o Monte Fuji.
感謝|いつも感謝しています。|Sou sempre grata.
我慢|眠いけど、我慢して勉強します。|Estou com sono, mas vou aguentar e estudar.
会いたい|早く会いたいね。|Quero te ver logo, viu.
愛してる|ジャス、愛してるよ。|Jas, eu te amo.
希望|日本で働くのが希望です。|Meu desejo é trabalhar no Japão.
期待|新しい生活に期待しています。|Tenho expectativas pela vida nova.
不満|今の仕事に不満はありません。|Não tenho reclamações do trabalho atual.
満足|この部屋にとても満足しています。|Estou muito satisfeita com este apartamento.
後悔|日本に来たことを後悔していません。|Não me arrependo de ter vindo ao Japão.
反省|遅刻したことを反省しています。|Reconheço meu erro por ter chegado atrasada.
感想|映画の感想を教えてください。|Me conte o que achou do filme.
印象|日本の第一印象はどうですか。|Qual é a sua primeira impressão do Japão?
気になる|あのお店がずっと気になっています。|Faz tempo que aquela loja me chama a atenção.
気に入る|このかばん、とても気に入りました。|Gostei muito desta bolsa.
気が合う|ジャスの妹とは気が合います。|Me dou bem com a irmã do Jas.
気が楽|話したら、気が楽になりました。|Depois de conversar, fiquei mais tranquila.
気が重い|明日の試験のことを考えると、気が重いです。|Pensar na prova de amanhã me deixa desanimada.
気が短い|父は少し気が短いです。|Meu pai é um pouco impaciente.
腹が立つ|約束を忘れられて、腹が立ちました。|Fiquei irritada porque esqueceram o combinado.
頭にくる|あの人の言い方は頭にくる。|O jeito daquela pessoa falar me deixa furiosa.
落ち込む|試験に落ちて、落ち込んでいます。|Reprovei na prova e estou para baixo.
元気を出す|元気を出して！明日はいい日になるよ。|Anime-se! Amanhã vai ser um bom dia.
元気になる|ゆっくり休んで、元気になりました。|Descansei bem e melhorei.
涙が出る|うれしくて涙が出ました。|Fiquei tão feliz que chorei.
ため息|疲れて、ため息が出ます。|Estou cansada e solto um suspiro.
長い|日本までの飛行機は長いです。|O voo até o Japão é longo.
短い|休みはいつも短く感じます。|As férias sempre parecem curtas.
広い|新しい部屋は前より広いです。|O quarto novo é mais espaçoso que o anterior.
狭い|この道は狭いです。|Esta rua é estreita.
重い|このかばんは重いです。|Esta bolsa é pesada.
軽い|このパソコンはとても軽いです。|Este computador é muito leve.
低い|この机は少し低いです。|Esta mesa é um pouco baixa.
太い|この木はとても太いです。|Esta árvore é muito grossa.
細い|うどんよりそばのほうが細いです。|O soba é mais fino que o udon.
厚い|冬は厚いコートを着ます。|No inverno uso casaco grosso.
薄い|このスープは味が薄いです。|Esta sopa está sem sal.
濃い|コーヒーは濃いのが好きです。|Gosto de café forte.
深い|この川は深いので、気をつけて。|Este rio é fundo, tome cuidado.
浅い|子供は浅いプールで遊びます。|As crianças brincam na piscina rasa.
丸い|今夜は月が丸いです。|Hoje a lua está redonda.
四角い|四角いお弁当箱を買いました。|Comprei uma marmita quadrada.
早い|今日は早く起きました。|Hoje acordei cedo.
速い|新幹線はとても速いです。|O trem-bala é muito rápido.
遅い|もう遅いから、寝ましょう。|Já está tarde, vamos dormir.
易しい|このテストは易しかったです。|Esta prova foi fácil.
簡単|この料理は簡単に作れます。|Este prato é fácil de fazer.
忙しい|今週は仕事が忙しいです。|Esta semana o trabalho está corrido.
暇|暇なときは何をしますか。|O que você faz quando está livre?
楽|電車で行くほうが楽です。|Ir de trem é mais cômodo.
大変|一人で引っ越しするのは大変です。|Mudar sozinha é trabalhoso.
強い|台風の風はとても強いです。|O vento do tufão é muito forte.
弱い|私はお酒に弱いです。|Eu fico bêbada fácil.
黄色い|秋になると、葉が黄色くなります。|No outono as folhas ficam amarelas.
茶色い|茶色いかばんを持っています。|Tenho uma bolsa marrom.
緑|日本の山は緑がきれいです。|O verde das montanhas japonesas é bonito.
色|何色が好きですか。|De que cor você gosta?
紫|紫の花が咲いています。|Tem flores roxas abertas.
灰色|空が灰色で、雨が降りそうです。|O céu está cinza, parece que vai chover.
金色|金色のお寺を見に行きました。|Fui ver o templo dourado.
銀色|銀色の指輪がほしいです。|Quero um anel prateado.
汚い|部屋が汚いので、掃除します。|O quarto está sujo, então vou limpar.
臭い|この部屋はちょっと臭いです。|Este quarto está meio fedido.
危ない|危ない！車が来ているよ！|Cuidado! Vem vindo um carro!
危険|ここで泳ぐのは危険です。|É perigoso nadar aqui.
安全|日本は安全な国です。|O Japão é um país seguro.
にぎやか|お祭りはとてもにぎやかでした。|O festival estava muito animado.
便利|コンビニは二十四時間開いていて便利です。|A loja de conveniência fica aberta 24 horas, é prática.
不便|駅から遠くて不便です。|É longe da estação, é inconveniente.
有名|京都はお寺で有名です。|Kyoto é famosa pelos templos.
得意|料理が得意です。|Sou boa em cozinhar.
苦手|朝早く起きるのが苦手です。|Não sou boa em acordar cedo.
丈夫|このかばんは丈夫です。|Esta bolsa é resistente.
大切|家族は一番大切です。|A família é o mais importante.
大事|大事な書類なので、なくさないでね。|São documentos importantes, não perca, viu.
重要|これは重要なお知らせです。|Este é um aviso importante.
特別|今日は特別な日です。|Hoje é um dia especial.
普通|普通の電車で行きます。|Vou no trem comum.
同じ|私たちは同じ色の服を着ています。|Estamos usando roupas da mesma cor.
違う|日本とブラジルは文化が違います。|Japão e Brasil têm culturas diferentes.
色々|日本で色々な経験をしました。|Tive várias experiências no Japão.
様々|この店には様々な国の料理があります。|Este restaurante tem comidas de vários países.
自由|休みの日は自由に過ごします。|Nos dias de folga faço o que quero.
無理|今日中に終わらせるのは無理です。|É impossível terminar ainda hoje.
確か|確か、会議は三時からです。|Se não me engano, a reunião é às três.
正しい|正しい答えを選んでください。|Escolha a resposta certa, por favor.
詳しい|ジャスはパソコンに詳しいです。|O Jas entende bem de computador.
珍しい|東京で雪が降るのは珍しいです。|É raro nevar em Tóquio.
素晴らしい|素晴らしい景色ですね。|Que paisagem maravilhosa.
素敵|素敵なワンピースですね。|Que vestido lindo.
立派|立派なお城を見ました。|Vi um castelo esplêndido.
完璧|今日の発音は完璧でした。|A pronúncia de hoje foi perfeita.
変|この機械、ちょっと変な音がします。|Esta máquina está fazendo um barulho estranho.
不思議|不思議な夢を見ました。|Tive um sonho estranho.
複雑|この書類は複雑です。|Este documento é complicado.
単純|これは単純なミスです。|Isto é um erro simples.
適当|適当な大きさの箱を探しています。|Estou procurando uma caixa de tamanho adequado.
真剣|ジャスは真剣な顔で話しました。|O Jas falou com uma cara séria.
一生懸命|毎日一生懸命、日本語を勉強しています。|Estudo japonês com todo o esforço todos os dias.
熱心|妹は熱心に勉強しています。|Minha irmã estuda com dedicação.
上品|あの人は話し方が上品です。|Aquela pessoa fala de forma refinada.
清潔|日本のトイレは清潔です。|Os banheiros no Japão são limpos.
快適|新しい部屋はとても快適です。|O quarto novo é muito confortável.
健康的|健康的な食事を心がけています。|Procuro ter uma alimentação saudável.
有名人|駅で有名人を見ました。|Vi uma celebridade na estação.
ひどい|今日はひどい雨ですね。|Hoje está uma chuva horrível, né.
すごく|今日はすごく暑いです。|Hoje está muito quente.
偉い|毎日勉強していて、偉いね。|Que admirável que você estuda todo dia.
うまい|このラーメン、うまい！|Este lámen está gostoso!
可愛らしい|可愛らしいお店を見つけました。|Encontrei uma lojinha graciosa.
ありがたい|手伝ってくれて、ありがたいです。|Fico grata pela ajuda.
もったいない|まだ食べられるのに、捨てるのはもったいない。|Jogar fora algo que ainda dá para comer é desperdício.
しつこい|しつこい電話に困っています。|Estou incomodada com ligações insistentes.
細かい|細かいことは気にしないで。|Não se preocupe com detalhes.
緩い|このズボンは少し緩いです。|Esta calça está um pouco folgada.
きつい|この靴はちょっときついです。|Este sapato está um pouco apertado.
まぶしい|太陽がまぶしいです。|O sol está ofuscante.
ぬるい|お茶がぬるくなりました。|O chá ficou morno.
騒がしい|教室が騒がしいです。|A sala de aula está barulhenta.
親しい|親しい友達に結婚のことを話しました。|Contei do casamento para uma amiga próxima.
仲がいい|私たちはとても仲がいいです。|Nós nos damos muito bem.
怪しい|怪しいメールは開かないでください。|Não abra e-mails suspeitos.
惜しい|惜しい！もう少しで正解だったね。|Quase! Faltou pouco para acertar.
激しい|昨日は激しい雨が降りました。|Ontem choveu forte.
正確|日本の電車は時間が正確です。|Os trens japoneses são pontuais.
かわいそう|雨の中の子猫がかわいそうです。|Dá pena do gatinho na chuva.
おかしい|この時計、ちょっとおかしいです。|Este relógio está meio estranho.
気持ちいい|温泉は気持ちいいです。|A fonte termal é gostosa.
心地いい|春の風は心地いいです。|O vento da primavera é agradável.
居心地がいい|このカフェは居心地がいいです。|Este café é aconchegante.
不安定|最近、天気が不安定です。|Ultimamente o tempo está instável.
面倒|手続きは少し面倒です。|O trâmite é um pouco trabalhoso.
面倒くさい|料理するのが面倒くさい日もあります。|Tem dias em que dá preguiça de cozinhar.
楽しそう|子供たちが楽しそうに遊んでいます。|As crianças estão brincando com cara de diversão.
おいしそう|このケーキ、おいしそう！|Este bolo parece gostoso!
元気そう|元気そうでよかった。|Que bom que você parece bem.
嬉しそう|ジャスは嬉しそうに笑いました。|O Jas sorriu parecendo feliz.
若々しい|祖母はいつも若々しいです。|Minha avó está sempre jovial.
ずるい|自分だけ食べるのはずるいよ。|Comer sozinho não vale.
ちょうどいい|このお湯はちょうどいい温度です。|Esta água está na temperatura certa.
すばやい|猫はすばやく逃げました。|O gato fugiu rapidinho.
のろい|このパソコンは動きがのろいです。|Este computador está lento.
真っ白|雪で町が真っ白になりました。|A cidade ficou branquinha de neve.
真っ黒|日に焼けて、真っ黒になりました。|Peguei sol e fiquei bem morena.
真っ赤|恥ずかしくて、顔が真っ赤になりました。|Fiquei com vergonha e o rosto ficou vermelhíssimo.
真っ青|海が真っ青できれいです。|O mar está azul intenso e lindo.
真っ暗|停電で部屋が真っ暗になりました。|Com a queda de energia, o quarto ficou escuríssimo.
なる|来年、二十八歳になります。|Ano que vem vou fazer 28 anos.
帰る|仕事が終わったら、まっすぐ家に帰ります。|Quando acabar o trabalho, volto direto para casa.
戻る|すぐ戻るので、ここで待っていてね。|Já volto, me espere aqui.
出る|毎朝八時に家を出ます。|Saio de casa às oito toda manhã.
出す|郵便局で手紙を出しました。|Mandei a carta no correio.
入れる|コーヒーに牛乳を入れます。|Coloco leite no café.
思う|日本語はおもしろいと思います。|Acho que japonês é interessante.
考える|将来のことを考えています。|Estou pensando no futuro.
知る|そのニュースを今日知りました。|Fiquei sabendo dessa notícia hoje.
知っている|この店を知っていますか。|Você conhece esta loja?
できる|少し日本語ができます。|Sei um pouco de japonês.
持つ|重い荷物を持ちましょうか。|Quer que eu carregue a bagagem pesada?
持ってくる|明日、写真を持ってきます。|Amanhã trago as fotos.
連れていく|犬を公園に連れていきます。|Levo o cachorro ao parque.
連れてくる|今度、友達を連れてきてもいい？|Da próxima vez posso trazer uma amiga?
置く|鍵はテーブルの上に置いてね。|Deixe a chave em cima da mesa.
取る|塩を取ってください。|Me passa o sal, por favor.
開く|ドアが開きました。|A porta abriu.
消す|寝る前に電気を消します。|Apago a luz antes de dormir.
始める|四月から新しい仕事を始めます。|Em abril começo um trabalho novo.
終える|宿題を終えてから、テレビを見ます。|Vejo TV depois de terminar a lição.
続ける|毎日日本語の勉強を続けています。|Continuo estudando japonês todo dia.
続く|雨の日が続いています。|Os dias de chuva continuam.
やめる|甘いものを食べるのをやめました。|Parei de comer doces.
決まる|結婚式の日が決まりました。|A data do casamento foi decidida.
変える|髪型を変えました。|Mudei o penteado.
変わる|日本に来て、生活が変わりました。|Vindo ao Japão, minha vida mudou.
選ぶ|ジャスにプレゼントを選びました。|Escolhi um presente para o Jas.
探す|新しいアパートを探しています。|Estou procurando um apartamento novo.
見つける|やっと鍵を見つけました。|Finalmente achei a chave.
なくなる|牛乳がなくなりました。|O leite acabou.
落とす|財布を落としてしまいました。|Deixei a carteira cair.
落ちる|木から葉が落ちます。|As folhas caem das árvores.
拾う|道でお金を拾って、交番に届けました。|Achei dinheiro na rua e levei ao posto policial.
壊す|子供がおもちゃを壊しました。|A criança quebrou o brinquedo.
壊れる|洗濯機が壊れました。|A máquina de lavar quebrou.
直す|ジャスが自転車を直してくれました。|O Jas consertou a bicicleta para mim.
割れる|コップが割れました。|O copo quebrou.
汚れる|雨で靴が汚れました。|O sapato sujou por causa da chuva.
汚す|服を汚さないように、エプロンをします。|Uso avental para não sujar a roupa.
動く|このエレベーターは動いていません。|Este elevador não está funcionando.
動かす|机を少し動かしてください。|Mova a mesa um pouco, por favor.
押す|このボタンを押してください。|Aperte este botão, por favor.
引く|ドアを引いて開けます。|Abro a porta puxando.
回す|この鍵は右に回します。|Esta chave gira para a direita.
回る|地球は太陽の周りを回っています。|A Terra gira em volta do Sol.
押さえる|紙が飛ばないように押さえてください。|Segure o papel para não voar, por favor.
上げる|分かる人は手を上げてください。|Quem souber, levante a mão.
下げる|エアコンの温度を下げます。|Abaixo a temperatura do ar-condicionado.
上がる|気温が上がりました。|A temperatura subiu.
下がる|熱が下がりました。|A febre baixou.
登る|富士山に登りたいです。|Quero subir o Monte Fuji.
立つ|電車ではずっと立っていました。|Fiquei de pé o tempo todo no trem.
座る|どうぞ、座ってください。|Sente-se, por favor.
歩く|駅まで歩いて行きます。|Vou a pé até a estação.
急ぐ|遅れそうなので、急ぎます。|Parece que vou me atrasar, então vou me apressar.
逃げる|地震のときは、外に逃げないで。|No terremoto, não fuja para fora.
転ぶ|雪の道で転びました。|Levei um tombo na rua com neve.
ぶつかる|自転車が人にぶつかりました。|A bicicleta bateu numa pessoa.
触る|作品に触らないでください。|Não toque nas obras, por favor.
投げる|犬にボールを投げます。|Jogo a bola para o cachorro.
打つ|スマホでメッセージを打ちます。|Digito a mensagem no celular.
蹴る|ボールを強く蹴りました。|Chutei a bola com força.
握る|子供の手を握って、道を渡ります。|Atravesso a rua segurando a mão da criança.
抱く|赤ちゃんを抱いて歩きます。|Ando com o bebê no colo.
抱きしめる|空港でジャスを抱きしめました。|Abracei o Jas no aeroporto.
貼る|封筒に切手を貼ります。|Colo o selo no envelope.
包む|プレゼントをきれいな紙で包みます。|Embrulho o presente num papel bonito.
結ぶ|靴のひもを結びます。|Amarro o cadarço.
掛ける|壁に時計を掛けました。|Pendurei o relógio na parede.
足りる|お金が足りません。|O dinheiro não é suficiente.
余る|料理が余ったので、明日食べます。|Sobrou comida, então como amanhã.
残る|仕事が少し残っています。|Ainda resta um pouco de trabalho.
残す|ご飯を残さないで食べましょう。|Vamos comer sem deixar arroz.
増える|最近、体重が増えました。|Ultimamente meu peso aumentou.
減る|日本の人口は減っています。|A população do Japão está diminuindo.
増やす|日本語の単語を増やしたいです。|Quero aumentar meu vocabulário de japonês.
減らす|甘いものを減らしています。|Estou diminuindo os doces.
比べる|二つの値段を比べます。|Comparo os dois preços.
数える|お金を数えます。|Conto o dinheiro.
測る|熱を測ってください。|Meça a febre, por favor.
調べる|電車の時間を調べます。|Confiro o horário do trem.
試す|新しい料理を試してみました。|Experimentei uma receita nova.
集める|かわいい切手を集めています。|Coleciono selos bonitos.
集まる|駅の前に人が集まっています。|Tem gente reunida em frente à estação.
分ける|ケーキを二人で分けました。|Dividimos o bolo entre nós dois.
並べる|お皿をテーブルに並べます。|Arrumo os pratos na mesa.
重ねる|お皿を重ねて片付けます。|Empilho os pratos e guardo.
運ぶ|荷物を部屋に運びます。|Levo a bagagem para o quarto.
届ける|落とし物を交番に届けました。|Levei o objeto perdido ao posto policial.
配る|駅でチラシを配っています。|Estão distribuindo panfletos na estação.
見送る|空港で家族に見送ってもらいました。|Minha família me acompanhou até o aeroporto.
訪ねる|週末に祖母の家を訪ねます。|No fim de semana visito a casa da minha avó.
招待する|友達を家に招待しました。|Convidei amigos para casa.
誘う|ジャスを映画に誘いました。|Convidei o Jas para o cinema.
約束|友達と会う約束をしました。|Combinei de encontrar uma amiga.
断る|忙しいので、誘いを断りました。|Estava ocupada, então recusei o convite.
許す|遅れたことを許してください。|Me perdoe pelo atraso.
謝る|間違えたら、すぐに謝ります。|Quando erro, peço desculpas logo.
褒める|先生に日本語を褒められました。|A professora elogiou meu japonês.
叱る|母に叱られました。|Levei bronca da minha mãe.
信じる|あなたを信じています。|Eu confio em você.
疑う|自分の目を疑いました。|Não acreditei no que vi.
守る|ルールを守りましょう。|Vamos seguir as regras.
助ける|困っている人を助けました。|Ajudei uma pessoa em apuros.
生きる|祖父は九十歳まで生きました。|Meu avô viveu até os noventa anos.
死ぬ|飼っていた金魚が死んでしまいました。|O peixinho que eu tinha morreu.
育つ|私はサンパウロで育ちました。|Eu cresci em São Paulo.
暮らす|二人で日本で暮らします。|Vamos viver nós dois no Japão.
諦める|夢を諦めないで。|Não desista do seu sonho.
間違える|電車を間違えて乗りました。|Peguei o trem errado.
間違う|この答えは間違っています。|Esta resposta está errada.
気がつく|財布がないことに気がつきました。|Percebi que estava sem a carteira.
気にする|小さいことは気にしないで。|Não se importe com coisas pequenas.
決心する|日本に住むことを決心しました。|Decidi morar no Japão.
用意する|旅行の荷物を用意します。|Preparo a bagagem da viagem.
利用する|図書館をよく利用します。|Uso bastante a biblioteca.
紹介する|両親にジャスを紹介しました。|Apresentei o Jas aos meus pais.
参加する|日本語のイベントに参加しました。|Participei de um evento de japonês.
出席する|友達の結婚式に出席します。|Vou comparecer ao casamento de uma amiga.
欠席する|熱があって、授業を欠席しました。|Estava com febre e faltei à aula.
着く|東京駅に着いたら、電話してね。|Quando chegar na estação de Tóquio, me ligue.
向かう|今、駅に向かっています。|Estou indo para a estação agora.
通う|週に二回、ジムに通っています。|Vou à academia duas vezes por semana.
過ごす|週末は家族と過ごします。|Passo o fim de semana com a família.
泊まる|京都の旅館に泊まりました。|Nos hospedamos numa pousada em Kyoto.
待たせる|待たせて、ごめんね。|Desculpa por te fazer esperar.
話し合う|二人で将来について話し合いました。|Conversamos nós dois sobre o futuro.
しゃべる|友達と夜遅くまでしゃべりました。|Conversei com a amiga até tarde da noite.
伝える|田中さんによろしく伝えてください。|Mande lembranças ao Sr. Tanaka.
叫ぶ|「助けて！」と叫びました。|Gritei “socorro!”.
黙る|先生が来たら、みんな黙りました。|Quando a professora chegou, todos ficaram calados.
頷く|ジャスは笑って頷きました。|O Jas sorriu e acenou com a cabeça.
眺める|窓から海を眺めます。|Contemplo o mar pela janela.
覗く|店の中を覗いてみました。|Dei uma espiada dentro da loja.
気づく|髪を切ったことに気づいてくれた？|Você percebeu que cortei o cabelo?
感じる|日本の冬は寒く感じます。|Sinto o inverno japonês frio.
味がする|このお茶は花の味がします。|Este chá tem gosto de flor.
音がする|外で変な音がします。|Tem um barulho estranho lá fora.
においがする|台所からいいにおいがします。|Vem um cheiro bom da cozinha.
寝かせる|赤ちゃんを寝かせます。|Ponho o bebê para dormir.
起こす|明日の朝、六時に起こしてください。|Me acorde às seis amanhã, por favor.
起こる|昨日、駅で事故が起こりました。|Ontem aconteceu um acidente na estação.
過ぎる|約束の時間を過ぎました。|Passou do horário combinado.
込む|朝の電車はとても込みます。|O trem da manhã fica muito lotado.
空く|お腹が空きました。|Fiquei com fome.
片付く|部屋がやっと片付きました。|O quarto finalmente ficou arrumado.
沸く|お湯が沸きました。|A água ferveu.
沸かす|お風呂を沸かします。|Esquento a água do banho.
焦げる|パンが焦げてしまいました。|O pão queimou.
腐る|牛乳が腐っています。|O leite estragou.
溶ける|アイスが溶けました。|O sorvete derreteu.
凍る|冬は道が凍ります。|No inverno a rua congela.
冷める|ご飯が冷めないうちに食べよう。|Vamos comer antes que esfrie.
温まる|お風呂に入って、体が温まりました。|Tomei banho e o corpo esquentou.
光る|夜、星が光っています。|À noite as estrelas brilham.
鳴る|電話が鳴っています。|O telefone está tocando.
鳴く|朝、鳥が鳴いています。|De manhã os pássaros cantam.
飛ぶ|鳥が空を飛んでいます。|Os pássaros estão voando no céu.
浮かぶ|いいアイデアが浮かびました。|Me veio uma boa ideia.
沈む|夕日が海に沈みます。|O sol se põe no mar.
流れる|この町には大きな川が流れています。|Um grande rio corre por esta cidade.
流す|トイレの水を流します。|Dou descarga.
揺れる|地震で家が揺れました。|A casa tremeu com o terremoto.
燃える|紙はよく燃えます。|Papel queima fácil.
燃やす|日本では庭でゴミを燃やしてはいけません。|No Japão não pode queimar lixo no quintal.
建てる|将来、家を建てたいです。|No futuro quero construir uma casa.
支払う|代金はカードで支払います。|Pago o valor no cartão.
稼ぐ|バイトでお金を稼ぎます。|Ganho dinheiro com bico.
もうかる|この店はもうかっているそうです。|Dizem que esta loja está dando lucro.
節約する|食費を節約しています。|Estou economizando na comida.
無駄にする|時間を無駄にしないようにします。|Procuro não desperdiçar tempo.
足す|スープに水を足します。|Acrescento água à sopa.
引き受ける|新しい仕事を引き受けました。|Aceitei um trabalho novo.
受ける|来月、日本語の試験を受けます。|Mês que vem vou fazer a prova de japonês.
受かる|大学に受かりました！|Passei na faculdade!
落ち着く|お茶を飲むと、落ち着きます。|Tomando chá eu me acalmo.
楽しみにする|週末のデートを楽しみにしています。|Estou ansiosa pelo encontro do fim de semana.
願う|みんなの幸せを願っています。|Desejo a felicidade de todos.
祈る|神社で家族の健康を祈りました。|Rezei pela saúde da família no santuário.
憧れる|日本の生活に憧れていました。|Eu sonhava com a vida no Japão.
付き合う|ジャスと付き合って三年になります。|Faz três anos que namoro o Jas.
別れる|駅で友達と別れました。|Me despedi da amiga na estação.
離れる|家族と離れて暮らすのは寂しいです。|Viver longe da família é triste.
近づく|日本に行く日が近づいています。|O dia de ir ao Japão está chegando.
寄る|帰りにスーパーに寄ります。|Na volta passo no supermercado.
立ち寄る|カフェに立ち寄って、休みました。|Dei uma passada num café e descansei.
戻す|使ったら、元の場所に戻してね。|Depois de usar, coloque de volta no lugar.
隠す|プレゼントを押し入れに隠しました。|Escondi o presente no armário.
隠れる|猫がベッドの下に隠れています。|O gato está escondido embaixo da cama.
現れる|空に虹が現れました。|Apareceu um arco-íris no céu.
表す|気持ちを言葉で表すのは難しいです。|É difícil expressar sentimentos em palavras.
示す|地図で場所を示してください。|Mostre o lugar no mapa, por favor.
写す|友達のノートを写しました。|Copiei o caderno da amiga.
映る|湖に山が映っています。|A montanha está refletida no lago.
撮る|一緒に写真を撮りましょう。|Vamos tirar uma foto juntos.
録画する|ドラマを録画しました。|Gravei a novela.
貯まる|ポイントがたくさん貯まりました。|Juntei muitos pontos.
磨く|靴を磨きます。|Engraxo os sapatos.
剃る|ジャスは毎朝ひげを剃ります。|O Jas faz a barba toda manhã.
塗る|壁を白く塗りました。|Pintei a parede de branco.
外れる|ボタンが外れました。|O botão se soltou.
当たる|くじで旅行が当たりました！|Ganhei uma viagem no sorteio!
当てる|答えを当ててみて。|Tente adivinhar a resposta.
慌てる|慌てないで、ゆっくりでいいよ。|Não se afobe, pode ser devagar.
焦る|時間がなくて、焦りました。|Não tinha tempo e fiquei aflita.
ほっとする|試験が終わって、ほっとしました。|A prova acabou e fiquei aliviada.
がっかりする|店が休みで、がっかりしました。|A loja estava fechada e fiquei decepcionada.
どきどきする|初めて会うとき、どきどきしました。|Quando nos encontramos pela primeira vez, meu coração disparou.
わくわくする|新しい生活にわくわくしています。|Estou empolgada com a vida nova.
いらいらする|電車が遅れて、いらいらしました。|O trem atrasou e fiquei irritada.
にこにこする|赤ちゃんがにこにこしています。|O bebê está sorrindo.
ぼーっとする|疲れて、ぼーっとしています。|Estou cansada e meio avoada.
すっきりする|部屋を片付けて、すっきりしました。|Arrumei o quarto e me senti renovada.
のんびりする|日曜日は家でのんびりします。|No domingo relaxo em casa.
運動不足|最近、運動不足です。|Ultimamente estou sem fazer exercício.
見学する|工場を見学しました。|Visitei uma fábrica.
見物する|お祭りを見物しました。|Fomos ver o festival.
外食する|週末は外食します。|No fim de semana comemos fora.
自炊する|お金を節約するために自炊しています。|Cozinho em casa para economizar.
留守番する|子供が一人で留守番しています。|A criança está tomando conta da casa sozinha.
留守|今日は一日中留守にします。|Hoje vou ficar fora o dia todo.
世話をする|妹が犬の世話をしています。|Minha irmã cuida do cachorro.
看病する|風邪のとき、ジャスが看病してくれました。|Quando fiquei resfriada, o Jas cuidou de mim.
介護|祖母の介護を手伝っています。|Ajudo a cuidar da minha avó.
子育て|子育ては大変ですが、楽しいです。|Criar filhos é trabalhoso, mas divertido.
出産|姉は来月、出産します。|Minha irmã vai dar à luz mês que vem.
連絡を取る|ブラジルの友達と連絡を取っています。|Mantenho contato com os amigos do Brasil.
開店|このお店は十時に開店します。|Esta loja abre às dez.
閉店|閉店の時間は九時です。|A loja fecha às nove.
営業する|この店は年中無休で営業しています。|Esta loja funciona o ano todo sem folga.
譲る|お年寄りに席を譲りました。|Cedi o lugar para um idoso.
降ろす|駅の前で降ろしてください。|Me deixe em frente à estação, por favor.
振り込む|家賃を銀行で振り込みました。|Transferi o aluguel no banco.
払い込む|コンビニで料金を払い込みます。|Pago a taxa na loja de conveniência.
済ませる|朝ご飯を済ませてから出かけます。|Saio depois de terminar o café da manhã.
済む|手続きはすぐに済みました。|O trâmite terminou rapidinho.
起き上がる|ベッドから起き上がりました。|Levantei da cama.
立ち上がる|名前を呼ばれて、立ち上がりました。|Chamaram meu nome e me levantei.
飛び出す|猫が急に飛び出しました。|O gato saiu correndo de repente.
走り出す|信号が青になって、車が走り出しました。|O sinal abriu e o carro começou a andar.
泣き出す|赤ちゃんが急に泣き出しました。|O bebê começou a chorar de repente.
思い出す|この写真を見ると、旅行を思い出します。|Vendo esta foto, me lembro da viagem.
言い出す|ジャスが急に旅行に行こうと言い出しました。|O Jas de repente propôs uma viagem.
取り出す|かばんから財布を取り出しました。|Tirei a carteira da bolsa.
見つめる|ジャスは私の目を見つめました。|O Jas olhou nos meus olhos.
見直す|テストの答えを見直します。|Reviso as respostas da prova.
書き直す|間違えたので、書き直しました。|Errei, então reescrevi.
やり直す|最初からやり直します。|Vou refazer do começo.
言い直す|もう一度、ゆっくり言い直してください。|Diga de novo, devagar, por favor.
聞き取る|早い日本語は聞き取れません。|Não consigo entender japonês rápido.
聞き返す|分からなかったので、聞き返しました。|Não entendi, então perguntei de novo.
話しかける|隣の人に日本語で話しかけました。|Puxei conversa em japonês com a pessoa ao lado.
呼びかける|駅で募金を呼びかけています。|Estão pedindo doações na estação.
出会う|ジャスとはネットで出会いました。|Conheci o Jas pela internet.
待ち合わせる|駅の前で七時に待ち合わせました。|Marcamos às sete em frente à estação.
待ち合わせ|待ち合わせの場所はどこにする？|Onde vamos nos encontrar?
乗り遅れる|バスに乗り遅れました。|Perdi o ônibus.
乗り過ごす|寝てしまって、駅を乗り過ごしました。|Peguei no sono e passei da estação.
寝過ごす|寝過ごして、遅刻しました。|Dormi demais e me atrasei.
食べ過ぎる|お正月に食べ過ぎました。|Comi demais no Ano-Novo.
飲み過ぎる|昨日、お酒を飲み過ぎました。|Bebi demais ontem.
取り替える|電池を取り替えました。|Troquei a pilha.
入れ替える|部屋の空気を入れ替えます。|Troco o ar do quarto.
付け加える|最後に一つ付け加えます。|Por fim, acrescento uma coisa.
加える|砂糖を少し加えます。|Acrescento um pouco de açúcar.
含む|値段には税金が含まれています。|O preço inclui imposto.
除く|日曜日を除いて、毎日営業しています。|Funciona todos os dias, exceto domingo.
確かめる|出かける前に、鍵を確かめます。|Antes de sair, confiro a chave.
認める|自分の間違いを認めました。|Admiti o meu erro.
勧める|店員さんにこのお茶を勧められました。|O atendente me recomendou este chá.
求める|この仕事は経験を求めています。|Este trabalho pede experiência.
与える|植物に水を与えます。|Dou água para as plantas.
得る|日本で多くの経験を得ました。|Ganhei muita experiência no Japão.
失う|自信を失わないで。|Não perca a confiança.
防ぐ|風邪を防ぐために、手を洗います。|Lavo as mãos para prevenir resfriado.
避ける|混んでいる時間を避けて出かけます。|Saio evitando o horário de pico.
離す|子供の手を離さないでください。|Não solte a mão da criança, por favor.
引っ張る|犬がひもを引っ張ります。|O cachorro puxa a coleira.
支える|家族がいつも支えてくれます。|Minha família sempre me apoia.
頼る|困ったときは、私に頼ってね。|Quando estiver em apuros, conte comigo.
従う|地図に従って歩きました。|Andei seguindo o mapa.
迷惑をかける|近所の人に迷惑をかけないようにします。|Procuro não incomodar os vizinhos.
迷惑|電車の中で大きな声で話すのは迷惑です。|Falar alto no trem incomoda os outros.
邪魔|邪魔にならないように、端に寄ります。|Vou para o canto para não atrapalhar.
怒られる|遅刻して、上司に怒られました。|Cheguei atrasada e levei bronca do chefe.
褒められる|料理が上手だと褒められました。|Me elogiaram por cozinhar bem.
頼まれる|母に買い物を頼まれました。|Minha mãe me pediu para fazer compras.
誘われる|同僚に飲み会に誘われました。|Fui convidada pelos colegas para um happy hour.
言われる|日本語が上手だと言われました。|Me disseram que meu japonês é bom.
生まれ育つ|私はブラジルで生まれ育ちました。|Nasci e cresci no Brasil.
成長する|子供はすぐに成長します。|As crianças crescem rápido.
上達する|毎日練習して、日本語が上達しました。|Pratiquei todo dia e meu japonês melhorou.
発表する|クラスの前で発表しました。|Fiz uma apresentação para a turma.
表現する|日本語で気持ちを表現したいです。|Quero expressar meus sentimentos em japonês.
想像する|日本での生活を想像しています。|Fico imaginando a vida no Japão.
理解する|先生の説明を理解しました。|Entendi a explicação da professora.
賛成する|その意見に賛成します。|Concordo com essa opinião.
反対する|両親は最初、反対しました。|Meus pais foram contra no começo.
比較する|二つの国の文化を比較します。|Comparo a cultura dos dois países.
計算する|毎月の生活費を計算します。|Calculo o custo de vida de cada mês.
記録する|毎日の勉強を記録しています。|Registro o estudo de cada dia.
保存する|写真をパソコンに保存しました。|Salvei as fotos no computador.
削除する|古いメールを削除しました。|Apaguei e-mails antigos.
変更する|予約の時間を変更しました。|Mudei o horário da reserva.
中止する|雨で試合が中止になりました。|O jogo foi cancelado por causa da chuva.
延期する|旅行を来月に延期しました。|Adiei a viagem para o mês que vem.
すべる|雪の道はすべりやすいです。|A rua com neve é escorregadia.
こぼす|コーヒーをこぼしてしまいました。|Derramei o café.
こぼれる|コップから水がこぼれました。|A água transbordou do copo.
こする|目をこすらないでください。|Não esfregue os olhos.
しぼる|レモンをしぼります。|Espremo o limão.
ほどく|靴のひもをほどきます。|Desamarro o cadarço.
はがす|シールをはがしました。|Tirei o adesivo.
むく|りんごの皮をむきます。|Descasco a maçã.
刻む|ねぎを細かく刻みます。|Pico a cebolinha bem miúda.
注ぐ|お茶をカップに注ぎます。|Sirvo o chá na xícara.
盛る|ご飯をお皿に盛ります。|Sirvo o arroz no prato.
詰める|お弁当にご飯を詰めます。|Coloco arroz na marmita.
詰まる|トイレが詰まりました。|O vaso entupiu.
漏れる|水が漏れています。|Está vazando água.
冷える|夜は冷えるので、上着を持っていって。|À noite esfria, leve um casaco.
効く|この薬はよく効きます。|Este remédio faz efeito.
寝つく|疲れて、すぐに寝つきました。|Estava cansada e peguei no sono logo.
眠る|赤ちゃんがぐっすり眠っています。|O bebê está dormindo profundamente.
夢を見る|日本にいる夢を見ました。|Sonhei que estava no Japão.
暮らし|日本の暮らしに慣れてきました。|Estou me acostumando com a vida no Japão.
住まい|新しい住まいは駅に近いです。|A nova moradia fica perto da estação.
荷造り|引っ越しの荷造りをしています。|Estou empacotando as coisas para a mudança.
まとめる|ゴミをまとめて出します。|Junto o lixo e coloco para fora.
預ける|ホテルに荷物を預けました。|Deixei a bagagem guardada no hotel.
預かる|荷物をお預かりします。|Vou guardar sua bagagem.
受け付ける|申し込みは五時まで受け付けています。|As inscrições são aceitas até as cinco.
問い合わせる|お店に電話で問い合わせました。|Liguei para a loja para perguntar.
問い合わせ|問い合わせはこちらの番号へどうぞ。|Para dúvidas, ligue para este número.
申し訳ない|何度も聞いて、申し訳ないです。|Sinto muito por perguntar tantas vezes.
ご馳走|今日は私がご馳走します。|Hoje eu pago a refeição.
本当に|本当にありがとう。|Muito obrigada mesmo.
かなり|今日はかなり寒いです。|Hoje está bastante frio.
結構|このお店は結構おいしいです。|Este restaurante é bem gostoso.
よく|ジャスとよく電話します。|Falo bastante com o Jas por telefone.
全然|全然大丈夫です。|Está tudo bem, de verdade.
全く|日本語が全く分かりませんでした。|Eu não entendia nada de japonês.
たまに|たまに外で食べます。|De vez em quando como fora.
時々|時々、ブラジルの料理を作ります。|Às vezes faço comida brasileira.
いつか|いつか一緒に北海道に行こう。|Algum dia vamos juntos a Hokkaido.
いつでも|困ったら、いつでも電話してね。|Se tiver problema, me ligue a qualquer hora.
どこでも|コンビニはどこでもあります。|Tem loja de conveniência em todo lugar.
何でも|何でも聞いてください。|Pergunte qualquer coisa.
誰でも|このイベントは誰でも参加できます。|Qualquer pessoa pode participar deste evento.
すぐに|家に着いたら、すぐに連絡します。|Quando chegar em casa, aviso imediatamente.
今すぐ|今すぐ来てください！|Venha agora mesmo!
やっと|やっと日本に着きました。|Finalmente cheguei ao Japão.
ついに|ついに結婚の日が来ました。|Enfim chegou o dia do casamento.
とうとう|とうとう試験に合格しました。|Por fim passei na prova.
初めて|初めて富士山を見ました。|Vi o Monte Fuji pela primeira vez.
最初に|最初に名前を書いてください。|Primeiro escreva o nome, por favor.
まず|まず手を洗いましょう。|Antes de tudo, vamos lavar as mãos.
次に|次に野菜を切ります。|Em seguida, corto os legumes.
最後に|最後に塩を入れます。|Por último, coloco sal.
また|また明日ね。|Até amanhã.
もう一回|もう一回やってみます。|Vou tentar mais uma vez.
自分で|自分で料理を作ります。|Eu mesma cozinho.
きっと|きっと日本の生活は楽しいよ。|Com certeza a vida no Japão vai ser divertida.
たぶん|たぶん明日は雨です。|Provavelmente amanhã vai chover.
もしかしたら|もしかしたら遅れるかもしれません。|Talvez eu me atrase.
必ず|必ず連絡してください。|Avise sem falta, por favor.
絶対|絶対に忘れないよ。|Nunca vou esquecer.
ぜひ|ぜひ家に遊びに来てください。|Venha nos visitar sem falta.
なるべく|なるべく早く帰ります。|Volto o mais cedo possível.
できるだけ|できるだけ日本語で話します。|Falo em japonês o máximo possível.
ちゃんと|ちゃんとご飯を食べてね。|Coma direitinho, viu.
しっかり|しっかり休んでください。|Descanse bem, por favor.
はっきり|はっきり言ってください。|Diga claramente, por favor.
きちんと|部屋をきちんと片付けます。|Arrumo o quarto direitinho.
だんだん|だんだん寒くなってきました。|Aos poucos foi esfriando.
どんどん|日本語がどんどん上手になっています。|Seu japonês está melhorando cada vez mais.
少しずつ|少しずつ漢字を覚えています。|Estou aprendendo kanji pouco a pouco.
ずっと|ずっと会いたかった。|Eu queria te ver fazia tempo.
しばらく|しばらく待ってください。|Espere um pouco, por favor.
そろそろ|そろそろ帰りましょう。|Já está na hora de ir embora.
ちょうど|ちょうど今、駅に着きました。|Acabei de chegar na estação.
ほとんど|宿題はほとんど終わりました。|A lição está quase toda pronta.
ほぼ|準備はほぼできました。|A preparação está quase pronta.
特に|日本の料理では、特にラーメンが好きです。|Da comida japonesa, gosto especialmente de lámen.
例えば|例えば、寿司や天ぷらが好きです。|Por exemplo, gosto de sushi e tempurá.
実は|実は、来月日本に行きます。|Na verdade, vou ao Japão mês que vem.
やはり|やはり日本の電車は時間が正確です。|Como esperado, os trens japoneses são pontuais.
やっぱり|やっぱり家が一番だね。|Afinal, casa é o melhor lugar.
もし|もし雨が降ったら、家で映画を見よう。|Se chover, vamos ver filme em casa.
どうして|どうして日本語を勉強していますか。|Por que você estuda japonês?
なぜ|なぜ遅れたのですか。|Por que você se atrasou?
どのくらい|駅までどのくらいかかりますか。|Quanto tempo leva até a estação?
こう|この漢字はこう書きます。|Este kanji se escreve assim.
ああ|ああ、そういうことですか。|Ah, então é isso.
なかなか|バスがなかなか来ません。|O ônibus não vem nunca.
さすが|さすがジャス、何でも知ってるね。|Como esperado do Jas, você sabe de tudo.
わざわざ|わざわざ空港まで来てくれて、ありがとう。|Obrigada por se dar ao trabalho de vir até o aeroporto.
せっかく|せっかく日本に来たから、色々な所に行きたい。|Já que vim ao Japão, quero ir a vários lugares.
うっかり|うっかり傘を電車に忘れました。|Sem querer esqueci o guarda-chuva no trem.
こっそり|こっそりプレゼントを用意しました。|Preparei um presente escondido.
ぴったり|このドレスはサイズがぴったりです。|Este vestido serviu certinho.
ばっちり|準備はばっちりです。|A preparação está perfeita.
ぐっすり|昨日はぐっすり眠れました。|Ontem dormi profundamente.
にっこり|店員さんがにっこり笑いました。|A atendente sorriu.
ぺこぺこ|お腹がぺこぺこです。|Estou morrendo de fome.
へとへと|一日中歩いて、へとへとです。|Andei o dia todo e estou exausta.
ぎりぎり|ぎりぎり電車に間に合いました。|Peguei o trem por pouco.
ばらばら|みんな、ばらばらに帰りました。|Cada um foi embora separado.
さっぱり|この問題はさっぱり分かりません。|Não entendo nada desta questão.
びしょびしょ|雨で服がびしょびしょになりました。|A roupa ficou encharcada com a chuva.
ふわふわ|このパンケーキはふわふわです。|Esta panqueca é fofinha.
つるつる|雪の道がつるつるです。|A rua com neve está escorregadia.
ぺらぺら|ジャスは英語がぺらぺらです。|O Jas fala inglês fluentemente.
急に|急に雨が降ってきました。|De repente começou a chover.
突然|突然、電気が消えました。|De repente a luz apagou.
偶然|駅で偶然、友達に会いました。|Encontrei uma amiga por acaso na estação.
相変わらず|ジャスは相変わらず優しいです。|O Jas continua gentil como sempre.
改めて|改めて、よろしくお願いします。|Novamente, conto com você.
代わりに|コーヒーの代わりにお茶をください。|Em vez de café, chá, por favor.
先に|先に行っててね。|Vá na frente, viu.
直接|直接会って話したいです。|Quero conversar pessoalmente.
そして|朝ご飯を食べました。そして、仕事に行きました。|Tomei café da manhã. E então fui trabalhar.
それから|買い物をして、それから家に帰りました。|Fiz compras e depois voltei para casa.
しかし|日本語は難しい。しかし、楽しいです。|Japonês é difícil. Porém, é divertido.
だから|雨が降っています。だから、傘を持っていきます。|Está chovendo. Por isso vou levar o guarda-chuva.
それで|電車が遅れました。それで、遅刻しました。|O trem atrasou. Então, cheguei atrasada.
ですから|明日は休みです。ですから、ゆっくり寝ます。|Amanhã é folga. Portanto, vou dormir bastante.
なので|今日は寒いです。なので、コートを着ます。|Hoje está frio. Por isso vou de casaco.
けど|高いけど、おいしいです。|É caro, mas é gostoso.
けれども|疲れていますけれども、頑張ります。|Estou cansada, porém vou me esforçar.
それに|この部屋は広いです。それに、駅に近いです。|Este apartamento é espaçoso. Além disso, é perto da estação.
または|電話またはメールで連絡してください。|Entre em contato por telefone ou e-mail.
それとも|コーヒーにしますか、それともお茶にしますか。|Vai querer café ou chá?
つまり|つまり、明日は行けないということですね。|Ou seja, você não pode ir amanhã, né.
ところで|ところで、週末は何をしますか。|A propósito, o que vai fazer no fim de semana?
じゃあ|じゃあ、また明日。|Então, até amanhã.
その|その本はおもしろいですか。|Esse livro é interessante?
どの|どの電車に乗ればいいですか。|Em qual trem eu devo entrar?
こんな|こんなにきれいな海は初めてです。|É a primeira vez que vejo um mar tão bonito.
そんな|そんなに心配しないで。|Não se preocupe tanto.
あんな|あんな大きい家に住みたい。|Queria morar numa casa grande assim.
どんな|どんな音楽が好きですか。|De que tipo de música você gosta?
何か|何か飲みますか。|Vai beber alguma coisa?
誰か|誰か手伝ってください。|Alguém me ajude, por favor.
どこか|週末、どこか行きたいね。|No fim de semana quero ir a algum lugar.
誰も|部屋には誰もいません。|Não tem ninguém no quarto.
どこにも|今日はどこにも行きません。|Hoje não vou a lugar nenhum.
みなさん|みなさん、こんにちは。|Olá a todos.
ほか|ほかに質問はありますか。|Tem mais alguma pergunta?
他の|他の色はありますか。|Tem outra cor?
別|これは別の袋に入れてください。|Coloque isto numa sacola separada, por favor.
それぞれ|それぞれの国に、いい所があります。|Cada país tem seus lados bons.
両方|両方とも好きです。|Gosto dos dois.
片方|靴下が片方なくなりました。|Um pé de meia sumiu.
ばかり|ジャスはゲームばかりしています。|O Jas só fica jogando videogame.
くらい|駅まで十分くらいです。|Até a estação são uns dez minutos.
ほど|三十分ほど待ちました。|Esperei cerca de trinta minutos.
のに|たくさん勉強したのに、試験に落ちました。|Estudei muito, mas mesmo assim reprovei.
ため|健康のため、毎日歩きます。|Ando todo dia pela saúde.
ように|忘れないように、メモします。|Anoto para não esquecer.
らしい|明日は雪が降るらしいです。|Parece que amanhã vai nevar.
はず|ジャスはもう家に着いたはずです。|O Jas já deve ter chegado em casa.
つもり|来年、日本で働くつもりです。|Pretendo trabalhar no Japão no ano que vem.
かもしれない|明日は雨かもしれない。|Talvez chova amanhã.
でしょう|明日は晴れるでしょう。|Amanhã provavelmente vai fazer sol.
そうだ|天気予報によると、明日は雨だそうだ。|Segundo a previsão, dizem que amanhã chove.
物|この物はどこに置きますか。|Onde coloco esta coisa?
事|大事な事を忘れていました。|Eu tinha esquecido uma coisa importante.
話|ジャスの話はいつもおもしろいです。|As histórias do Jas são sempre divertidas.
用事|今日はちょっと用事があります。|Hoje tenho um compromisso.
理由|日本に来た理由は何ですか。|Qual é o motivo de ter vindo ao Japão?
原因|事故の原因を調べています。|Estão investigando a causa do acidente.
結果|試験の結果が出ました。|Saiu o resultado da prova.
目的|旅行の目的は観光です。|O objetivo da viagem é turismo.
目標|今年の目標は日本語の試験に合格することです。|Minha meta deste ano é passar na prova de japonês.
方法|いい勉強の方法を教えてください。|Me ensine um bom método de estudo, por favor.
やり方|このゲームのやり方が分かりません。|Não sei como jogar este jogo.
意見|あなたの意見を聞かせてください。|Me diga a sua opinião, por favor.
考え|いい考えですね。|Boa ideia, né.
気|気をつけて帰ってね。|Volte com cuidado, viu.
関係|二人の関係はとてもいいです。|A relação dos dois é muito boa.
違い|日本とブラジルの違いは何ですか。|Qual é a diferença entre Japão e Brasil?
特徴|この町の特徴は古いお寺です。|A característica desta cidade são os templos antigos.
種類|この店にはパンの種類がたくさんあります。|Esta loja tem muitos tipos de pão.
部分|この部分が分かりません。|Não entendo esta parte.
全体|クラス全体で旅行に行きました。|A turma toda foi viajar.
中心|ここは町の中心です。|Aqui é o centro da cidade.
周り|家の周りは静かです。|Os arredores da casa são tranquilos.
側|道の右側を歩きます。|Ando do lado direito da rua.
表|紙の表に名前を書いてください。|Escreva o nome na frente do papel, por favor.
裏|紙の裏も見てください。|Veja o verso do papel também.
方|この方が田中さんです。|Esta pessoa é o Sr. Tanaka.
形|ハートの形のクッキーを作りました。|Fiz biscoitos em forma de coração.
音|この音楽はいい音ですね。|Esta música tem um som bonito, né.
におい|カレーのいいにおいがします。|Tem um cheiro bom de curry.
様子|赤ちゃんの様子を見てきます。|Vou ver como está o bebê.
状態|この車はまだいい状態です。|Este carro ainda está em bom estado.
場合|雨の場合は、中止です。|Em caso de chuva, será cancelado.
機会|日本語を話す機会が増えました。|Aumentaram as oportunidades de falar japonês.
問題ない|それで問題ないです。|Assim não tem problema.
都合|明日の都合はどうですか。|Você tem disponibilidade amanhã?
予算|旅行の予算は十万円です。|O orçamento da viagem é de cem mil ienes.
計画|二人で旅行の計画を立てました。|Fizemos o plano da viagem juntos.
準備中|お店は今、準備中です。|A loja está em preparação agora.
営業中|このカフェは営業中です。|Este café está aberto.
休業|今日は休業です。|Hoje está fechado.
定休日|月曜日は定休日です。|Segunda-feira é o dia de folga da loja.
営業時間|営業時間は十時から八時までです。|O horário de funcionamento é das dez às oito.
注意|足元に注意してください。|Cuidado onde pisa.
規則|会社の規則を守ります。|Sigo as regras da empresa.
マナー|電車ではマナーを守りましょう。|Vamos respeitar as boas maneiras no trem.
習慣|毎朝散歩するのが習慣です。|Passear toda manhã é meu hábito.
文化|日本の文化に興味があります。|Tenho interesse na cultura japonesa.
歴史|京都は歴史がある町です。|Kyoto é uma cidade com história.
社会|社会のルールを学びます。|Aprendo as regras da sociedade.
生活|日本での生活に慣れました。|Me acostumei com a vida no Japão.
人生|人生は一度だけです。|A vida é uma só.
命|命は大切です。|A vida é preciosa.
経済|日本の経済について勉強しています。|Estou estudando a economia do Japão.
政治|政治のニュースはよく分かりません。|Não entendo bem as notícias de política.
法律|日本の法律を守ります。|Sigo as leis do Japão.
戦争|戦争のない世界がいいです。|Um mundo sem guerra seria bom.
平和|平和な毎日が一番です。|Dias tranquilos são o melhor.
環境|環境のために、ゴミを分けます。|Separo o lixo pelo meio ambiente.
情報|ネットで情報を集めます。|Junto informações na internet.
技術|日本の技術はすごいです。|A tecnologia japonesa é incrível.
科学|科学の博物館に行きました。|Fui ao museu de ciências.
宗教|宗教の違いを大切にします。|Respeito as diferenças de religião.
言語|日本語は難しい言語です。|O japonês é uma língua difícil.
方言|大阪の方言はおもしろいです。|O dialeto de Osaka é engraçado.
敬語|仕事では敬語を使います。|No trabalho uso linguagem formal.
冗談|それは冗談です。|Isso é brincadeira.
嘘|嘘をつかないでください。|Não minta, por favor.
秘密|これは二人だけの秘密です。|Isto é um segredo só nosso.
噂|あの店の噂を聞きました。|Ouvi um boato sobre aquela loja.
自信|日本語に少し自信がつきました。|Ganhei um pouco de confiança no japonês.
勇気|勇気を出して話しかけました。|Criei coragem e puxei conversa.
努力|毎日の努力が大切です。|O esforço diário é importante.
成功|パーティーは大成功でした。|A festa foi um grande sucesso.
失敗|失敗しても大丈夫です。|Tudo bem errar.
間違い|この文には間違いがあります。|Esta frase tem um erro.
変化|日本の生活で、大きな変化がありました。|Teve uma grande mudança com a vida no Japão.
差|東京と大阪では言葉に少し差があります。|Tem uma pequena diferença na fala entre Tóquio e Osaka.
力|この荷物は力がいります。|Esta bagagem exige força.
元|使ったら、元の場所に戻してください。|Depois de usar, coloque no lugar original.
半年|日本に来て半年になります。|Faz meio ano que vim para o Japão.
一生|この日は一生忘れません。|Nunca vou esquecer este dia.
思い出|二人の思い出の写真です。|É uma foto de recordação nossa.
記憶|子供の時の記憶はあまりありません。|Não tenho muitas memórias da infância.
お礼|手伝ってくれたお礼に、ケーキを作りました。|Fiz um bolo em agradecimento pela ajuda.
お詫び|お詫びの手紙を書きました。|Escrevi uma carta de desculpas.
自己紹介|まず自己紹介をします。|Primeiro vou me apresentar.
会話|日本語の会話を練習します。|Pratico conversação em japonês.
声をかける|困っている人に声をかけました。|Falei com uma pessoa que precisava de ajuda.
トラブル|パソコンのトラブルで困っています。|Estou com problema no computador.
故障|エアコンが故障しました。|O ar-condicionado quebrou.
修理|自転車を修理に出しました。|Levei a bicicleta para consertar.
工事|家の前で工事をしています。|Estão fazendo obra em frente de casa.
工事中|この道は工事中です。|Esta rua está em obras.
騒音|工事の騒音がうるさいです。|O barulho da obra está alto.
騒ぐ|夜遅くに騒がないでください。|Não faça barulho tarde da noite, por favor.
苦情|近所から苦情が来ました。|Veio uma reclamação dos vizinhos.
文句|ジャスは文句を言いません。|O Jas não reclama.
お知らせ|マンションのお知らせを読みます。|Leio os avisos do prédio.
案内|駅員さんが案内してくれました。|O funcionário da estação me orientou.
説明書|説明書を読んでから使います。|Leio o manual antes de usar.
表示|画面に日本語の表示が出ます。|Aparece uma indicação em japonês na tela.
人数|何人ですか。人数を教えてください。|Quantas pessoas? Me diga o número, por favor.
空席|空席はありますか。|Tem lugar vago?
満席|今日は満席です。|Hoje está lotado.
指定席|新幹線の指定席を予約しました。|Reservei assento no trem-bala.
自由席|自由席は三号車です。|O assento livre é no vagão três.
窓側|窓側の席がいいです。|Prefiro o lado da janela.
通路側|通路側の席をお願いします。|Assento do lado do corredor, por favor.
行き先|バスの行き先を確認します。|Confiro o destino do ônibus.
～方面|新宿方面の電車に乗ります。|Pego o trem sentido Shinjuku.
～番線|電車は二番線から出ます。|O trem sai da plataforma dois.
～号車|私たちの席は五号車です。|Nossos lugares são no vagão cinco.
近道|この道は駅への近道です。|Esta rua é um atalho para a estação.
遠回り|道を間違えて、遠回りしました。|Errei o caminho e dei uma volta maior.
徒歩|駅から徒歩五分です。|São cinco minutos a pé da estação.
目の前|ホテルは駅の目の前です。|O hotel fica bem em frente à estação.
すぐそこ|コンビニはすぐそこです。|A loja de conveniência é logo ali.
向かい|銀行の向かいにカフェがあります。|Tem um café em frente ao banco.
突き当たり|トイレは廊下の突き当たりです。|O banheiro fica no fim do corredor.
一つ目|一つ目の角を曲がってください。|Vire na primeira esquina, por favor.
二つ目|二つ目の駅で降ります。|Desço na segunda estação.
半日|半日、京都を観光しました。|Passei meio dia passeando por Kyoto.
一晩中|赤ちゃんが一晩中泣いていました。|O bebê chorou a noite toda.
年中|この店は年中無休です。|Esta loja abre o ano todo.
朝早く|朝早く起きて、お弁当を作ります。|Acordo de manhã cedo e faço a marmita.
夜遅く|夜遅くまで勉強しました。|Estudei até tarde da noite.
深夜|深夜にラーメンを食べました。|Comi lámen de madrugada.
早朝|早朝の空気は気持ちいいです。|O ar de manhã bem cedo é agradável.
昼間|昼間は暖かいです。|Durante o dia está quente.
その日|その日はとても寒かったです。|Nesse dia estava muito frio.
次の日|次の日、ジャスから手紙が届きました。|No dia seguinte chegou uma carta do Jas.
前の日|旅行の前の日は眠れませんでした。|No dia anterior à viagem não consegui dormir.
この前|この前はありがとう。|Obrigada pelo outro dia.
今度|今度、一緒に映画を見ましょう。|Da próxima vez, vamos ver um filme juntos.
今回|今回の旅行は最高でした。|A viagem desta vez foi incrível.
前回|前回の試験より点数が上がりました。|Minha nota subiu em relação à última prova.
毎回|毎回、同じ間違いをしてしまいます。|Toda vez cometo o mesmo erro.
年末年始|年末年始は家族と過ごします。|Passo o fim e o começo do ano com a família.
来日|来日の日が近づいています。|O dia da vinda ao Japão está chegando.
帰国|夏に一度帰国します。|Volto ao meu país uma vez no verão.
一時帰国|一時帰国して、家族に会いました。|Visitei meu país e vi minha família.
意外|意外に簡単でした。|Foi mais fácil do que eu esperava.
当然|約束を守るのは当然です。|Cumprir promessas é natural.
当たり前|日本では靴を脱ぐのが当たり前です。|No Japão é normal tirar os sapatos.
普段|普段は八時に起きます。|Normalmente acordo às oito.
日常|日本語の日常会話を練習します。|Pratico conversas do dia a dia em japonês.
一般|このお寺は一般の人も入れます。|O público em geral pode entrar neste templo.
基本|まず基本の文法を覚えましょう。|Primeiro vamos aprender a gramática básica.
初心者|私はまだ初心者です。|Eu ainda sou iniciante.
上級|上級のクラスに入りたいです。|Quero entrar na turma avançada.
中級|今は中級の日本語を勉強しています。|Agora estou estudando japonês intermediário.
初級|初級の教科書を終えました。|Terminei o livro de nível básico.
最高|今日は最高の一日でした。|Hoje foi o melhor dia.
最低|最低でも一日十分は勉強します。|Estudo no mínimo dez minutos por dia.
最大|この店は最大五十パーセント引きです。|Nesta loja o desconto é de até 50%.
最小|最小の荷物で旅行します。|Viajo com o mínimo de bagagem.
最新|最新のスマホを買いました。|Comprei o smartphone mais novo.
一部|この情報は一部だけ正しいです。|Esta informação está só em parte correta.
全国|このお店は全国にあります。|Esta loja tem no país todo.
地方|地方の町はのんびりしています。|As cidades do interior são tranquilas.
県|ジャスの実家は何県ですか。|Em que província fica a casa dos pais do Jas?
都道府県|日本には四十七の都道府県があります。|O Japão tem 47 províncias.
首都|日本の首都は東京です。|A capital do Japão é Tóquio.
人口|東京は人口が多いです。|Tóquio tem uma população grande.
大阪|大阪でたこ焼きを食べたいです。|Quero comer takoyaki em Osaka.
北海道|冬の北海道に行ってみたいです。|Quero conhecer Hokkaido no inverno.
沖縄|沖縄の海はとてもきれいです。|O mar de Okinawa é muito bonito.
中国|中国の料理も好きです。|Também gosto de comida chinesa.
韓国|韓国のドラマを見ています。|Estou vendo novelas coreanas.
都市|大阪は大きな都市です。|Osaka é uma cidade grande.
郊外|郊外に住むと、家賃が安いです。|Morando no subúrbio, o aluguel é barato.
駅前|駅前で待ち合わせしましょう。|Vamos nos encontrar em frente à estação.
`;
