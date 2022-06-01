
let mensagem= "";
require("dotenv").config();
const express = require("express");/* riquare > importa arquivos da pasta express como o INDEX.JS LICENÇA, READM */

const path = require("path"); /*É uma biblioteca.  caminho */

const app = express();   /* APP executa o EXPRESS*/

const port = process.env.PORT || 3000;

app.set("view engine", "ejs"); /*  O VIEW mostra o caminho para para  o INDEX.EJS que e o html que vai ser executado quando for chamado no RES.RENDER(INDEX)*/

app.use(express.static(path.join(__dirname, "public"))); /* Mostra onde esta o arquivo EJS E FAz RODAR ATRAVES DO CAMINHO QUE ESTA NA const (PATH) E FAZ RODAR TUDO QUE ESTA NA PASTA PUBLIC*/

app.use(express.urlencoded());/* o cliente envia as informações que vem no (body) que estão no <form action="/creat" method="post"> que é enviada como um documento. "json" */ 
const pokedex = [ /* RECEBE UM ARREY DE OBJETOS que foram cadastrados pelo cliente arrey e oejtos são separados por virgulas*/
  {
    id: 1,
    numero: "001",
    nome: "Bulbasaur",
    tipo: "Glass",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    descricao:
      "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente",
    altura: "0.7 metros",
    peso:"6.9 kg",
    categoria:"Sementes",
    habilidade:"Superar"
  },
  {
  id: 2,
  numero: "004",
  nome: "Charmander",
  tipo: "incendio",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  descricao: "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.",
  altura: "0.6 metros",
  peso:"8.5kg",
  categoria:"lagarto",
  habilidade:"chama"
},

{
  id: 3,
  numero: "015",
  nome: "Beedrill",
  tipo: "incomodar",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
  descricao: "Tem três ferrões venenosos nas patas dianteiras e na cauda. Eles são usados ​​para espetar seu inimigo repetidamente.",
  altura: "1.0 metros",
  peso:"29,5kg",
  categoria:"Abelha Venenosa",
  habilidade:"Enxame"
},

];
/* rotas*/
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
let pokemon = undefined; /* para editar o pokemon  */
app.get("/", (req, res) => { /* O (APP.) chama qualquer função dentro do EXPRESS e executa. (ROTA GET) > Rotas de acesso e feito um requisição que  esta sendo executada faz um requisição e dentro da função apresenta uma resposta ao cliente. O RES.SEND ENVIA  a reposta ao cliente ex: >>res.send("Olá mundo");<< da a resposta na tela e roda o servidor.*/

/* app.get("/", (req, res) => se colocar por exemplopor exemplo RES.SEND("OLA MUNDO"
( "/" )vai mostrar NA PORTA  http://localhost:3000 
)
se colocar APP.GET("/HOME" >> se colocar por exemplopor exemplo RES.SEND("OLA HOME" apos o http://localhost:3000/ APOS O 3000 E COLOCAR UMA (3000/) VAI APARECER HOME)*/
setTimeout(() => {
  mensagem = "";
}, 1000);   
  res.render("index", { pokedex, pokemon, mensagem }); /* O RES.RENDER("INDEX") RODA O EJS NA PASTA VIEWS  e a respoata para o cliente do que esta no HTML*/

/*   res.render("index", { pokedex, pokemon }); quando esta renderizando e mostrar o novo POKEMON ATUALIZADO que esta entre {pokedex, POKEMON}>>
esta mandando ao cliente esse arrey pokedex e consegue acessar a pokedex  no HTML*/
});

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
app.get("/redirecionar", (req, res) => {
  pokemon=undefined
  res.redirect("/")
})
 

app.post("/add", (req, res) => {  
   pokemon = req.body;   
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);  
   pokemon=undefined;
  mensagem = "parabéns seu POKEMON foi cadastrado com sucesso.";

  res.redirect("/")
});

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/


/* detalhes do pokemon*/

 app.get("/detalhes/:id", (req, res) => { 
  const id = +req.params.id;  
 pokemon = pokedex.find(pokemon => pokemon.id === id );
 res.redirect("/");

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

 });






app.listen(port, () =>  
  console.log( `Servidor rodando em http://localhost:${port}`)
);
