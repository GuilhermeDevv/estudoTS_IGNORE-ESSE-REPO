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

interface VEICULO {
  marca: string;
  ano: number;
}

class carro implements VEICULO {
  marca: string;
  ano: number;
  modelo: string;
  constructor(marca: string, ano: number, modelo: string) {
    this.marca = marca;
    this.ano = ano;
    this.modelo = modelo;
  }
}

const carrinho = new carro("GOL", 2018, "BOLINHA");

function echo<T extends number | string>(
  number1: T,
  number2: T
): number | string {
  if (typeof number1 == "number" && typeof number2 == "number") {
    return (number1 - number2) as number;
  } else if (typeof number1 == "string" && typeof number2 === "string") {
    return `${+number1 - +number2}`;
  }
  return `ISSO NÃO É VALIDO`;
}

//22

function soma22<T extends number>(a: T, b: T): string {
  const result: number = a + b;
  return `o valor da soma de ${a} + ${b} é : ${result}`;
}

function subtracao22<T extends number>(a: T, b: T): string {
  const result: number = a - b;

  return `a diferenca de ${a} - ${b} é de : ${result}`;
}

function mostrarTamanho<T extends string>(texto: T): number {
  const result = texto.length;

  return result;
}

function somaGeral<T extends number[]>(arr: T): number {
  const result: number = arr.reduce((acc, current) => acc + current, 0);
  return result;
}
