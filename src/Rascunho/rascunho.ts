function generate_random_number(quantity: number): number[] {
  const numberRandom = [];
  for (let i = 0; i < quantity; i++) {
    numberRandom.push(Math.floor(Math.random() * 1000));
  }
  return numberRandom;
}
function organizedNumbers(numbers: number[]): number[] {
  const organizadedNumbers = numbers.sort((a, b) => a - b);
  return organizadedNumbers;
}
const result = generate_random_number(1);
console.log(organizedNumbers(result));

const arrString = ['Guilherme', 'Santos'];

function testeRasc(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log(`Olá ${x.join(' ')}`);
  } else {
    console.log(x);
  }
}

testeRasc(arrString);
const pessoa = {
  nome: undefined,
};

let teste: string | null;

teste = pessoa.nome ?? 'guest';

console.log(teste);
