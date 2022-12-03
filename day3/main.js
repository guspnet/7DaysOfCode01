console.log("Escolhas da sua carreira!");
let carreira = "";
let linguagem = "";
let nomeling = ["React", "Vue", "C#", "Java"]
let especializar = "";
let tecnologia ="";
let flag = "1"

while (carreira !== "1" && carreira !== "2") {
    carreira = prompt("Qual carreira deseja seguir? Digite 1 para Front-End ou 2 para Back-End.");
}

while (linguagem !== "1" && linguagem !== "2") {
    if (carreira === "1") {
        linguagem = prompt("Dentro da Carreira Front-End, escolha uma opcão a seguir: Digite 1 para aprender React ou 2 para aprender Vue.");
    }
    if (carreira === "2") {
        linguagem = prompt("Dentro da Carreira Back-End, escolha uma opcão a seguir: Digite 1 para aprender C# ou 2 para aprender Java.");
    }    
}

while (especializar !== "1" && especializar !== "2") {
    switch (carreira) {
        case "1":
            especializar = prompt(`Você deseja continuar se especializando no front-end e focando no ${linguagem === "1" ? nomeling[0] : nomeling[1]} ou pretende aprender back-end para se tornar um desenvolvedor Fullstack? Digite 1 para continuar se especializando no front-end ou 2 para partir para o back-end.`);
            break;
        case "2":
            especializar = prompt(`Você deseja continuar se especializando no back-end e focando no ${linguagem === "1" ? nomeling[2] : nomeling[3]} ou pretende aprender front-end para se tornar um desenvolvedor Fullstack? Digite 1 para continuar se especializando no back-end ou 2 para partir para o front-end.`);
            break;
    }
}

do {
    
    flag = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Se sim, digite 1 se quiser me contar.");
    

    if (flag === "1") {
        tecnologia = prompt("Qual é a tecnologia que deseja aprender?")
        alert(`${tecnologia} é bem legal, continue estudando!`)
    }

}while (flag === "1");



