function soma(a, b) {
    return a + b;
}
class pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    comprimentar(nome, idade) {
        return `Olá ${nome}, você tem ${idade} anos.`;
    }
}
const pessoa1 = new pessoa("Guilherme", 17);
const arrayNumber = [10, 12, 5, 77, 18, 88, 4, 5, 2, 1];
function ordenar(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(ordenar(arrayNumber));
class carro {
    constructor(marca, ano, modelo) {
        this.marca = marca;
        this.ano = ano;
        this.modelo = modelo;
    }
}
const carrinho = new carro("GOL", 2018, "BOLINHA");
function echo(number1, number2) {
    if (typeof number1 == "number" && typeof number2 == "number") {
        return (number1 - number2);
    }
    else if (typeof number1 == "string" && typeof number2 === "string") {
        return `${+number1 - +number2}`;
    }
    return `ISSO NÃO É VALIDO`;
}
console.log(echo("5", "3"));
