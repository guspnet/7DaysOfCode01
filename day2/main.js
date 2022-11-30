const botao = document.querySelector("[data-botao]");
const caixamsg = document.querySelector(".mensagem");
const question = document.querySelector(".pergunta");

botao.addEventListener("click", () =>{

    const nome = document.querySelector("#inome").value;
    const idade = document.querySelector("#iidade").value;
    const linguagem = document.querySelector("#ilinguagem").value;

    if(nome && idade && linguagem) {
        caixamsg.style.display = "block";
        caixamsg.innerHTML = `<p>Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!</p>`
        gostaDeAprender(linguagem);

    }else {
        alert("Os dados acima são obrigatórios!")
    }
});

function gostaDeAprender(linguagem) {
    question.style.display = "block";
    const rbotao = document.querySelector("[data-rbotao]");
    const pergunta = document.querySelector("[data-perguntap]");
    pergunta.innerText = `Você gosta de estudar ${linguagem}?`;

    rbotao.addEventListener("click", () => {
        let opcao = "0"
        const radio = document.querySelectorAll("[data-radio]");
        radio.forEach(elemento => {
            if (elemento.checked) {
                opcao = elemento.value;
            }
        });
        if(opcao === "0") {
            alert('Escolha Sim ou Não!')
        }else {
            if(opcao === "sim") {
                caixamsg.innerHTML = "<p>Muito bom! Continue estudando e você terá muito sucesso.</p>";
            }else {
                caixamsg.innerHTML = "<p>Ahh que pena... Já tentou aprender outras linguagens?</p>";
            }
        }
    });
}