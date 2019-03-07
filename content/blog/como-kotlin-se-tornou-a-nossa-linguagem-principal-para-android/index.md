---
layout:     post
title:      "Como Kotlin se tornou a nossa linguagem principal para Android"
date:       2017-04-17 12:00:00
author:     "Wellington Mitrut"
tags:       Android, Kotlin, Traduções
comments:   true
featuredImage: "./top.png"
---

![Capa](./top.png)

> Esse artigo é uma tradução livre, adaptada e autorizada de “How Kotlin Became our primary language for Android”, publicada por <a href="https://medium.com/uptech-team/how-kotlin-became-our-primary-language-for-android-3af7fd6a994c#.g3n193eyl" target="_blank">Dima Kovalenko</a> autorizada pelo próprio autor. Acesse e recomende também o post original abaixo.

Alguns meses atrás nossa equipe resolveu tentar uma coisa nova: desenvolver uma aplicação comercial totalmente em Kotlin, uma nova linguagem de programação da JetBrains. Nós já haviamos tido uma experiência com Kotlin anteriormente, mas em uma escala muito menor: convertemos algumas partes de alguns aplicativos para essa nova linguagem ou então alguns projetinhos particulares. No entanto, o desenvolvimento de um aplicativo comercial em uma nova linguagem de programação tem alguns problemas a se considerar:

* Nós estavamos muito acostumados com Java para Android. Mudar para Kotlin foi difícil, especialmente para desenvolvedores sem nenhuma experiência anterior com a tal programação funcional.

* Algumas coisas simplesmente não funcionam. Dagger por exêmplo, não funcionou bem pra nós.

Tudo isso poderia nos levar a perder prazos e a questões mais escabrosas sobre a estabilidade da aplicação.

Tinhamos que ter bons motivos para fazer a transição. Nosso maior incentivo foi a crença de que Kotlin vai ser uma mudança de jogo para o Android. E claro, por que é divertido.

Mantendo essa vontade de desenvolver em Kotlin, começamos a desenvolver o aplicativo <a href="https://uptech.team/#portfolio" target="_blank">Voter</a>.

### Um pouco sobre Kotlin

Kotlin é uma linguagem JVM com interoperabilidade 100% de acordo com o Java, e se você estiver familiarizado com Java, aprender Kotlin é fácil. No entanto, se você quiser tirar melhor proveito da linguagem, **entender conceitos de programação funcional é essencial**.

![Yoda](./yoda.jpeg)

> Funcional programação difícil de aprender é. Paciência tenha

E olha que a tal de programação funcional não é fácil. Pelo menos no começo. Até que ela se torna divertida. Eu recomendo fortemente que você faça alguns cursos como o do Martin Ordersky chamado<a href="https://www.coursera.org/specializations/scala" target="_blank">“Functional Programming in Scala”</a>.

Scala pode ser um saco às vezes, mas dá uma grande visão geral da nova mentalidade de programação funcional. Você pode tratar Kotlin como uma versão mais simples e legal do Scala.

### O que nos fez mudar para o lado Kotlin da força?

![Kylo vs Rey and Finn](./kylo.jpeg)

### O jeito ‘Programação funcional’ de ser

Como eu já disse antes, Kotlin é 100% interoperável com Java. Além disso, Kotlin é uma linguagem funcional. E isto quer dizer que permite escrever um código mais elegante e expressivo.

#### 1. Funções puras

O conceito de uma função pura (uma função que não tem efeitos colaterais) é o conceito funcional mais importante que nos permitiu reduzir muito a complexidade do código e livrar-se dos estados mais mutáveis e problemáticos.

> Em linguagens de programação imperativas, como JavaScript, Java e C #, os efeitos colaterais estão em toda parte. Isso torna o debug muito difícil porque uma variável pode ser alterada em qualquer lugar no seu algorítmo. Então, quando você tem um bug porque uma variável é alterada para um valor errado na hora errada, onde você olha? Em todo o código? Isso não é bom.

Observe que como manipulamos os dados sem alterar o conteúdo.

```kotlin
    fun flatTree(tree: TreeNode): List<TreeNode> 
    =  listOf(tree, *tree.children.flatMap(::flatTree).toTypedArray())
```

#### 2. Funções de alta-ordem

> Funções de alta-ordem tomam funções como parâmetros, como retorno ou como ambas.

Funções de alta-ordem estão em toda parte. Você só passa funções para coleções fazendo com que o código fique fácil de ler. titles.map { it.toUpperCase()}. Parece até linguagem natural. Não é maravilhoso?

Vamos imaginar uma situação onde nós queremos contar o número de mensagens não lidas de diferentes tipos. Seria mais ou menos assim:

```kotlin
    private fun getUnreadCountFromUsers() {
        val conversations = datasource.getConversations()
        var count = 0
        for (conversation in conversations) {
        if (conversation.recipientId != null) {
            for (message in conversation.messages) {
            if (message.unread) {
                count += 1
            }
            }
        }
        }
    }

    private fun getNumberOfUnreadAttachmentsInGroupConversations() {
        val conversations = datasource.getConversations()
        var count = 0
        for (conversation in conversations) {
        if (conversation.groupId != null) {
            for (message in conversation.messages) {
            if (message.unread && message.type == MessageType.ATTACHMENT) {
                count += 1
            }
            }
        }
        }
    }
```

