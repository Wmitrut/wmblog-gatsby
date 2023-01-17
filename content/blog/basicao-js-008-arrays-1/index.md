---
layout: post
title: '#008 - Basicão do JS: Eu me amArray '
date: 2023-02-17 12:00:00
author: 'Wellington Mitrut'
tags: ['Javascript', 'Community', 'Basicão do Javascript']
comments: true
featuredImage: ./001.jpg
---

O Post de hoje vai ser longo, talvez o mais longo dessa série e talvez um dos conceitos mais importantes a se saber em programação num geral.

Coloca esse álbum do Steve ARRAY Vaughan e vamos começar:

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1AL5oXZRtTc8PyhcTwg4xQ?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

Arrays são conjuntos de tipos de dados, se você está acompanhando esta série sabe que já falamos de [tipos de dados](https://blog.wmitrut.co/basicao-js-001-primitives/), mas agora imagine que eu tenho a necessidade de tratar do CONJUNTO das coisas, de uma lista de bandas de um festival, de uma lista de frutas, das coordenadas de um ponto. Arrays são pequenos grupos desses dados agrupados.

Exêmplos:

```js
const bands = ['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth']
const frutas = ['banana', 'maçã', 'abacate']
const megasena = [11, 24, 28, 36, 44, 50]
```

Arrays podem inclusive conter arrays, quando como por exêmplo, coordenadas de um polígono:

```js
const poligono = [
  [1, 24],
  [3, 4],
  [0, 0],
  [8, 50],
]
```

Desta forma, convenciona-se que arrays são conjuntos de um mesmo tipo de dados. Uma das propriedades mais importantes de um array é o _índice_ ou no inglês _index_. Algumas linguagens contam o index a partir de 0 e outras a partir de 1. O javascripte é índice 0. Desta forma, podemos pegar qual a posição de um ítem do nosso array dentro dele e manipulá-lo.

Pegamos por exêmplo o nosso array **megasena**:

```js
const megasena = [11, 24, 28, 36, 44, 50]
```

Ao se observar, contamos um array com 6 posições, caso queiramos saber quais os números nas posições 0, 3 e 5 teremos o seguinte resultado:

```js
console.log(megasena[0])
// 11

console.log(megasena[3])
// 36

console.log(megasena[5])
// 50
```

As posições de um array também funcionam de forma reversa, nesse caso, se eu colocar um _ - _ antes do número, ele vai buscar a partir da última posição:

```js
console.log(megasena[-1])
// 50

console.log(megasena[-3])
// 36

console.log(megasena[-5])
// 24
```

Uma outra curiosidade interessante dos arrays é que existem vários outros métodos onde podemos extrair, filtrar, manipular e até gerar outros arrays. Neste post vamos ver alguns dos principais e no próximo vamos aprender a usar os 3 mais interessantes a fundo.

## Métodos de Arrays

### .concat()

Serve para concatenar arrays, ou seja, criar um novo 'juntando' os anteriores em um novo:

```js
const bands1 = ['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth']
const bands2 = ['Epica', 'Behemoth', 'Crypta']
const festival = bands1.concat(bands2)
// festival = ['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth', 'Epica', 'Behemoth', 'Crypta']
```

### .every()

Serve para verificar se todos os valores de um array retornam `true` para uma condição. No exêmplo abaixo usaremos uma função, coisa que veremos futuramente.

```js
const ages = [30, 53, 12, 2]

ages.every(checkAge)

function checkAge(age) {
  return age > 18
}
// O retorno será falso pois nem todas as idades são maiores que 18.
```

### .fill()

Pode preencher todos os valores de um array com um valor determinado no método, digamos

```js
const bands = ['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth']
bands.fill('Metallica')
// bands = ['Metallica','Metallica','Metallica','Metallica','Metallica']
```

Ou pode substituir apenas os das posições especificadas no método

```js
const bands = ['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth']
bands.fill('Metallica', 3, 4)
// bands = ['Gojira', 'Mastodon', 'The Ocean','Metallica','Metallica']
```

### .find()

O find _encontra_ e retorna o valor do primeiro elemento em um array que cumprir uma determinada condição, retornando _undefined_ caso nenhum ítem corresponda a condição, neste caso, vamos verificar a idade e mostrar qual o **primeiro** elemento que bate com a condição

```js
const ages = [30, 53, 12, 2]

ages.find(checkAge)

function checkAge(age) {
  return age < 18
}
// O retorno será 12.
```

### .findIndex()

Muito similar ao _find()_ mas neste caso ele retorna a posição do array em que o primeiro elemento cumprir a condição

```js
const ages = [30, 53, 12, 2]

ages.find(checkAge)

function checkAge(age) {
  return age < 18
}
// O retorno será 2.
```

### .forEach()

O forEach é um método que executa uma função para cada ítem de um array

```js
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const tabuada = numero => {
  return console.log(numero * 9)
}
// 0
// 9
// 18
// 27
// 36
// 45
// 54
// 63
// 72
// 81
// 90
```

### .indexOf()

Este método serve para retornar a posição do índice de um elemento dentro de um array quando você passa o elemento como parâmetro. No caso de ele não existir, retorna -1.

```js
const bands = ['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth']
console.log(bands.indexOf('Ghost'))
// 3
```

Você pode inclusive passar um valor para que a busca do indexOf comece a partir de uma posição especifica e te diga em relação à posição passada, quanto você deve andar:

```js
const bands = ['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth']
bands.indexOf('Mastodon', 2)
// -1  -> Ou seja, anda -1 posição para encontrar 'Mastodon'
```

### .lastIndexOf()

Com o `lastIndexOf` é possível pegar a última posição de um valor em um array, por exêmplo:

```js
const animais = ['Gato', 'Cão', 'Canário', 'Peixe', 'Gato', 'Cobra']

console.log(animais.lastIndexOf('Gato'))
// 4
console.log(animais.lastIndexOf('Cão'))
// 1
```

Caso você queira buscar a partir de uma posição específica do array, você pode passar o array base como parâmetro, esse parâmetro por sua vez é conhecido como `fromIndex`.

```js
const animais = ['Gato', 'Cão', 'Canário', 'Peixe', 'Gato', 'Cobra']

console.log(animais.lastIndexOf('Gato', 2))
// 0
console.log(animais.lastIndexOf('Cão', 2))
// 1
```

### Array.isArray()

Verifica se um valor passado é de fato um `Array`!

```js
const animais = ['Gato', 'Cão', 'Canário', 'Peixe', 'Gato', 'Cobra']
const animal = 'Cavalo'

console.log(Array.isArray(animais))
//true

console.log(Array.isArray(animal))
//false
```

Pode parecer meio idiota mas quando você não sabe que tipo de valor está vindo em uma resposta de API, num debug e em `N` situações ele é um método bem útil.

### .join()

O método join transforma o array passado para ele em uma string, ou seja, ele pega seu array de strings e transforma em uma só. Podemos também passar um parâmetro como separador, que substituirá a vírgula, ex:

```js
const bands = ['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth']
console.log(bands.join())
//'Gojira,Mastodon,The Ocean,Ghost,Opeth'
```

Se passarmos o parâmetro de separação:

```js
const bands = ['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth']
console.log(bands.join('And'))
//'GojiraAndMastodonAndThe OceanAndGhostAndOpeth'
```

### .push()

O método `push` adiciona um (ou mais) novo ítem ao final do array, ex:

```js
const bands = ['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth']
bands.push('Behemoth')
//novo array bands: ['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth', Behemoth]
```

### .pop()

O `pop`remove o último elemento do final do array e retorna o elemento removido

```js
const bands = ['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth', 'Behemoth']
bands.pop()
//novo array bands: ['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth']
//output: 'Behemoth'
```

### .shift()

O método `shift` por sua vez faz a mesma coisa que o `pop`, porém para o primeiro ítem do array

```js
const bands = ['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth', 'Behemoth']
bands.shift()
//novo array bands: ['Mastodon', 'The Ocean', 'Ghost', 'Opeth']
//output: 'Gojira'
```

### .reverse()

O método `reverse` serve para inverter a ordem dos elementos em um array:

```js
const bands = ['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth']

bands.reverse()
//novo array bands: ['Opeth', 'Ghost', 'The Ocean', 'Mastodon', ' Gojira']
```

### .sort()

O `sort` muda a ordem dos elementos em um array, para strings funciona muito bem, sendo necessário apenas chamar o método

```js
const bands = ['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth']

bands.sort()
//novo array bands: ['Ghost', 'Gojira', 'Mastodon', 'Opeth', 'The Ocean']
```

Porém para números ele pode ser problemático - gerando valores bizarros como 25 vindo depois do 100 pois ele entende que 2 é maior que o 1 (esse tipo de bizarrice poderia render todo um post num futuro só explorando isso... que tal? Deixa nos comentários se você tem interesse), sendo necessário passar uma função de comparação como parâmetro, essa função então faz os cálculos apropriados e retorna um array numérico na ordem correta.

```js
//organiza os números em ordem crescente
const notas = [20, 10, 100, 50, 80, 90, 30, 60, 40, 70]

notas.sort((a, b) => {
  return a - b
})

// notas = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
```

ou

```js
//organiza os números em ordem decrescente
const notas = [20, 10, 100, 50, 80, 90, 30, 60, 40, 70]

notas.sort((a, b) => {
  return b - a
})

// notas = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
```

### .slice()

Como o próprio nome já diz, ele tira uma `fatia`, ou seja, uma `slice` do array, dado uma posição de início e uma posição de fim - esta posição final NÃO é incluida no array, mas sim o ítem antes dela.

Alguns casos de como `slice` pode se comportar

Dado o seguinte array:

```js
const bands = ['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth', 'Behemoth']
```

- Caso não exista uma posição de fim, ele faz da posição dada até o fim:

```js
console.log(bands.slice(2))
//  ['The Ocean', 'Ghost', 'Opeth', 'Behemoth']
```

- Caso seja dada uma posição de fim:

```js
console.log(bands.slice(2, 4))
//  ['The Ocean', 'Ghost']
```

- Caso a posição de início dada seja NEGATIVA, ele inicia do final do array para o início:

```js
console.log(bands.slice(-2))
//  ['Opeth', 'Behemoth']
```

- Caso o fim seja negativo

```js
console.log(bands.slice(2, -1))
//  ['The Ocean', 'Ghost']
```

- Caso não seja dada nenhuma posição:

```js
console.log(bands.slice())
//  ['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth', 'Behemoth']
```

### .splice()

O método `splice`é um método complexo que pode ser usado tanto para adicionar quanto para remover elementos de um array e é possível ainda escolher em que posição esses elementos serão adicionados ou removidos.

Dado o seguinte array:

```js
const bands = ['Gojira', 'Mastodon', 'Opeth', 'Behemoth']
```

Sabendo que o splice tem a seguinte sintaxe:

```js
array.splice(index, aRemover, item1, ..., itemX);
```

- `index`: Sendo o índice que o splice vai começar;
- `aRemover`: O número de ítems a serem removidos a paritr do índice dado;
- `item1, ..., itemX`: novos elementos a serem adicionados ao array;

Por exêmplo, caso queiramos adicionar 2 ítems ao nosso array de bandas:

```js
bands.splice(2, 0, 'The Ocean', 'Ghost')

//['Gojira', 'Mastodon', 'The Ocean', 'Ghost', 'Opeth', 'Behemoth']
```

Ou caso queiramos remover items do nosso array:

```js
bands.splice(2, 2)

//['Gojira', 'Mastodon']
```

### .some()

Este método serve para checar se QUALQUER valor de um array bate com a validação de uma função, se qualquer valor corresponde ao pedido, se nenhum corresponder ele retorna `false`, se PELO MENOS UM corresponder, ele retorna `true`.

```js
const idades = [1, 8, 18, 25]
const idades2 = [1, 8, 10, 12]

const checkMaioridade = idade => {
  return idade > 18
}

idades.some(checkMaioridade)
// neste caso, retorna TRUE

idades2.some(checkMaioridade)
//retorna FALSE
```

### .toString()

O `toString` é um método que retorna os elementos de um array transformados em uma única string separada por `,`. Em teoria, todo array tem um método `toString()` implicito quando ele é mostrado em forma de texto.

```js
const notas = [20, 10, 100, 50, 80, 90, 30, 60, 40, 70]

notas.toString()

// '20, 10, 100, 50, 80, 90, 30, 60, 40, 70'
```

---

Ok, depois de ver todos esses métodos, ainda existem 3 que devem ser explorados a fundo e são mais complexos e talvez até mais importantes que os exemplificados, são eles: **.filter()**, **.map()** e o **.reduce()** - que você confere no próximo post.
