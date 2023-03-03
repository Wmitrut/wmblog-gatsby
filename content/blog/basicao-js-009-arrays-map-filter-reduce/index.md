---
layout: post
title: '#009 - Basicão do JS: Map, filter e Reduce'
date: 2023-03-03 12:00:00
author: 'Wellington Mitrut'
tags: ['Javascript', 'Community', 'Basicão do Javascript']
comments: true
featuredImage: ./001.jpeg
---

![mapas](./001.jpeg)

Como sempre, mete uma música aí e seguimos a jornada - O Cynic é uma das infinitas bandas que surgiram após o fim do Death e junta elementos presentes em seus álbums mais técnicos:

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1V0sdomb0xeyfhaKJASMaQ?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

No post anterior desta série aprendemos grande parte dos métodos de arrays em javascript. Hoje, eu convido você a explorar os 3 métodos principais. Devido a complexidade, importância e probabilidade de uso eu resolvi reservar um post inteiramente dedicado a eles para que você foque e absorva esse conteúdo da melhor maneira possível.

O principal ponto deste post mostrar estes ítems de maneira separada é que é possível utilizar todos os outros métodos em conjunto com estes três, criando combinações incríveis e que podem ser úteis em qualquer aplicação javascript. Um dos principais paradigmas que usam estes métodos é a programação funcional.

## Um pouco sobre programação funcional

### **O que é programação funcional?**

A programação funcional, quando falado em ciência da computação é um **paradigma de programação** onde o valor de saída de uma função depende apenas dos argumentos que são passados para a função, portanto, chamar uma função uma determinada quantidade de vezes sempre produzirá o mesmo resultado, não importa a quantidade de vezes que você a chame .

É o contraste em relação à programação imperativa, onde muitas funções trabalham com um estado local ou global, que podem acabar retornando resultados diferentes em diferentes situações. Uma mudança nesse estado é chamada de efeito colateral e, eliminá-los, pode facilitar a compreensão e a previsão do comportamento do seu código.

### **Por que map, filter e reduce?**

É justamente por isso que temos hoje um capítulo totalmente dedicado aos três metodos. Um dos principais fundamentos da programação funcional é o uso de listas e operações de lista. No javascript temos **map**, **filter** e **reduce**, todas funções que dada uma lista inicial (como por exemplo, um array), a transformam em outras coisa, mantendo intacta essa mesma lista original.

Ou seja, **O array não sofre transformação**

## Map

Às vezes temos um array de objetos que desejamos modificar/adicionar propriedades de cada objeto, outras vezes podemos ter um array de strings que queremos transformar todas elas em minúsculas. Na realidade, pode haver inúmeras situações em que **mapa** é o seu salvador e é muito simples de usar.

### **Usando o map**

Vamos pegar por exêmplo um array e utilizar o **map** para multiplicar todos os números dele por 2:

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const vezesDois = numeros.map(numero => {
  return numero * 2
})

console.log(numeros)
//1,2,3,4,5,6,7,8,9,10

console.log(vezesDois)
//2,4,6,8,10,12,14,16,18,20
```

Como você pode ver, o nosso `map` recebe um retorno que chamamos de `callback` como um argumento. Após a execução o nosso array original continua o mesmo e temos um novo array criado que possui os valores anteriores multiplicados.

O `map` pode ser utilizado para arrays pequenos mas o legal mesmo é utiliza-lo em coisas mais complexas, já que eu gosto de prog metal vou pegar algumas bandas e utilizar no nosso exêmplo a seguir:

Dado o seguinte array:

```js
const musicas = [
  { id: 1, name: 'Stranded', artist: 'Gojira' },
  { id: 2, name: 'Oblivion', artist: 'Mastodon' },
  { id: 3, name: 'Traced In The Air', artist: 'Cynic' },
  { id: 4, name: 'Ghost of Perdition', artist: 'Opeth' },
  { id: 5, name: 'Failure', artist: 'The Devin Townsend Project' },
  { id: 6, name: 'Bleed', artist: 'Meshuggah' },
]
```

Caso eu queira a partir deste array extrair somente o `name` das músicas em um outro array o que eu deveria fazer?

```js
const nomesMusicas = musicas.map(musica => {
  return musica.name
})

