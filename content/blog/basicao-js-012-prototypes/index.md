---
layout: post
title: '#012 - Basicão do JS: Prototypes e Constructors '
date: 2023-05-04 12:00:00
author: 'Wellington Mitrut'
tags: ['Javascript', 'Community', 'Basicão do Javascript']
comments: true
featuredImage: ./001.png
---

![Construction site, foto por Becca Tapert](./001.png)

> Foto de <a href="https://unsplash.com/@beccatapert?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Becca Tapert</a> na <a href="https://unsplash.com/pt-br/fotografias/tam80nXFvL4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Olá, seja bem vindo a mais um post do `Basicão do Javascript`, hoje iremos falar sobre um assunto que engloba BASTANTE tudo que já vimos até agora e começa a dar base para os próximos assuntos que trataremos nessa série. É um assunto bem técnico e que trata de como conseguimos abstrair coisas novas e não se repetir.

Digamos que eu tenha um aplicativo sobre carros. Cada carro pode ser instanciado como vimos [anteriormente](https://blog.wmitrut.co/basicao-js-002-objects/) em `objetos`. Esses objetos por sua vez possuem propriedades com as quais podemos "brincar" ou classificar.

Ex:

Pegamos um objeto de carro similar ao que vimos no post anterior:

```js
const carro = {
  modelo: '',
  marca: '',
  cor: '',
  ano: '',
}
```
