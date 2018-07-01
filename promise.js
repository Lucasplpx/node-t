'use strict'

async function buscarCep(cep) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var enderecoRetorno = {
                rua: "Austragesilo de Ataíde",
                bairro: "Betaville",
                numero: 76
            }
            resolve(enderecoRetorno);
        }, 1000);
    })
}

async function executarBuscarCep(){
    var enderecoResultante = await buscarCep(79060231);
    console.log(enderecoResultante);
}

executarBuscarCep();

console.log("Esta mensagem esta escrita depois.")