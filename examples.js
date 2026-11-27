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
`;
