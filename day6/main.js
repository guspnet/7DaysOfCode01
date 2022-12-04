let frutas = [];
let laticinios = [];
let legumes = [];
let congelados = [];
let doces = [];
let perfumaria = [];
let resposta = "";
let flag = 0;
let item = ""
let categoria = ""

do{
    while(resposta != "sim" && resposta != "não") {
        resposta = prompt(`Deseja adicionar um ítem na lista de compras? Digite sim ou não?`);
        if(resposta === "sim") {
            while(item == "") {
                item = prompt("Qual ítem deseja adicionar?");
                if(item != ""){
                    while(categoria != "frutas" && categoria != "laticinios" && categoria != "legumes" && categoria != "congelados" && categoria != "doces" && categoria != "perfumaria") {
                        categoria = prompt(`Digite uma dessas categorias na qual o ítem deverá ser adicionado: frutas, laticinios, legumes, congelados, doces ou perfumaria.`);
                        switch (categoria) {
                            case "frutas":
                                frutas.push(item);
                                break;
                            case "laticinios":
                                laticinios.push(item);
                                break;
                            case "legumes":
                                legumes.push(item);
                                break;
                            case "congelados":
                                congelados.push(item);
                                break;
                            case "doces":
                                doces.push(item);
                                break;
                            case "perfumaria":
                                perfumaria.push(item);
                                break;
                            default:
                                alert("Está não é uma categoria válida!")
                        }
                    }
                }
            }
        }
        if(resposta === "não") {
            console.log("Lista Finalizada!");
            console.log("Lista de frutas: ");
            for(let i in frutas) {
                console.log(frutas[i]);
            }

            console.log("Lista de laticínios: ");
            for(let i in laticinios) {
                console.log(laticinios[i]);
            }

            console.log("Lista de legumes: ");
            for(let i in legumes) {
                console.log(legumes[i]);
            }

            console.log("Lista de congelados: ");
            for(let i in congelados) {
                console.log(congelados[i]);
            }

            console.log("Lista de doces: ");
            for(let i in doces) {
                console.log(doces[i]);
            }

            console.log("Lista de perfumaria: ");
            for(let i in perfumaria) {
                console.log(perfumaria[i]);
            }
            
            flag = 1;
            break;
        }

    }
    resposta = "";
    item = "";
    categoria = "";
}while(!flag);