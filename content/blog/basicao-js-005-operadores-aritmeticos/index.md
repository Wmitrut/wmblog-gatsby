---
layout: post
title: '#005 - Basicão do JS: Operadores aritméticos '
date: 2021-05-28 12:00:00
author: 'Wellington Mitrut'
tags: ["Javascript", "Community", "Basicão do Javascript"]
comments: true
featuredImage: ./girafales.jpeg
---

![O professor Jirafales](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/li76o5i8hwolzk45mdfh.jpg)

Dizia eu que a aritmética... Os chamados  operadores aritméticos são utilizados para a realização de cálculos simples em JS, como soma, subtração, divisão e multiplicação, além de algumas operações menos conhecidas mas que você deve lembrar da escola o módulo (resto inteiro da divisão) e o incremento e decremento.

Para mais detalhes matematicos sobre módulo, veja o vídeo abaixo:

<iframe width="560" height="315" src="https://www.youtube.com/embed/m4CYmd_lGmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Ou seja, se eu quiser dividir 12 laranjas para 5 pessoas, em javascript eu tenho:

```javascript
//Levando em conta que 12/5 = 2,4
//e eu preciso saber de forma exata o módulo, então:

12 % 5 = 2
```

Pois 2 é a parte inteira de 2,4.

Já  incrementar significa aumentar o valor de algo, e decrementar significa diminuir o valor de algo. 

Vamos por exemplo imaginar uma fila de gatinhos:

![Fila de gatos](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/75u8ndof8whnxqpqy23f.png)

Temos a nossa variável `gatos` que vai começar com um valor 1.

Para cada gato que eu ver nessa fila, eu vou querer automaticamente adicionar valor à minha variável `gatos`. Então para representar essa operação aritmética basta que eu declare que cada vez que um gato desta fila seja visto ele faça a operação `gato++` ou `++gato`.

Qual a diferença de mostrar antes ou depois?

```jsx
let gatos = 1
gatos++ // retorna valor 1 então seta gatos com o valor 2 
++gatos // seta gatos com valor 2 então retorna o valor 2
```

O Decremento faz a exata mesma operação mas subtraindo o valor.

```jsx
let gatos = 4
gatos-- // retorna valor 4 então seta gatos com o valor 3
--gatos // seta gatos com valor 3 então retorna o valor 3
```

Abaixo segue a lista dos operadores aritméticos. Para saber a ordem correta de utiliza-los e qual tem prioridade sobre o outro, volte no post anterior desta série e veja o vídeo de 1 minuto incorporado.

| Operador  | Significado  |
|---|---|
| + | Soma |
| - | Subtração |
| * | Multiplicação |
| / | Divisão |
| % | Módulo |
| ++ | Incremento |
| -- | Decremento |

*Semana que vem:* Operadores Lógicos