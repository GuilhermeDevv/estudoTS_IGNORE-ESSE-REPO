"use strict";
// 1 - arrays
const numero = [1, 2, 3];
const nome = ["Guilherme", "Santos"];
// 1.1 - array new sintaxe
const arrayNumberNewSintaxe = [1, 2, 3];
const arrayStringNewSintaxe = ["Guilherme", "santos"];
// 2 - any (não usar essa bagaça!!!!!)
/*
            o any aceita qual quer tipo de valor, se for usar o any pra typescript?????????
            jamais,use,o, any,evite! (respeite as virgulas na leitura, percebera que foi em um tom de raiva!)
            NÃO USE O ANY!!!!!!!!!!!!!!!!!!!!
*/
const arr = [1, 2, 3, "string aqui"];
// 3 - funções
function soma(a, b) {
    return a + b;
}
// 3.1 funções - setando o tipo do retorno da função
function subtracao(a, b) {
    return a - b;
}
// 4 - objetos
function passarCordenadas(cord) { }
/*ou*/
function passarCordenadasTwo(cord) { }
// 5 - propriedades opcionas
/*
        veja a seguir que a propriedade nome é opcional, o uso do '?' define
        que a parametro "sobrenome" é opcinal, ou seja, não é necessario a função
        receber esse parametro.
*/
function nomeUser(nome, sobrenome) { }
// 6 - validação de propriedades opcionais
/*
        as vezes é necessario fazer a validação das propriedades opcionais pois o ts não nos ajuda mais,
        entao usando um if ja resolve fututos problemas.

*/
function gritarNome(nome, sobrenome) {
    if (sobrenome) {
        return `olá ${nome.toUpperCase()} ${sobrenome === null || sobrenome === void 0 ? void 0 : sobrenome.toUpperCase()}`;
    }
    return `olá ${nome.toUpperCase()}`;
}
// 7 - Union types
/*
        serve para defenir multiplos tipos, veja a seguir.
*/
function formatarDinheiro(valor) {
    console.log(`seu saldo é de R$ ${valor}`);
}
formatarDinheiro(1000);
formatarDinheiro("3000");
