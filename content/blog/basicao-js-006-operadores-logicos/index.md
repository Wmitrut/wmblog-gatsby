---
layout: post
title: '#006 - Basicão do JS: Operadores lógicos '
date: 2021-06-03 12:00:00
author: 'Wellington Mitrut'
tags: Javascript, Community, Basicão do Javascript
comments: true
featuredImage: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/li76o5i8hwolzk45mdfh.jpg
---

Antes de tudo, obrigado pelos acessos que vocês tem dado à estes posts, eu tentarei continuar a faze-los com a mesma frenquencia semanal. 

Coloca esse álbum do Black Sabbath e manda ver:

<iframe src="https://open.spotify.com/embed/album/0nfG16SkgyQ3bQwZyfzwzP" width="300" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>


![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5xawzg24iy9mspxuya2j.jpg)

Operadores lógicos são operadores que retornam valores booleanos. Além de `true`

 e `false`, estes operadores podem retornar verdadeiros e falseáveis.

Os valores falseáveis não necessariamente são só `false`. Existem 6 valores que podem ser considerados falseáveis:

```jsx
undefined, null, NaN, 0, "", false
```

Todos os valores verdadeiros são aqueles que não são falseáveis. Lembra da tabela verdade? Abaixo anexo uma aula bem completa sobre tabela verdade e valores verdadeiros e falseáveis.

<iframe width="560" height="315" src="https://www.youtube.com/embed/s_9HNbY4Zek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Em Javascript isto pode ser representado da seguinte maneira:

```jsx
const x = true;
const y = false;

//Se utilizarmos o conectivo && - AND/E, ambos os valores
//tem que ser verdadeiros

x && y //retorna false

//Se utilizarmos o conectivo || - OR/OU, ao menos um dos valores 
// tem que ser verdadeiro
x || y //retorna true

//Já o operador ! - NOT/NÃO, retorna false se for verdadeiro e 
//verdadeiro se for falseável
!x // retorna false
!y // retorna true
!'Mitrut' // retorna false
```

Pronto, para saber a ordem de chamada, pense sempre na ordem normal matemática. Na próxima semana iremos tratar de Condicionais em javascript e depois cair de cabeça em um dos assuntos mais extensos e legais de JS: ARRAYS.