console.log(nomesMusicas)
//['Stranded', 'Oblivion', 'Traced In The Air', 'Ghost of Perdition','Failure', 'Bleed']
```

Neste caso, o método cria um array novo com apenas os ítems em `name` sendo mapeados/filtrados dentro deste novo elemento. Ainda é possível fazer uma transformação em cada um deles:

```js
const nomesArtistas = musicas.map(artista => {
  return artista.name.toLowerCase()
})

console.log(nomesArtistas)
// ['gojira', 'mastodon','cynic','opeth','the devin townsend project','meshuggah']
```

Ainda é possível pegar nosso array, adicionar e remover propriedades de acordo com o que queremos. No caso abaixo iremos remover a propriedade name e adicionar o total de plays do artista e se ele é favorito:

```js
const artistStatistics = musicas.map(musica => {
  // aqui dentro da nossa função podemos fazer o que quisermos

  const { name, ...data } = musica

  return {
    ...data,
    totalPlays: 0,
    favorite: false,
  }
})

console.log(artistStatistics)

// const musicas = [
//  { id: 1, artist: 'Gojira',  totalPlays: 0, favorite: false,},
//  { id: 2,  artist: 'Mastodon', totalPlays: 0, favorite: false, },
//  { id: 3, artist: 'Cynic',  totalPlays: 0, favorite: false,},
//  { id: 4,  artist: 'Opeth',  totalPlays: 0, favorite: false, },
//  { id: 5, artist: 'The Devin Townsend Project',  totalPlays: 0, favorite: false, },
//  { id: 6, artist: 'Meshuggah',  totalPlays: 0, favorite: false, },
// ]
```

## Filter

O `filter` do JavaScript é utilizado para filtrar elementos de um array de acordo com uma determinada condição. Imagine ele como uma peneira e a condição sendo a `membrana` que deixa algo passar ou não. Assim como o map, ele retorna um novo array com os elementos que passaram na condição fornecida.

### **Usando o filter**

Usar um `filter` é tão fácil como um map, a diferença é que geralmente o array de entrada é maior que o de saída, pegamos o exemplo:

Dado um array de números, eu quero filtrar apenas aqueles que sejam pares:

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numerosPares = numeros.filter(numero => {
  return numero % 2 === 0
})

console.log(numeros)
//1,2,3,4,5,6,7,8,9,10

console.log(numerosPares)
//2,4,6,8,10
```

Ou seja, se o resto da minha divisão for `0` então o elemento é um número par.

O princípio do `filter` é bem similar ao map, porém ele trata cada elemento com `true` ou `false`, se na condição pré estabelecida ele for `true` ele coloca o elemento no array, se for `false` ele é ignorado e será filtrado fora.

Uma maneira de filtra é por string, digamos que eu tenha o seguinte array de jogadores da seleção brasileira do penta:

```js
const jogadores = [
  'Marcos',
  'Cafu',
  'Lúcio',
  'Roque Junior',
  'Roberto Carlos',
  'Edmilson',
  'Gilberto Silva',
  'Kleberson',
  'Rivaldo',
  'Ronaldinho Gaúcho',
  'Ronaldo',
]
```

Se eu quiser filtrar todos aqueles cujo nome possui as letras `ald` é só fazer o seguinte filtro

```js
const jogadoresAld = jogadores.filter(jogador => {
  return jogador.includes('ald')
})

console.log(jogadoresAld)
//['Rivaldo', 'Ronaldinho Gaúcho', 'Ronaldo']
```

Mas vamos aprofundar um pouco mais, digamos que novamente eu tenha um array com artistas e músicas:

```js
const musicas = [
  { id: 1, name: 'Stranded', artist: 'Gojira' },
  { id: 2, name: 'Oblivion', artist: 'Mastodon' },
  { id: 3, name: 'Traced In The Air', artist: 'Cynic' },
  { id: 4, name: 'Ghost of Perdition', artist: 'Opeth' },
  { id: 5, name: 'Failure', artist: 'The Devin Townsend Project' },
  { id: 6, name: 'Bleed', artist: 'Meshuggah' },
  { id: 7, name: 'Flying Whales', artist: 'Gojira' },
  { id: 8, name: 'I Am Above', artist: 'In Flames' },
  { id: 9, name: 'Demiurge', artist: 'Meshuggah' },
  { id: 10, name: 'Amazonia', artist: 'Gojira' },
]
```

