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
