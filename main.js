const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPrincipal = document.querySelector(".caixa-perguntas");
const caixaPrincipal = document.querySelector(".caixa-alternativas");
const caixaPrincipal = document.querySelector(".caixa-resultado");
const caixaPrincipal = document.querySelector(".texto-resultado");

const perguntas = [
 pergunta1 {
    
enunciado:"Você gosta de bolo?",
alternativas:[
{
texto:"Alternativa A",
afirmacao:"Você é uma pessoa normal"
},

{
texto:"Alternativa B",
afirmacao:"Você é chato pra caramba"
}]

},

pergunta2{
    
    enunciado:"Você dorme?",
    alternativas:[
    {
    texto:"Sim",
    afirmacao:"Você é uma pessoa normal"
    },
        
    {
    texto:"Não",
    afirmacao:"Você é uma anomalia do universo"
    }]
      
}

]

function mostraPergunta(){

    if(atual > perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas ();
}