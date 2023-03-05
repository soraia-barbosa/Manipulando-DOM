<h1> projeto-curso-manipulandoDOM </h1>

<ul>Conteúdos
  <li><p>Visão Geral</p></li> 
    <li><p>Meu processo</p></li>
  
  </ul>

<h1>Visão geral</>

   <h2>O Desafio</h2>
  <p>Este projeto faz parte do curso: "JavaScript: manipulando o DOM". A Terra está sofrendo uma invasão alienígena e um robô é montado para juntar as forças de defesa do planeta. Para montar o Robotron é preciso adicionar peças na engrenagem que compõe um robô e ver as estatísticas atualizadas dinamicamente, tudo isso com JavaScript. </p>
  
 
<h1>Meu processo</>
  <h2>Aprendizados</h2>


  <li>Para selecionar elementos, podemos utilizar querySelector()/querySelectorAll().</li>
  <li>A função é uma forma de armazenarmos códigos que serão repetidos várias vezes. A função é usada para que esse código seja chamado mais de um vez.</li>
  <li>Nessa linguagem, podemos criar uma função anônima, ou seja, uma função sem nome. Se ao clicar no Robotron, nós quisessemos que algum código fosse executado apenas uma vez, poderíamos usar uma função anônima.</li>
  <li>Função anônima só pode ser executada uma vez. Se uma função é nomeada, ela é "conhecida" porque já foi declarada antes e pode ser executada novamente.</li>
  <li>As novas versões do JavaScript a partir do ES6 ainda têm uma forma diferente de declaramos uma função anônima. No lugar de usarmos function(), nós abrimos parênteses e colocamos uma seta formada por um sinal de igual e um maior =>. Com isso, economizamos na escrita de uma função, mas continuamos identificando-a claramente como um função anônima. Essa é uma arrow function (em tradução livre: função de setas) para declarar a função que não será nomeada novamente.</li>
  <li>É possível chamar uma função  antes mesmo dela ter sido declarada. Hoisting é o termo que explica essa situação, em português ele significa “içamento”, ou “elevação”. O Hoisting permite que você execute funções antes das suas declarações. Na prática, inicialmente as declarações de funções são colocadas na memória durante a fase de compilação e, mesmo assim, permanecem no mesmo lugar que estão digitadas.</li>
  <li>A utilização de Hoisting em var, let e cont não é indicada, pois a variável criada é elevada para o escopo, mas sem o seu valor.</li>
  <li>Data-attributes: são utilizados para guardar valores em elementos HTML. Esses valores podem ser manipulados através do JavaScript. Também é possível estilizar elementos HTML com CSS referenciando o seu data-attribute. O prefixo data- não é obrigatório para definir um data-attribute personalizado.</li>
  <li>O toggleClass() é um método do jQuery que adiciona ou remove uma classe CSS de um determinado elemento, o seu uso mais comum eu diria que é para renderizar ou não determinado elemento HTML, esse efeito conhecido como hide/show funciona adicionando e removendo uma classe com um display: none, mas o toggleClass() é útil para qualquer efeito de mudanças de CSS.</li>
  <li>artigo: http://www.maujor.com/blog/2009/06/22/efeito-jquery-toggle-para-revelar-e-esconder/#:~:text=permite%20inserir%20muito%20conte%C3%BAdo%20em,cria%20impacto%20visual%20interessante.</li>
  <li>O toggle permite inserir muito conteúdo em pouco espaço; facilita a visualização e entendimento dos conteúdos; proporciona interação agradável com o usuário; cria impacto visual interessante.</li>
  <li>Na linguagem JavaScript, objetos podem ser definidos como uma coleção de dados. Para criar um objeto JavaScript, pode-se utilizar chaves { }:
  var livro = { 
titulo: "Cangaceiro JavaScript",  
autor: "Flávio Almeida", 
genero: "Front-end", 
editora: "Casa do código", 
preco:31,92
}
  </li>
  <li>Os objetos em JavaScript têm pares de valor de propriedade, assim como um livro físico por exemplo, título: Senhor dos anéis. A maioria dos livros tem as mesmas propriedades, mas os valores das propriedades diferem de um livro para outro.</li>
  <li>Pode-se, tbm, inserir uma lista dentro de um objeto JavaScript [].
  var livros = [

    {titulo: "Cangaceiro JavaScript",  
    autor: "Flávio Almeida", 
    genero: "Front-end", 
    editora: "Casa do código", 
    preco: 31.92},

    {titulo: "Introdução e boas práticas em UX Design",  
    autor: "Fabricio Teixeira", 
    genero: "UX & UI", 
    editora: "Casa do código", 
    preco: 31.92},

    {titulo: "Scrum",  
    autor: "Rafael Sabbagh", 
    genero: "Métodos Ágeis", 
    editora: "Casa do código", 
    preco: 31.92},
]

console.log(livros[0]["autor"])
console.log(livros[0].autor) </li>
  <li>É possível acessar propriedades de objetos utilizando ponto . ou array []:
  livro.preco/ console.log(livros[0]["autor"])
              console.log(livros[0].autor)</li>
<li>Para alterar o valor da propriedade genero do livro “Introdução e boas práticas em UX Design”, por exemplo, é possível fazer da seguinte forma:

livros[1].genero = "UX e Design"</li>
<li>Podemos inserir novos valores em objetos utilizando ponto . ou array []:

Agora vamos conferir como adicionar uma nova propriedade chamada estoque, junto do seu valor, no primeiro livro da nossa lista:

livros[0].estoque = "11 unidades"</li>
<li>Podemos deletar valores de algum atributo, digitando delete + o índice do seu valor da seguinte forma:

delete livros[1].autor. Também podemos deletar o livro do índice 1 e seus valores por completo:

delete livros[1]. E ao consultar digitando livros[1] será retornado: undefined. 
</li>
<li>Utilizando thi e window
Em JavaScript, é possível utilizar o this para acessar o objeto window.

console.log(this === window); // true. O window representa uma janela que contém o elemento DOM da página acessada. No objeto window é definida todas variáveis globais e funções que são executadas em um navegador. </li>
<li>Com this é possível também acessar um objeto e suas propriedades:
var livros = {
    titulo: "Cangaceiro JavaScript",  
    autor: "Flávio Almeida", 
    genero: "Front-end", 
    editora: "Casa do código", 
    preco: 31.92,
    chamaLivro: function() {
        return this.autor;
    }
}
console.log('O autor do livro se chama ' + livros.chamaLivro())</li>
<li>No exemplo acima, o this é uma representação do objeto livros. E será retornado no console:

O autor do livro se chama Flávio Almeida</li>
<li>Alterando propriedades de um objeto com this:
var livros = {
    titulo: "Cangaceiro JavaScript",  
    autor: "Flávio Almeida", 
    genero: "Front-end", 
    editora: "Casa do código", 
    preco: 31.92,
    alteraAutor: function() {
        return this.autor = "Pedro Marins";
    },
}

console.log('É possível alterar o nome do autor para ' + livros.alteraAutor())
No console será retornado “É possível alterar o nome do autor para Pedro Marins”.
</li>
<li>

Atenção ao uso do this
Quando utilizado no escopo global, o this tem valor do objeto window.</li>
<li>Definimos o que são objetos e analisamos métodos para manipulá-los;
Refatoramos o código do projeto, aprendendo como manipular arrays e utilizando forEach.</li>



  