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
let indice = -1
refarray = [];

do{
    while(resposta != "sim" && resposta != "não") {
        resposta = prompt(`Deseja adicionar um ítem na lista de compras? Digite sim ou não?\n Para remover algum ítem, digite "remover".`);
        if(resposta === "remover") {
            alert(`Lista Atual:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n  Legumes: ${legumes}\n  Perfumaria: ${perfumaria}`);
            while(item == "") {
                item = prompt("Qual ítem deseja remover?");
                if(item != ""){
                    while(categoria != "frutas" && categoria != "laticinios" && categoria != "legumes" && categoria != "congelados" && categoria != "doces" && categoria != "perfumaria") {
                        categoria = prompt(`Digite uma dessas categorias da qual o ítem deverá ser removido: frutas, laticinios, legumes, congelados, doces ou perfumaria.`);
                        switch (categoria) {
                            case "frutas":
                                indice = frutas.indexOf(item);
                                refarray = frutas;
                                break;
                            case "laticinios":
                                indice = laticinios.indexOf(item);
                                refarray = laticinios;
                                break;
                            case "legumes":
                                indice = legumes.indexOf(item);
                                refarray = legumes;
                                break;
                            case "congelados":
                                indice = congelado.indexOf(item);
                                refarray = congelado;
                                break;
                            case "doces":
                                indice = doces.indexOf(item);
                                refarray = doces;
                                break;
                            case "perfumaria":
                                indice = perfumaria.indexOf(item);
                                refarray = perfumaria;
                                break;
                            default:
                                alert("Está não é uma categoria válida!")
                                categoria = "invalid";
                        }

                        if (categoria !== "invalid" && indice === -1) {
                            alert(`Este item não foi encontrado na lista de ${categoria}.`);
                        }else if(categoria !== "invalid" && indice !== -1) {
                            refarray.splice(indice, 1);
                            alert(`O ítem ${item}, foi removido com sucesso da lista!`);
                            break;
                        }

                    }
                }
            }
        }
        if(resposta === "sim") {
            item = "";
            categoria = "";
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
            flag = 1;
            break;
        }

    }
    resposta = "";
    item = "";
    categoria = "";
}while(!flag);
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n  Legumes: ${legumes}\n  Perfumaria: ${perfumaria}`);