Quando são introduzidos novos requisitos, o código se torna ilegível e incontrolável. Vamos ver como podemos resolver este problema com funções de alta-ordem:

```kotlin
     private fun getNumberOfAttachmentsInGroupConvesationsFun() {
    return getCount({conv -> conv.groupId != null}, 
    {it -> it.type == MessageType.ATTACHMENT && it.unread})
  }

  private fun getUnreadCountFromUsersFun() {
    return getCount({conv -> conv.recipientId != null}, {message -> message.unread})
  }

  private fun getTotalNumberOfMessages() = getCount({true}, {true})

  private fun getCount(convFilter: (Conversation) -> 
  Boolean, messageFilter: (Message) -> Boolean) {
    datasource.getConversations()
        .filter(convFilter)
        .flatMap { it.messages }
        .filter(messageFilter)
        .fold(0, { count, message -> count + 1})
  }
```
E podemos imaginar casos de uso onde gostaríamos de parametrizar o argumento da função *fold* para calcular o produto das mensagens não lidas.

Outro exemplo de uso de funções de alta-ordem é a substituição de vários Listeners por uma função alta-ordem simples:

```kotlin
    BillingView : LinearLayout {
    var billingChangeListener: (() -> Unit)? = null
    ...
    }
    ... // in an activity far, far away
    billingView.billingChangeListener { updateUI() }
```
#### 3. Imutabilidade
A imutabilidade torna mais fácil escrever, usar e raciocinar sobre o código (classes são estabelecidas uma vez e, em seguida, inalteradas).

O estado interno dos componentes da sua aplicação será mais consistente. Kotlin reforça a imutabilidade introduzindo *val* , bem como as collections do Kotlin, que são imutáveis por padrão.

Uma vez que o *val* ou uma collection é inicializada, você pode ter certeza sobre sua validade. Veja um exêmplo para uma definição mais precisa de *val*:

```kotlin
    data class Address(val line1: String, val city: String)
    val items = listOf(Address("242 5th St", "Los Angeles"),  
    Address("Dovzhenka St. 5", "Kiev"))
```

#### Null-safety

Esse recurso de linguagem nos fez pensar cuidadosamente sobre a nulidade de campos em nossas classes de modelo. Anteriormente, você não tinha certeza qual campo no DTO foi inicializado ou não, as anotações @Nullable e @NotNull ajudavam, mas nem tanto.

Agora, com Kotlin, você sabe exatamente qual campo pode ser nulo, qual campo é inicializado mais tarde (por exemplo, campos injetados com Dagger) e você tem controle estrito sobre esses campos.

Resultado? Quase sem NullPointerExceptions.

```kotlin
    brand?.let { badge.enabled = brand.isNewBadge }
    // também pode ser escrito assim: 
    badge.enabled = brand?.isNewBadge?:false
```
#### Anko

Anko DSL é uma grande biblioteca que simplifica significativamente o trabalho com views, threads e ciclo de vida de activities do android. <a href="https://github.com/Kotlin/anko" target="_blank">A descrição no Github</a> afirma que Anko é *“Desenvolvimento de aplicativos Android agradável”* e realmente provou ser assim mesmo.

```kotlin
    selector(items = listOf("Like", "Dislike") {
        when (it) {
        0 -> if (!liked) likePost()
        else -> if (!disLiked) disLikePost()
        }
    }
            
    doAsync {
        // Long background task
        uiThread {
        alert(R.string.could_not_log_in) {
            yesButton { dismiss() }
            cancellable = false
        }.show()
        }
    }
```
Observe que quando o uiThread é chamado dentro da activity, o bloco não será executado se isFinishing fortrue. Nós não usamos esse recurso pois o RxJava lida com todos os threading em nossos aplicativos, mas é algo válido de se lembrar.

Usando Anko ao invés de XML. Embora Anko não esteja pronto para substituir a build padrão da UI do android,às vezes pode ser muito útil.


```kotlin
    verticalLayout() {
        friendsPanel = friendsPanel.with(friendsData).lparams(width = matchParent)

        politicalMapCardView {
            setMarker(quizManager.getMarker())
        }.lparams(width = matchParent) { topMargin = dip(10) }

        cardView() {
            verticalLayout() {
            topPadding = dip(5)
            textView(getString(R.string.register_question))
            blueButtonView(text="Register here") {
                onClick { browse("https://www.uptech.team") }
            }
            }
        }.lparams(width = matchParent) {
            topMargin = dip(10)
            bottomMargin = dip(20)
        }
    }
```
Como você pode ver, Anko DSL permite que você use custom views junto com as views padrões do Android. Isto é uma grande vantagem sobre XML padrão.

#### Kotlin Android extensions: Removendo a necessidade de usar ButterKnife

