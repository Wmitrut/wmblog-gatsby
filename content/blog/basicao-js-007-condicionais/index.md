---
layout: post
title: '#007 - Basicão do JS: Operadores condicionais '
date: 2023-01-20 12:00:00
author: 'Wellington Mitrut'
tags: ['Javascript', 'Community', 'Basicão do Javascript']
comments: true
featuredImage: ./001.jpg
---

Bem-vindo ao primeiro post técnico de 2023, espero que curta a viagem e esteja aprendendo bastante com os posts por aqui. Javascript é uma linguagem fascinante e cheia de nuances e o basicão, você vê por aqui.

Coloca esse álbum do Saxon e manda ver que hoje é curtinho:

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2cntVuaG74L3BjJNH5GdU8?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

![Condicionador](./001.jpg)

As vezes, quando estamos programando, os dados precisam ser checados, manipulados ou então alguma condição precisa ser checada se é verdadeira ou não para que algo então assim, seja executado. Existem estruturas de decisão que nos ajudam a fazer isso.

### if e else

As estruturas de `if e else` consistem em pelo menos duas partes: a primeira é a condição, que se for `verdadeira` executará uma dentre as saídas de condição, que é a segunda parte, como no exêmplo abaixo:

```js
const anos = 18

if (anos === 18) {
  return 'Nossa, você tem 18 anos!'
} else {
  return 'Você não tem 18 anos!'
}
```

Parece simples, mas da pra gente melhorar este código e colocar mais condições

```js
const anos = 18

if (anos < 18) {
  return 'Nossa, você é menor de idade!'
} else if (anos >= 18 && < 25){
  return 'Você é um jovem'
}else if(anos >= 25 && anos < 35){
  return 'Você é um adulto'
} else {
  return 'BOOMER!'
}

```

Neste caso, estamos checando a idade utilizando os operadores lógicos que aprendemos anteriormente e no último pedaço de código como já se esgotaram as possibilidades, nós apenas retornamos a mensagem final.

### if`s ternários

![Condicionador](./002.jpg)

Existem maneiras mais simples de escrever um if/else sem ter que escrever toda a estrutura, é o caso do if TERNEIRO... digo... ternário.

```js
const anos = 29
const maioridade = anos < 18 ? 'menor' : 'maior'
```

Nesse caso, verificamos que se a condição é `verdadeira` ou `falsa` e em apenas uma linha já colocamos o return dentro de uma variável, eu particularmente gosto de ler esse código desta maneira:

```js
const  constante = (minha condição) ? 'verdadeira':'falsa'
```

### Switch

As vezes você pode ter muitas condições em um a estrutura e encher de `if/else`não é a maneira mais inteligente de manter o seu código, switches em alguns casos são mais rápidos de executar e mais fáceis de ler que `if/else`. Abaixo, um exemplo de switch:

```js
const ano = 2002

switch (anos) {
  case 1958:
    return 'Mundial!'
    break
  case 1962:
    return 'Bi-Campeonato!'
    break
  case 1970:
    return 'Tri!'
    break
  case 1994:
    return 'TEEEEETRA!'
    break
  case 2002:
    return 'Penta!'
    break
  case 2014:
    return '7x1!'
    break
  default:
    return 'Não foi uma copa marcante'
}
```

Nesse caso, se a variável é igual a `2002`, a mensagem `Penta!` é retornada, caso qualquer outro número seja informado e não esteja entre os `case`, uma mensagem padrão é retornada pois o `default`, o padrão para retornar caso não haja condições é `Não foi uma copa marcante`.

Algumas coisas devem ser levadas em consideração como:

- O comando `break` para parar o código é implícito no return `default`;
- Não se deve usar switch caso seja feita uma comparação antes;

Nosso próximo assunto vai ser um pouco mais complexo e talvez eu divida em mais posts, eu estou falando de uma das estruturas mais importantes de Javascript, os **Arrays**.
