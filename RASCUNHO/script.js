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
