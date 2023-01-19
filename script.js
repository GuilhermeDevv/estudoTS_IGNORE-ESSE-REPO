var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 1 - arrays
var numero = [1, 2, 3];
var nome = ["Guilherme", "Santos"];
// 1.1 - array new sintaxe
var arrayNumberNewSintaxe = [1, 2, 3];
var arrayStringNewSintaxe = ["Guilherme", "santos"];
// 2 - any (não usar essa bagaça!!!!!)
/*
            o any aceita qual quer tipo de valor, se for usar o any pra typescript?????????
            jamais,use,o, any,evite! (respeite as virgulas na leitura, percebera que foi em um tom de raiva!)
            NÃO USE O ANY!!!!!!!!!!!!!!!!!!!!
*/
var arr = [1, 2, 3, "string aqui"];
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
        return "ol\u00E1 ".concat(nome.toUpperCase(), " ").concat(sobrenome === null || sobrenome === void 0 ? void 0 : sobrenome.toUpperCase());
    }
    return "ol\u00E1 ".concat(nome.toUpperCase());
}
// 7 - Union types
/*
        serve para defenir multiplos tipos, veja a seguir.
*/
function formatarDinheiro(valor) {
    console.log("seu saldo \u00E9 de R$ ".concat(valor));
}
formatarDinheiro(1000);
formatarDinheiro("3000");
function monstrarId(id) {
    return "o seu id \u00E9 ".concat(id);
}
var pessoa = { nome: "GUILHERME", idade: 17 };
/*
        uma interface é uma forma de garantir que um objeto possui certos atributos e métodos.
        Ela define uma estrutura que um objeto deve seguir, mas não fornece a implementação dos métodos.
        Isso permite que você garanta a compatibilidade de tipos entre diferentes objetos e também facilita a criação de classes que implementam essa interface.

*/
function freeShow(obj) { }
/*
parece uma substituição de tipos do interface mas não, é uma implementação, veja APERTANDO O CTRL + SPACE dentro do objeto a seguir
*/
var dado = {
    nome: "GL",
    idade: 17
};
var dadoTWO = {
    nome: "GL",
    idade: 17,
    cpf: "123.456.789-10"
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
    console.log("ol\u00E1 ".concat(name));
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
    return "Ol\u00E1 ".concat(obj.nome);
}
console.log(exibirFistElementObject({ nome: "Guilherme", idade: 18 }));
function unirObjetos(obj1, obj) {
    return __assign(__assign({}, obj1), obj);
}
console.log(unirObjetos({}, {}));
function arrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(arrays([1], [3, "3"]));
function desetruturando(_a) {
    var name = _a.name, idade = _a.idade;
    return "Ol\u00E1 ".concat(name, ", voce tem ").concat(idade);
}
console.log(desetruturando({ name: "gl", idade: 17 }));
function showProduct(produto) {
    return "O produto ".concat(produto.nome, " custa R$ ").concat(produto.preco);
}
showProduct({ nome: "gl", preco: 18.11 });
/* OU */
function showProductTwo(produto) {
    return "O produto ".concat(produto.nome, " custa R$ ").concat(produto.preco);
}
