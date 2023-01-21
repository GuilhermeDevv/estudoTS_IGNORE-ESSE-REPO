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

const arrayNumber: Array<number> = [10, 12, 5, 77, 18, 88, 4, 5, 2, 1];

function ordenar(arr: number[]): number[] {
  return arr.sort((a, b) => a - b);
}

console.log(ordenar(arrayNumber));
