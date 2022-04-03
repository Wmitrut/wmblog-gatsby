---
layout: post
title: '#004 - Basicão do JS: Operadores de comparação '
date: 2021-05-15 12:00:00
author: 'Wellington Mitrut'
tags: Javascript, Community, Basicão do Javascript
comments: true
featuredImage: ./gato.jpeg
---

Vamos continuar a série do básicão do Javascript hoje com operadores de comparação, um assunto rápido mas crucial para entender qualquer linguagem de programação.

Coloca o álbum do Muse pra tocar e segue o jogo

<iframe src="https://open.spotify.com/embed/album/1Dh27pjT3IEdiRG9Se5uQn" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

![Gatinho enfermeiro](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yvagjg6kgoiramtztws5.jpg)

## Um pouco de matemática

Seguindo nossa série de posts sobre o basicão do Javascript, hoje trago pra vocês os operadores. O que são operadores? Se você já estudou matemática na escola, provavelmente já conhece os principais :

```bash
+ (adição);
- (subtração);
× (multiplicação);
÷ (divisão);
= (igualdade);
```

Acontece que geralmente os sinais de × (multiplicação), ÷ (divisão) são substituídos em algumas linguagens por \* e / respectivamente pois os símbolos são muito semelhantes a letras que podemos usar como nome de variável como é o caso da multiplicação ou geralmente não estão em todos os tipos de teclado, já estes dois símbolos estão bem acessíveis.

Tá com problema pra lembrar como cada um funciona e sua ordem? Segue abaixo um vídeo explicando em menos de um minuto, não é vergonha não saber ou não lembrar, vergonha é continuar na ignorância.

<iframe width="560" height="315" src="https://www.youtube.com/embed/JQGQu51W6cY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Mas são só nas operações matemáticas que eu utilizo esses operadores? Não, e não são apenas estes operadores básicos. Os operadores são uma parte extremamente importante pois são eles que fazem a mágica acontecer. Vamos aprender os tipos de operadores em JS.

## Operadores de comparação

Operadores de comparação servem para como diz seu nome, comparar dois valores distintos e retornam um resultado booleano (verdadeiro = true ou falso = false) com base na operação.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/szrrw9a467pxoi9j8239.png)

Bem simples não é? Notação fácil de decorar e bem semelhante a matemática comum. Tudo parece um mar de rosas aqui até que você encontra uma particularidade do Javascript. Por não ser uma linguagem fortemente tipada, posso somar um números com string.

**Posso somar 1 + '1'**

E eu posso gerar umas bizarrices lógicas como a seguir:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0ca08sauufhonx4jsdgy.png)

O javascript está tentando mudar totalmente ambos para um tipo que possa comparar os dois, o que nos leva a entender a diferença entre usar igualdade (==) e igualdade estrita (===).

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wqy78ut63ljpop9p1w9a.png)

Com a igualdade estrita você está forçando o Javascript a comparar não só o valor como o tipo de dado que está sendo colocado e tipos de dados nós já vimos lá no primeiro post.
Esse tipo de problema é facilmente detectado por ESLint por exemplo e já foi resolvido por supersets como Typescript.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/85xf241b1ro6su9vsgum.png)

## Operadores de designação

Já vimos de forma indireta os operadores de designação por aqui, são aqueles que usamos para atribuir valores a variáveis com base no valor de igualdade, ou seja, são **combos** de operações.

Abaixo uma tabela de notação para você ter uma referencia em como isso funciona:

![Operadores de designação](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7kv81wme1rx49hyf66pq.png)

**SEMANA QUE VEM: Operadores Aritméticos**

---

## **Links e Fontes**

▶ 🔗 [Boa e Velha MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

▶ 🔗 Acompanhe as lives do [POKEMÃO](https://www.twitch.tv/pokemaobr)!

▶ 🎬 Esta talk do Justin Jackson sobre saúde mental de desenvolvedores:

<iframe width="560" height="315" src="https://www.youtube.com/embed/AfEBby1KRyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## **E mais**

▶ FIQUE EM CASA, COMPRE LOCAL, LAVE A MÃO E USE MÁSCARA.

▶ Você não é obrigado a ser produtivo neste momento, cuide dos seus

▶ Leia, e leia muito se possível. Mas também se respeite e descanse.

▶ Tome vacina. Não existe tratamento precoce, Fora Bolsonaro.

---

[![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r1ziictmcl897ws98mvp.png)](https://www.twitch.tv/wmitrut)
