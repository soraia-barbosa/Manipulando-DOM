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
  
  