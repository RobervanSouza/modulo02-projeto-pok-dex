const closemensagem = document.querySelector("#close");
const mensagem = document.querySelector("#mensagem");
    //zerar o valor do input
    
closemensagem.addEventListener("click",   function ()  {
    mensagem.style.display= "none"
});

setTimeout(() => {
    mensagem.style.display = "none";
}, 5000);