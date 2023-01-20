---
layout: post
title: '#011 - Basicão do JS: Outros métodos de Array'
date: 2023-04-14 12:00:00
author: 'Wellington Mitrut'
tags: ['Javascript', 'Community', 'Basicão do Javascript']
comments: true
featuredImage: ./001.png
---

Depois de vermos os métodos mais usados de [arrays](#), de termos um [guia visual e gastronômico](#) e de termos batido a cabeça ao som de um bom e velho [thrash metal sobre arrays](#), o nosso assunto mais extenso até agora está chegando ao fim finalmente

Hoje vamos de Enforcer pra deixar o ânimo lá em cima:

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2Mz6TmSKyAYVI1o28zWX3p?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

A gente já falou aqui de `fill()`, `find()`, `forEach()`, de `map()`, `filter()` e `reduce()` nem vou falar nada né, foram pelo menos 3 posts sobre o assunto. Mas você já ouviu falar em `reduceRight()`? e em `copyWithing()`? Então vamos lá que é pra esses restolho mesmo que a gente ta aqui:

### copyWithin()

O método `copyWithin()` é um dos mais esquisitos que tem, ele copia uma parte do array para outra localização dentro deste mesmo array e o retorna, sem alterar seu tamanho, porém o array como um todo é alterado.

A estrutura do `copyWithin()` é complexa e consiste em:

```js
array.copyWithin(target, start, end)
```

- Sendo que `target` é a posição em que o método vai aplicar a alteração;
- `start` é a posição do array em que ele vai começar a copiar
- E finalmente, `end` sendo a posição do fim da cópia (Se não existir, ele faz até o fim do array).
- Se o start for negativo ele faz de maneira inversa ao array

vejamos os exêmplos

Tenhamos o array

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

---

```js
numeros.copyWithin(-2)
// saída: [1, 2, 3, 4, 5, 6, 7, 1, 2]
```

```js
numeros.copyWithin(0, 3)
// [4, 5, 6, 7, 8, 9, 7, 8, 9]
```

```js
numeros.copyWithin(0, 3, 4)
// saída: [4, 2, 3, 4, 5, 6, 7, 8, 9]
```

```js
numeros.copyWithin(-2, -3, -1)
// saída: [1, 2, 3, 4, 5, 6, 7, 7, 8]
```

### from()

O `.from` server é uma espécie de primo feio do `.map`, mas feio mesmo: mirradinho e com algumas limitações bem chatas. Ele é capaz de criar um novo array a partir de algum valor que você passe pra ele, pode iterar um valor mas só pode ser executado de uma maneira.

Exêmplo? Ele só pode ser chamado assim:

```js
const novoArray = Array.from('Array')
//novoArray = [`A`,`r`,`r`,`a`,`y`]
```

e a iteração dele é bem pouco interessante:

```js
Array.from([1, 2, 3], x => x + x)
//[2, 4, 6]
```

Ou seja, você até pode fazer coisas interessantes, mas ele é bem qualquer coisa.

### includes()

Esse aqui é um bastante usado e que passou batido, o `includes()` verifica se um dado valor está incluído em um array, retornando uma resposta booleana (`true` ou `false`) caso ele encontre o valor dentro daquele array.

Por exemplo, vamos imaginar que eu tenha um array de bandas como já usamos tantas vezes aqui:

```js
const bands = ['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth']

console.log(bands.includes('Ghost'))
//true

console.log(bands.includes('todon'))
//false

console.log(bands.includes('Anthrax'))
//false
```

Como pode ser observado, ele procura pelo EXATO termo correspondente então, mesmo que `todon` esteja incluso textualmente na palavra `Mastodon` que é um dos ítems do array, ela não vai retornar verdadeiro neste caso.

### keys()

### reduceRight()

### unshift()

O método `unshift` faz o inverso do `shift`, para o primeiro ítem do array:

```js
const bands = ['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth']
bands.unshift('Behemoth')
//novo array bands: ['Behemoth','Mastodon', 'The Ocean', 'Ghost', 'Opeth']
```

É meio contraintuitivo o nome mas é assim que esse método funciona, pode servir em casos bem específicos... mas né? 🤪🤪🤪🤪🤪🤪

### valueOf()

Talvez o método mais INÚTIL? Não sei dizer, mas ele simplesmente mostra o valor do array.

SIM. é isso.

```js
const bands = ['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth']
bands.valueOf()
//['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth']
```

😴😴😴

### ENFIM...
