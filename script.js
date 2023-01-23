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
function somaa(a, b) {
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
function monstrarId(id) {
    return `o seu id é ${id}`;
}
const pessoas = { nome: "GUILHERME", idade: 17 };
/*
        uma interface é uma forma de garantir que um objeto possui certos atributos e métodos.
        Ela define uma estrutura que um objeto deve seguir, mas não fornece a implementação dos métodos.
        Isso permite que você garanta a compatibilidade de tipos entre diferentes objetos e também facilita a criação de classes que implementam essa interface.

*/
function freeShow(obj) { }
/*
parece uma substituição de tipos do interface mas não, é uma implementação, veja APERTANDO O CTRL + SPACE dentro do objeto a seguir
*/
const dado = {
    nome: "GL",
    idade: 17,
};
const dadoTWO = {
    nome: "GL",
    idade: 17,
    cpf: "123.456.789-10",
};
function usoDoIn(pessoa) {
    if ("cpf" in pessoa) {
        return true;
    }
    return false;
}
console.log(usoDoIn(dadoTWO));
console.log(usoDoIn(dado));
// 10 - funções
//10.1 - void
function showConsole() {
    console.log("...");
}
/*
  função void é uma função que nao tem retorno, ou seja, ela faz o que tem que fazer quando é chamada.
*/
//10.2 - callback
function saudacao(name) {
    console.log(`olá ${name}`);
}
function preSaudacao(saudar, nome) {
    saudar(nome);
}
preSaudacao(saudacao, "Guilherme");
//10.2 - generic functions
function exibirFistElement(arr) {
    return arr[0];
}
console.log(exibirFistElement(["Guilherme", "correa", "santos"]));
console.log(exibirFistElement([1, 2, 3]));
console.log(exibirFistElement(["1", 2, 3]));
function exibirFistElementObject(obj) {
    return `Olá ${obj.nome}`;
}
console.log(exibirFistElementObject({ nome: "Guilherme", idade: 18 }));
function unirObjetos(obj1, obj) {
    return Object.assign(Object.assign({}, obj1), obj);
}
console.log(unirObjetos({}, {}));
function arrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(arrays([1], [3, "3"]));
function desetruturando({ name, idade }) {
    return `Olá ${name}, voce tem ${idade}`;
}
console.log(desetruturando({ name: "gl", idade: 17 }));
function showProduct(produto) {
    return `O produto ${produto.nome} custa R$ ${produto.preco}`;
}
showProduct({ nome: "gl", preco: 18.11 });
/* OU */
function showProductTwo({ nome, preco }) {
    return `O produto ${nome} custa R$ ${preco}`;
}
const teste = {
    teste: "teste",
};
class car {
    constructor(marca, rodas = 4) {
        this.marca = marca;
        this.rodas = rodas;
    }
}
const newCar = new car("vw", 4);
const dados15 = {
    nome: "GUILHERME",
    idade: 17,
    cpf: "000.000.000-00",
    genero: "M",
};
// 14 - ReadOnly
/*

O uso do ReadonlyArray:

*/
const arrayFrutas = ["maça", "banana", "uva"];
const twoType = ["maça", 1];