Ele é muito semelhante ao nosso array anterior mas como você pode ver existem alguns elementos a mais, com artistas repetidos. Meu objetivo é filtrar esse array e só mostrar as músicas do artista `Gojira`, é possível?

_SIM!_

Exêmplo:

```js
const musicasGojira = musicas.filter(musica => {
  return musica.artist.toLowerCase() === 'gojira'
})

console.log(musicasGojira)

//[
//  { id: 1, name: 'Stranded', artist: 'Gojira' },
//  { id: 7, name: 'Flying Whales', artist: 'Gojira' },
//  { id: 10, name: 'Amazonia', artist: 'Gojira' },
//]
```

## Reduce

Por último, o método que eu considero mais difícil explicar que é o `reduce`. O método `reduce` do javascript é utilizado para "reduzir" um array a um único valor, aplicando uma função acumuladora para cada elemento do array. Ou seja, uma função que vai guardando valor e aplicando o que acumulou aos próximos valores na fila.

Digamos que você tenha as notas dos bimestres de um aluno da disciplina de `Sistemas Operacionais` e queira saber se ele passou ou não;

```js
const notasSO = [6, 8, 9, 8]

const somaNotas = notasSO.reduce((ac, current) => {
  return ac + current
}, 0)

const media = somaNotas / notasSO.length

console.log(media)
//7.75 -> Passou!!
```

> Tá, entendi como funciona mas a sintaxe ta confusa, esse código não faz muito sentido

Concordo.

Por isso vou explicar. O exemplo acima soma todos os elementos do array original. A função acumuladora (a primeira callback) é chamada com dois argumentos: o acumulador (que começa com o valor inicial 0 - por isso daquele zero no final, ou seja, eu posso fazer uma variável e setar o valor inicial que eu quiser) e o valor atual (que é o próximo elemento do array). O acumulador é atualizado com a soma dos dois argumentos e retornado para a próxima chamada da função de acumulador. A variável `somaNotas` conterá o valor final `31`, que é a soma de todos os elementos do array.

Depois eu só peguei e dividi a soma pelo tamanho do nosso array utilizando o `length` deu o resultado final de `7.75`.

Mas voltamos a falar de música, pegamos este array:

```js
const musicas = [
  { id: 1, name: 'Stranded', artist: 'Gojira' },
  { id: 2, name: 'Oblivion', artist: 'Mastodon' },
  { id: 3, name: 'Jaguar God', artist: 'Mastodon' },
  { id: 4, name: 'Ghost of Perdition', artist: 'Opeth' },
  { id: 5, name: 'The Grand Conuration', artist: 'Opeth' },
  { id: 6, name: 'Bleed', artist: 'Meshuggah' },
  { id: 7, name: 'Flying Whales', artist: 'Gojira' },
  { id: 8, name: 'I Am Above', artist: 'In Flames' },
  { id: 9, name: 'Demiurge', artist: 'Meshuggah' },
  { id: 10, name: 'Amazonia', artist: 'Gojira' },
]
```

No caso, eu quero saber quantas músicas cada artista tem nele:

```js
const contaMusica = musicas.reduce((acu, currentValue) => {
  const artist = currentValue.artist

  const artistCount = acu[artist] ? acu[artist] + 1 : 1

  return {
    ...acu,
    [artist]: artistCount,
  }
}, {})

console.log(contaMusica)

// {Gojira: 3, Mastodon: 2, Opeth: 2, Meshuggah: 2, In Flames: 1}
```

Agora, digamos que nosso array de música venha contido em outro array e eu queira transforma-lo num array só... o que eu faço? Ora, símples, uso o `reduce` com outro método:

