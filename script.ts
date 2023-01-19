// 1 - arrays
const numero: number[] = [1, 2, 3];
const nome: string[] = ["Guilherme", "Santos"];
// 1.1 - array new sintaxe
const arrayNumberNewSintaxe: Array<number> = [1, 2, 3];
const arrayStringNewSintaxe: Array<string> = ["Guilherme", "santos"];

// 2 - any (não usar essa bagaça!!!!!)

/*
            o any aceita qual quer tipo de valor, se for usar o any pra typescript?????????
            jamais,use,o, any,evite! (respeite as virgulas na leitura, percebera que foi em um tom de raiva!)
            NÃO USE O ANY!!!!!!!!!!!!!!!!!!!!
*/
const arr: Array<any> = [1, 2, 3, "string aqui"];

// 3 - funções

function soma(a: number, b: number) {
  return a + b;
}

// 3.1 funções - setando o tipo do retorno da função

function subtracao(a: number, b: number): number {
  return a - b;
}

// 4 - objetos

function passarCordenadas(cord: number[]) {}
/*ou*/
function passarCordenadasTwo(cord: { x: number; y: number }) {}

// 5 - propriedades opcionas

/*
        veja a seguir que a propriedade nome é opcional, o uso do '?' define
        que a parametro "sobrenome" é opcinal, ou seja, não é necessario a função 
        receber esse parametro.
*/
function nomeUser(nome: string, sobrenome?: string) {}

// 6 - validação de propriedades opcionais
/*
        as vezes é necessario fazer a validação das propriedades opcionais pois o ts não nos ajuda mais,
        entao usando um if ja resolve fututos problemas.

*/

function gritarNome(nome: string, sobrenome?: string): string {
  if (sobrenome) {
    return `olá ${nome.toUpperCase()} ${sobrenome?.toUpperCase()}`;
  }
  return `olá ${nome.toUpperCase()}`;
}

// 7 - Union types
/*
        serve para defenir multiplos tipos, veja a seguir.
*/

function formatarDinheiro(valor: string | number) {
  console.log(`seu saldo é de R$ ${valor}`);
}
formatarDinheiro(1000);
formatarDinheiro("3000");

// 8 - type alias

type ID = string | number;

function monstrarId(id: ID): string {
  return `o seu id é ${id}`;
}

/*
    o type alis é uma forma agradavel de setar tipo de um dado
*/

// 9 - Interfaces

interface TIPO_PESSOA {
  nome: string;
  sobrenome?: string;
  idade: number | string;
}
const pessoa: TIPO_PESSOA = { nome: "GUILHERME", idade: 17 };

/*
        uma interface é uma forma de garantir que um objeto possui certos atributos e métodos. 
        Ela define uma estrutura que um objeto deve seguir, mas não fornece a implementação dos métodos.
        Isso permite que você garanta a compatibilidade de tipos entre diferentes objetos e também facilita a criação de classes que implementam essa interface.

*/

function freeShow(obj: TIPO_PESSOA) {}

// 9 - diferença entre Interfaces & type alis

/*
        interface pode se alterada ao longo do codigo, ja o alis não.
        se quiser criar um objeto use a interface, se quiser alterar algum tipo use a interface, veja a seguir.
*/

interface PESSOA {
  nome: string;
  sobrenome?: string;
  idade: number | string;
}
interface PESSOA {
  cpf?: number | string;
}
/*
parece uma substituição de tipos do interface mas não, é uma implementação, veja APERTANDO O CTRL + SPACE dentro do objeto a seguir  
*/

const dado: PESSOA = {
  nome: "GL",
  idade: 17,
};
const dadoTWO: PESSOA = {
  nome: "GL",
  idade: 17,
  cpf: "123.456.789-10",
};

function usoDoIn(pessoa: PESSOA): boolean {
  if ("cpf" in pessoa) {
    return true;
  }
  return false;
}
console.log(usoDoIn(dadoTWO));
console.log(usoDoIn(dado));

// 10 - funções

//10.1 - void

function showConsole(): void {
  console.log("...");
}

/*
  função void é uma função que nao tem retorno, ou seja, ela faz o que tem que fazer quando é chamada.
*/

//10.2 - callback
function saudacao(name: string): void {
  console.log(`olá ${name}`);
}

function preSaudacao(saudar: (saud: string) => void, nome: string): void {
  saudar(nome);
}
preSaudacao(saudacao, "Guilherme");

//10.2 - generic functions

function exibirFistElement<T>(arr: T[]): T {
  return arr[0];
}
console.log(exibirFistElement(["Guilherme", "correa", "santos"]));
console.log(exibirFistElement([1, 2, 3]));
console.log(exibirFistElement(["1", 2, 3]));

interface Pessoa {
  nome: string;
  idade: number;
}

function exibirFistElementObject<T extends Pessoa>(obj: T): string {
  return `Olá ${obj.nome}`;
}
console.log(exibirFistElementObject({ nome: "Guilherme", idade: 18 }));

function unirObjetos<T, U>(obj1: T, obj: U): T & U {
  return {
    ...obj1,
    ...obj,
  };
}
console.log(unirObjetos({}, {}));

function arrays<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}
console.log(arrays<string | number>([1], [3, "3"]));
