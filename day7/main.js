let opcao = "";

while(opcao !== "sair") {
    opcao = prompt(`Calculadora em JavaScript!\n Escolha uma das operações a seguir ou digte "sair" para encerrar: \n Para somar, digite: soma.\n Para subtrair, digte: subtracao.\n Para multiplicar, digite: multiplicacao.\n Para dividir, digite: divisao.`);
    
    switch(opcao) {
        case "soma":
            somar();
            break;
        case "subtracao":
            subtrair();
            break;
        case "multiplicacao":
            multiplicar();
            break;
        case "divisao":
            dividir();
            break;
        case "sair":
            break;
        default:
            alert("Opção inválida!")
            break;
    }
}
alert("Calculos finalizados!")

function recebeValores() {
    let valores = [];
    do {
        valores[0] = parseFloat(prompt(`Digite o primeiro valor da operação: \n(Só serão aceitos números!)`));
    }while(isNaN(parseFloat(valores[0])));
    do {
        valores[1] = parseFloat(prompt(`Digite o segundo valor da operação: \n(Só serão aceitos números!)`));
    }while(isNaN(parseFloat(valores[1])));

    return valores;
}

function somar() {
    const valor = recebeValores();
    return alert(`A soma dos valores é: ${valor[0] + valor[1]}`);
}

function subtrair() {
    const valor = recebeValores();
    return alert(`A subtração do primeiro valor pelo segundo valor é: ${valor[0] - valor[1]}`);
}

function multiplicar() {
    const valor = recebeValores();
    return alert(`A multiplicação dos valores é: ${valor[0] * valor[1]}`);
}

function dividir() {
    const valor = recebeValores();
    if(valor[1]){
        return alert(`A divisão é: ${valor[0] / valor[1]}`);
    }else {
        return alert(`Não existe divisão por 0, operação não realizada.`)
    }
    
}