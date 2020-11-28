# Desafio: Fundamentos ReactJS

<h2><a id="user-content-rocket-sobre-o-desafio" class="anchor" aria-hidden="true" href="#rocket-sobre-o-desafio"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji> Sobre o desafio</h2>
<p>Nesse desafio, você deve continuar desenvolvendo a aplicação de gestão de transações, a GoFinances. Agora você irá praticar o que você aprendeu até agora no React.js junto com TypeScript, utilizando rotas e envio de arquivos por formulário.</p>
<p>Essa será uma aplicação que irá se conectar ao seu backend do <a href="https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-database-upload">Desafio 06</a>, e exibir as transações criadas e permitir a importação de um arquivo CSV para gerar novos registros no banco de dados.</p>
<h3><a id="user-content-template-da-aplicação" class="anchor" aria-hidden="true" href="#template-da-aplicação"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Template da aplicação</h3>
<p>Para te ajudar nesse desafio, criamos para você um modelo que você deve utilizar como um template do Github.</p>
<p>O template está disponível na seguinte url: <strong><a href="https://github.com/Rocketseat/gostack-template-fundamentos-reactjs">Acessar Template</a></strong></p>
<p><strong>Dica</strong>: Caso não saiba utilizar repositórios do Github como template, temos um guia em <strong><a href="https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-desafios">nosso FAQ</a>.</strong></p>
<p>Agora navegue até a pasta criada e abra no Visual Studio Code, lembre-se de executar o comando <code>yarn</code> no seu terminal para instalar todas as dependências.</p>
<h3><a id="user-content-preparando-o-backend" class="anchor" aria-hidden="true" href="#preparando-o-backend"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Preparando o backend</h3>
<p>Antes de tudo, para que seu frontend se conecte corretamente ao backend, vá até a pasta do seu <code>backend</code> e execute os comandos <code>yarn add cors</code> e depois <code>yarn add @types/cors -D</code>.</p>
<p>Depois disso vá até o seu <code>app.ts</code> ainda no backend, e importe o <code>cors</code> e adicione <code>app.use(cors())</code> antes da linha que contém <code>app.use(routes)</code>;</p>
<p>Além disso, tenha certeza que as informações da categoria, estão sendo retornadas junto com a transação do seu backend no formato como o seguinte:</p>
<div class="highlight highlight-source-json"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>id<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>c0512e43-6589-4dc8-bd0c-2a3f71b347aa<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>title<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Loan<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>type<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>income<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>value<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>1500.00<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>category_id<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>d93eccc7-64bb-4268-b825-9200103f3a8b<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>created_at<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>2020-04-20T00:00:49.620Z<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>updated_at<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>2020-04-20T00:00:49.620Z<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>category<span class="pl-pds">"</span></span>: {
    <span class="pl-s"><span class="pl-pds">"</span>id<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>d93eccc7-64bb-4268-b825-9200103f3a8b<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>title<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Others<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>created_at<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>2020-04-20T00:00:49.594Z<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>updated_at<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>2020-04-20T00:00:49.594Z<span class="pl-pds">"</span></span>
  }
}</pre></div>
<p>Para isso, você pode utilizar a funcionalidade de eager loading do TypeORM, adicionando o seguinte na sua model de transactions:</p>
<div class="highlight highlight-source-js"><pre>@<span class="pl-v">ManyToOne</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-v">Category</span><span class="pl-kos">,</span> <span class="pl-s1">category</span> <span class="pl-c1">=&gt;</span> <span class="pl-s1">category</span><span class="pl-kos">.</span><span class="pl-c1">transaction</span><span class="pl-kos">,</span> <span class="pl-kos">{</span> <span class="pl-c1">eager</span>: <span class="pl-c1">true</span> <span class="pl-kos">}</span><span class="pl-kos">)</span>
@<span class="pl-v">JoinColumn</span><span class="pl-kos">(</span><span class="pl-kos">{</span> <span class="pl-c1">name</span>: <span class="pl-s">'category_id'</span> <span class="pl-kos">}</span><span class="pl-kos">)</span>
category: <span class="pl-v">Category</span><span class="pl-kos">;</span></pre></div>
<p>Lembre também de fazer o mesmo na model de Category, mas referenciando a tabela de Transaction.</p>
<div class="highlight highlight-source-js"><pre>@<span class="pl-v">OneToMany</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-v">Transaction</span><span class="pl-kos">,</span> <span class="pl-s1">transaction</span> <span class="pl-c1">=&gt;</span> <span class="pl-s1">transaction</span><span class="pl-kos">.</span><span class="pl-c1">category</span><span class="pl-kos">)</span>
transaction: <span class="pl-v">Transaction</span><span class="pl-kos">;</span></pre></div>
<h3><a id="user-content-layout-da-aplicação" class="anchor" aria-hidden="true" href="#layout-da-aplicação"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Layout da aplicação</h3>
<p>Essa aplicação possui um layout que você pode seguir para conseguir visualizar o seu funcionamento.</p>
<p>O layout pode ser acessado através da página do Figma, no <a href="https://www.figma.com/file/EgOhyj1Inz14dhWGVhRlhr/GoFinances?node-id=1%3A863" rel="nofollow">seguinte link</a>.</p>
<p>Você precisará uma conta (gratuita) no Figma pra inspecionar o layout e obter detalhes de cores, tamanhos, etc.</p>
<h3><a id="user-content-funcionalidades-da-aplicação" class="anchor" aria-hidden="true" href="#funcionalidades-da-aplicação"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Funcionalidades da aplicação</h3>
<p>Agora que você já está com o template clonado e pronto para continuar, você deve verificar os arquivos da pasta <code>src</code> e completar onde não possui código, com o código para atingir os objetivos de cada rota.</p>
<ul>
<li><strong><code>Listar as transações da sua API</code></strong>: Sua página <code>Dashboard</code> deve ser capaz de exibir uma listagem através de uma tabela, com o campo <code>title</code>, <code>value</code>, <code>type</code> e <code>category</code> de todas as transações que estão cadastradas na sua API.</li>
</ul>
<p><strong>Dica</strong>: Você pode utilizar a função <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat" rel="nofollow">Intl</a> para formatar os valores. Dentro da pasta <code>utils</code> no template você encontrará um código para te ajudar.</p>
<ul>
<li>
<p><strong><code>Exibir o balance da sua API</code></strong>: Sua página <code>Dashboard</code>, você deve exibir o balance que é retornado do seu backend, contendo o total geral, junto ao total de entradas e saídas.</p>
</li>
<li>
<p><strong><code>Importar arquivos CSV</code></strong>: Na sua página <code>Import</code>, você deve permitir o envio de um arquivo no formato <code>csv</code> para o seu backend, que irá fazer a importação das transações para o seu banco de dados. O arquivo csv deve seguir o seguinte <a href="https://github.com/Rocketseat/bootcamp-gostack-desafios/blob/master/desafio-database-upload/assets/file.csv">modelo</a>.</p>
</li>
</ul>
<p><strong>Dica</strong>: Deixamos disponível um componente chamado <code>Upload</code> na pasta <code>components</code> para você ter já preparado uma opção de drag-n-drop para o upload de arquivos. PS: Caso você esteja no windows e esteja sofrendo com algum erro ao tentar importar CSV, altere o tipo de arquivo dentro do arquivo <code>components/upload/index.ts</code> de <code>text/csv</code> para <code>.csv, application/vnd.ms-excel, text/csv</code>.</p>
<p><strong>Dica 2</strong>: Utilize o <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/FormData/FormData" rel="nofollow">FormData()</a> para conseguir enviar o seu arquivo para o seu backend.</p>
<h3><a id="user-content-específicação-dos-testes" class="anchor" aria-hidden="true" href="#específicação-dos-testes"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Específicação dos testes</h3>
<p>Em cada teste, tem uma breve descrição no que sua aplicação deve cumprir para que o teste passe.</p>
<p>Caso você tenha dúvidas quanto ao que são os testes, e como interpretá-los, dé uma olhada em <strong><a href="https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-desafios">nosso FAQ</a>.</strong></p>
<p>Para esse desafio, temos os seguintes testes:</p>
<ul>
<li><strong><code>should be able to list the total balance inside the cards</code></strong>: Para que esse teste passe, sua aplicação deve permitir que seja exibido na sua Dashboard, cards contendo o total de <code>income</code>, <code>outcome</code> e o total da subtração de <code>income - outcome</code> que são retornados pelo balance do seu backend.</li>
</ul>
<ul>
<li><strong><code>should be able to list the transactions</code></strong>: Para que esse teste passe, sua aplicação deve permitir que sejam listados dentro de uma tabela, toda as transações que são retornadas do seu backend.</li>
</ul>
<p><strong>Dica</strong>: Para a exibição dos valores na listagem de transações, as transações com tipo <code>income</code> devem exibir os valores no formado <code>R$ 5.500,00</code>. Transações do tipo <code>outcome</code> devem exibir os valores no formado <code>- R$ 5.500,00</code>.</p>
<ul>
<li><strong><code>should be able to navigate to the import page</code></strong>: Para que esse teste passe, você deve permitir a troca de página através do Header, pelo botão que contém o nome <code>Importar</code>.</li>
</ul>
<p><strong>Dica</strong>: Utilize o componente <code>Link</code> que é exportado do <code>react-router-dom</code>, passando a propriedade <code>to</code> que leva para a página <code>/import</code>.</p>
<ul>
<li><strong><code>should be able to upload a file</code></strong>: Para que esse teste passe, você deve permitir que um arquivo seja enviado através do componente de drag-n-drop na página de <code>import</code>, e que seja possível exibir o nome do arquivo enviado para o input.</li>
</ul>
<p><strong>Dica</strong>: Deixamos disponível um componente chamado <code>FileList</code> na pasta <code>components</code> para ajudar você a listar os arquivos que enviar pelo componente de <code>Upload</code>, ele deve exibir o título do arquivo e o tamanho dele.</p>
