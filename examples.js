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
`;
