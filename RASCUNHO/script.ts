function soma(a: number, b: number): number {
  return a + b;
}

class pessoa {
  nome: string;
  idade: number;
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
  comprimentar(nome: string, idade: number): string {
    return `Olá ${nome}, você tem ${idade} anos.`;
  }
}

const pessoa1 = new pessoa("Guilherme", 17);

