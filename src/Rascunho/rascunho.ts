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
const result = generate_random_number(100);
console.log(organizedNumbers(result));
