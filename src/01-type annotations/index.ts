/*eslint-disable */
//tipos por inferências
let nome: string = 'Guilherme';
let idade: number = 1;
let bool: boolean = true;
let simbol: symbol = Symbol('simbol');

//arrays

let arrayDeNumero: Array<number> = [1, 2, 3];
let arrayDeTexto: Array<string> = ['1', '2', '3'];

// uma forma melhor..

let updateArrayNumber: number[] = [1, 2, 3];
let updateArrayTexto: string[] = ['1', '2', '3'];

//objetos

let pessoa: { nome: string; idade: number } = { nome: 'gl', idade: 17 };

//Funções

function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
