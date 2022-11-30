const botao = document.querySelector("[data-botao]");
const caixamsg = document.querySelector(".mensagem");
const question = document.querySelector(".pergunta");
const radio = document.querySelectorAll("[data-radio]");
const reset = document.querySelector("[data-reset]");
const nome = document.querySelector("#inome");
const idade = document.querySelector("#iidade");
const linguagem = document.querySelector("#ilinguagem");

botao.addEventListener("click", () =>{
    if(nome.value && idade.value && linguagem.value) {
        caixamsg.style.display = "block";
        caixamsg.innerHTML = `<p>Olá ${nome.value}, você tem ${idade.value} anos e já está aprendendo ${linguagem.value}!</p>`
        gostaDeAprender(linguagem.value);

    }else {
        alert("Os dados acima são obrigatórios!")
    }
});

reset.addEventListener("click", () => {
    caixamsg.style.display = "none";
    question.style.display = "none";
    radio.forEach(element => {element.checked = false});
    nome.value = ""
    idade.value = ""
    linguagem.value = ""
});

function gostaDeAprender(linguagem) {
    question.style.display = "block";
    const pergunta = document.querySelector("[data-perguntap]");
    pergunta.innerText = `Você gosta de estudar ${linguagem}?`;

    radio.forEach(elemento => {
        elemento.addEventListener("click", () => {
            if(elemento.value == "sim") {
                caixamsg.innerHTML = "<p>Muito bom! Continue estudando e você terá muito sucesso.</p>"
            } else {
                caixamsg.innerHTML = "<p>Ahh que pena... Já tentou aprender outras linguagens?</p>"
            }
        });
    });
}