```js
const minhasMusicas [ musicas, [{ id: 11, name: 'Traced In The Air', artist: 'Cynic' }]];

const concatMusicas = minhasMusicas.reduce((acu, currentValue) => {
  return acu.concat(currentValue);
},[]);

console.log(concatMusicas);

//[
//  { id: 1, name: 'Stranded', artist: 'Gojira' },
//  { id: 2, name: 'Oblivion', artist: 'Mastodon' },
//  { id: 3, name: 'Jaguar God', artist: 'Mastodon' },
//  { id: 4, name: 'Ghost of Perdition', artist: 'Opeth' },
//  { id: 5, name: 'The Grand Conuration', artist: 'Opeth' },
//  { id: 6, name: 'Bleed', artist: 'Meshuggah' },
//  { id: 7, name: 'Flying Whales', artist: 'Gojira' },
//  { id: 8, name: 'I Am Above', artist: 'In Flames' },
//  { id: 9, name: 'Demiurge', artist: 'Meshuggah' },
//  { id: 10, name: 'Amazonia', artist: 'Gojira' },
//  { id: 11, name: 'Traced In The Air', artist: 'Cynic' }
//]

```

## Usando os três ao mesmo tempo

Já sabemos que `map`, `filter` e `reduce` são os 3 métodos mais poderosos para arrays e são extremamente versateis, conversam com outros dos métodos já citados nessa série e tudo mais, são o `diabo nas taquara`. Mas podemos utilizar os 3 ao mesmo tempo?

Sim, podemos!

Digamos que nós temos dois arrays de músicas:

```js
const progMetal = [
  { id: 1, name: 'Stranded', artist: 'Gojira', duration: 257 },
  { id: 2, name: 'Jaguar God', artist: 'Mastodon', duration: 457 },
  { id: 3, name: 'The Ward', artist: 'Opeth', duration: 188 },
  { id: 4, name: 'Bleed', artist: 'Meshuggah', duration: 433 },
  { id: 5, name: 'Silvera', artist: 'Gojira', duration: 199 },
]

const classicRock = [
  { id: 1, name: 'Evil', artist: 'Mercyful Fate', duration: 257 },
  { id: 2, name: 'Roundabout', artist: 'Yes', duration: 498 },
  { id: 3, name: 'Welcome to Hell', artist: 'Venom', duration: 187 },
  { id: 4, name: 'Epitaph', artist: 'King Crimson', duration: 507 },
  { id: 5, name: 'The Wizard', artist: 'Black Sabbath', duration: 252 },
]

const playlist = [progMetal, classicRock]
```

Agora eu quero um array com todas as músicas que tenham mais de 5 minutos de duração e vou utilizar todos os 3 métodos para gerar este último array:

```js
// O primeiro passo é tornar nossos 2 arrays em apenas 1 como fizemos anteriormente
const musicasLongas = playlist
  .reduce((acu, currentValue) => {
    return acu.concat(currentValue)
  }, [])
  //O segundo passo é mapear todas as durações de músicas, transformando segundos em minutos
  .map(musica => {
    return { ...musica, duration: Math.floor(musica.duration / 60) }
  })
  // Tendo o valor da duração de cada música em minutos vamos pegar somente
  // aquelas cuja duração seja maior que 5 e descartas as menores
  .filter(musica => {
    return musica.duration > 5
  })
  //Agora vamos pegar apenas o nome  de cada música
  .map(musica => musica.name)
  // E colocar o separador `,` para uma maior legibilidade
  .join(',')
```

Ou, para uma visualização mais limpa e sem comentários explicando cada ação:

```js
const musicasLongas = playlist
  .reduce((acu, currentValue) => {
    return acu.concat(currentValue)
  }, [])
  .map(musica => {
    return { ...musica, duration: Math.floor(musica.duration / 60) }
  })
  .filter(musica => {
    return musica.duration > 5
  })
  .map(musica => musica.name)
  .join(', ')

console.log(musicasLongas)
//Jaguar God, Bleed, Roundabout, Epitaph
```

E é assim que os 3 podem ser encadeados e criar coisas muito legais.

Mas aí fica a pergunta:

### Por que usar map, filter e reduce?

Além de serem mais performáticos, serem funcionais e versateis, existem alguns pontos que tornam interessante o trabalho com esses métodos:

- O fato de não terem efeitos colaterais pode ser extremamente útil quando você precisa recuperar os valores anteriores;
- Você não usa mais o index, trabalha diretamente com o valor;
- Não há necessidades de usar loops de JS como `for`s e `if`s;

---

**No próximo post:** Ainda sobre arrays ( a gente vai longe), vamos ver exêmplos visuais e musicais para um melhor entendimento de como alguns métodos funcionam, eu irei traduzir um artigo da **Una Kravets** para que você tenha um caminho mais amigável para entender esse assunto que é tão importante.