```java
    @Bind(R.id.first_name)
    protected EditText firstName;

    @Bind(R.id.last_name)
    protected EditText lastName;

    @Bind(R.id.address_line1)
    protected EditText addressLine1;

    @Bind(R.id.address_line2)
    protected EditText addressLine2;

    @Bind(R.id.zip_code)
    protected EditText zipCode;

    @Bind(R.id.state)
    protected TextView state;

    @Bind(R.id.state_spinner)
    protected HintSpinner stateSpinner;

    @Bind(R.id.city)
    protected EditText city;

    @Bind(R.id.frag_shipping_address_save_btn)
    protected Button saveBtn;

    @Bind(R.id.agreement)
    protected TextView agreement;

    @Bind(R.id.email)
    protected EditText email;

    @Bind(R.id.password)
    protected EditText password;

    @Bind(R.id.create_account_container)
    protected LinearLayout accountContainer;

    @Bind(R.id.member_container)
    protected LinearLayout memberContainer;

    @Bind(R.id.logged_in_title)
    protected TextView loggedInTitle;

    @Bind(R.id.user_email)
    protected TextView userEmail;

    @Bind(R.id.sign_out)
    protected TextView signOut;

    @Bind(R.id.scrollview)
    protected ScrollView scrollView;

    @Bind(R.id.dummy)
    protected EditText dummyView;
```

Ainda entediado? Então acho que você desceu aqui sem ler o artigo. 

Em Kotlin, você não precisa de nada disso. Você pode fazer referência à sua propriedade de exibição pelo seu parâmetro @ id , essas propriedades teriam o mesmo nome declarado em seu arquivo XML. Mais informações podem ser encontradas direro na <a href="https://kotlinlang.org/docs/tutorials/android-plugin.html" target="_blank" >documentação oficial.</a>

### Outras funcionalidades interessantes

#### Extension functions & Construtores


```kotlin
    items = StoreInfo().apply { storeItems = fetchItems() }.let { manager.process(it) }
    container.apply {
        removeAllViews()
        items.forEach { addView(ShopItemView(context).withData(it)) }
    }

    fun ShopItemView.withData(item: StoreItem): ShopItemView {
        title = item.title
        image = item.image
        Brand.findById(item.id)?.let { brandName = it.name }
    }
```

*apply*, *let* e *extension functions* podem ser facilmente usadas para criar construtores elegantes.

### 2. Uma dica para os Padawans

Nos primeiros dias, você vai muitas vezes empacar em um problema: você talvez não saiba como escrever uma expressão bastante simples de Java em Kotlin.

O truque é escrever o código em Java e depois colá-lo em um arquivo Kotlin. Graças ao pessoal da JetBrains, ele é convertido automaticamente para o Kotlin. Gambiarra? Sim, mas funciona!

### 3. Livre-se de dependências desnecessárias e outras porcarias

Kotlin substitui um monte de bibliotecas de terceiros, como ButterKnife, Google Autovalue, Retrolambda, Lombok e alguma coisa de RxJava.

### Enfim…

Como uma equipe de desenvolvimento de software, o principal desafio que temos é entregar grandes produtos e sermos eficazes em nosso trabalho.

Embora para começar a desenvolver de forma eficaz em Kotlin você precisa de algum conhecimento prévio programação funcional, investir um tempo para aprendê-la realmente compensa.

Acredito que Kotlin seja uma grande melhoria em relação ao desenvolvimento convencional de aplicativos Android, o que nos permite oferecer excelentes aplicativos em tempo e com MUITO menos bugs.

Sinta-se livre para fazer perguntas, teremos o maior prazer em ajudar-nos uns aos outros nesta transição. Compartilhe seus pensamentos / comentários abaixo!

> Programming is the most fun you can have with your clothes on. <br> John Guttag

### Referências

- <a href="https://kotlinlang.org/docs/reference/" target="_blank" >Documentação do Kotlin.</a>

- <a href="https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536#.8cmkitum2" target="_blank" >So You Want to be a Functional Programmer</a>

- <a href="https://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf" target="_blank" >Why Functional Programming Matters</a>

- <a href="https://www.linkedin.com/pulse/20140528113353-16837833-6-benefits-of-programming-with-immutable-objects-in-java" target="_blank" >6 Benefits of Programming with Immutable Objects in Java</a>

- <a href="http://maximomussini.com/posts/anko-vs-android-xml/" target="_blank" >Anko DSL vs Android XML-First</a>

- <a href="https://medium.com/keepsafe-engineering/lessons-from-converting-an-app-to-100-kotlin-68984a05dcb6#.jkxs39qkon" target="_blank" >Lessons from converting an app to 100% Kotlin</a>

- <a href="https://play.google.com/store/apps/details?id=app.voter.xyz&hl=en" target="_blank" >Result: Voter Application. 99.8% crash-free users.</a>

- <a href="https://artemzin.com/blog/kotlin-val-does-not-mean-immutable-it-just-means-readonly-yeah/" target="_blank" >Kotlin: val does not mean immutable, it just means readonly</a>