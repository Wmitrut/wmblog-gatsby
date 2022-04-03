---
layout:     post
title:      "Entendendo e usando CSS filters para replicar o Instagram - PARTE 1"
subtitle:   "Front-drops #s01e02 - Como usar CSS filters e imitar efeitos como do Instagram."
date:       2015-04-15 12:00:00
author:     "Wellington Mitrut"
tags:       ["HTML5", "Javascript", "front drops"]
comments:   true
featuredImage: "./instagraminterface.jpg"
---

Depois de uma boa demora, voltaremos com a série de dicas de front-end aqui no blog, tente acompanhar, toda quarta sai o post e tem muito mais novidades programadas pra você vindo por aí.

Para começar, hoje teremos a parte 1 deste texto sobre o instagram, contando a história e alguns conceitos sobre cores em computadores.


<h2 class="section-heading">Um pouco de história...</h2>

O <a target="_blank" href="http://instagram.com">Instagram</a>, para quem não conhece, é um serviço de compartilhamento de fotos / Rede social que é utilizada de forma exclusiva pelo celular criada por <a target="_blank" href="https://twitter.com/KEVIN">Kevin Systrom</a> e pelo brasileiro <a target="_blank" href="https://twitter.com/mikeyk">Mike Krieger</a>, esse aplicativo permite que seus usuários tirem fotos com seu aparelho móvel em estilo Polaroid, fotos quadradas, nas quais podem ser aplicados filtros vintage para dar um ar cult à estas fotos, podendo assim compartilha-las com os demais usuários, funcionando de forma similar ao Twitter onde você segue e é seguido por outras pessoas.

![Interface do instagram em 2015](./instagraminterface.jpg)

Em 2012, o Facebook anunciou a aquisição do Instagram. O valor pago pela startup foi avaliado em US$ 1 bilhão. Desde então, ele vem sido implementado e melhorado, tendo ganhado uma lista enorme de novas funcionalidades e derivações:

<ul>
  <li>Ganhou suporte para mensagens/fotos diretas no Android e iOS.</li>
  <li>Recebeu uma atualização grande no Android, que padronizou o visual com a versão do iOS e diminuiu drasticamente o “peso” do app.</li>
  <li>No iOS, o efeito “Lux” ganhou uma barra para controlar a intensidade.</li>
  <li>Lançou um novo app para iOS, o Hyperlapse.</li>
  <li>Passou a exibir anúncios nos EUA.</li>
  <li>Liberou a opção de editar legendas das fotos no Android e iOS.</li>
  <li>Lançou cinco novos filtros e suporte a vídeos em câmera lenta, para Android e iOS.</li>
  <li>Mudou a exibição dos vídeos, de apenas uma para mostrá-los em loop eterno.</li>
  <li>Acrescentou suporte a carrossel de imagens para anúncios.</li>
  <li>Lançou o Layout, app para criar colagens de fotos, para o iOS.</li>
</ul>

Um exêmplo de foto do instagram é esta abaixo:

<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/lAcPM8FfHv/?utm_source=ig_embed&amp;utm_medium=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/lAcPM8FfHv/?utm_source=ig_embed&amp;utm_medium=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div><div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> Visualizar esta foto no Instagram.</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/lAcPM8FfHv/?utm_source=ig_embed&amp;utm_medium=loading" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Preguiça</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Uma publicação compartilhada por <a href="https://www.instagram.com/wmitrut/?utm_source=ig_embed&amp;utm_medium=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> Wellington Mitrut</a> (@wmitrut) em <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2014-03-01T16:35:21+00:00">1 de Mar, 2014 às 8:35 PST</time></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>
<br>

Mas como é que o instagram altera as fotos e aplica estes filtros que tornam nossas fotos tão bonitas?

<h2 class="section-heading">Pixels, binários e hexadecimais.</h2>

Como sabemos, fotos são pixels na tela e pixels são, segundo a wikipedia:

<blockquote>"o menor elemento num dispositivo de exibição (como por exemplo um monitor), ao qual é possível atribuir-se uma cor. De uma forma mais simples, um pixel é o menor ponto que forma uma imagem digital, sendo que o conjunto de milhares de pixels formam a imagem inteira."</blockquote>

Ainda, segundo o site <a href="http://petapixel.com/2010/11/04/first-digital-photograph-ever-made/">Petapixel</a>, a primeira imagem digital veio a surgir em 1957, quando Russell Kirsch, inventor do scanner, reproduziu uma foto do seu filho de 3 meses em uma imagem digital de 176 x 176 pixels.

![Primeira imagem digital, feita por Russell Kirsch em 1957](./firstdigitalimage.jpg)

> Primeira imagem digital, feita por Russell Kirsch em 1957.

No video abaixo, Kevin e o pessoal do Code.org explicam de forma detalhada como os pixels se apresentam na tela do computador e como os filtros do instagram funcionam na variação de uso de rgb:

<iframe width="560" height="315" src="https://www.youtube.com/embed/15aqFQQVBWU" frameborder="0" allowfullscreen></iframe>

<h2 class="section-heading">RGB, RYB, CMYK...</h2>

No vídeo, fica claro que para que o computador entenda o que é uma cor, é necessário que existam valores de três cores primárias, cuja variação dará origem à todas as outras cores do espectro visivel, essas cores são RED(R -  Vermelho), GREEN (G - Verde) e BLUE (B - Azul). RGB.

Alguns leitores podem achar que essa constatação de que as cores primarias são vermelho, verde e azul está um tanto quanto errada, mas não, temos vários padrões de cores, o padrão RYB (red, yellow, blue) é, na verdade, uma base de cores primárias subtrativas. Cores primárias subtrativas formam outras cores através da absorção de luz, como nos foi ensinado nas aulas de artes.

Por exemplo, se você mistura tintas amarela e azul, teremos uma cor verde mais escura, correto? Isto ocorre porque o novo pigmento absorve tanto as frequências amarela e azul - as frequências que sobram e são refletidas "causam" a sensação da cor verde. Assim sendo, quanto mais tinta você misturar, mais escuro o pigmento vai ficar, porque absorverá mais cores.</b>

As telas de computadores e celulares, porém, não refletem luz - ao contrário, elas emitem luz. Neste caso, "misturar os pigmentos" implica na verdade em emitir luz em várias frequências. Isto significa que, quanto mais cores são emitidas, mais clara será a cor. Claro que a combinação não poderia ser a mesma das cores subtrativas - na verdade, é o processo contrário: As cores primárias aditivas mais usadas são as cores secundárias das cores subtrativas primárias mais comuns, e vice versa.

![Esquema de cores RGB](./rgb.png)

> Esquema de cores RGB.


Essa base é conhecida como CMYK (do inglês "Cyan, Magenta, Yellow and Key (preto)") e é extremamente importante em design e impressão. Se você olhar o cartucho de uma impressora a tinta, provavelmente verá estas quatro cores. (O preto vai junto porque, embora possa ser composto em teoria com as outras cores, é uma muito usada e compensa ser mandado à parte, além de facilitar o escurecimento dos outros tons. Também pode ocorrer de haver cartuchos de outras cores, dependendo dos usos da impressora.)

Foi um texto longo, mas extremamente importante para entender os conceitos dos CSS filters que aplicaremos com base nas cores RGB, recriando os efeitos do Instagram na semana que vem!
