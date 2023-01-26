//funções como tipo
type FunctionString = (item: string) => string;
function mapString(array: string[], callbackfn: FunctionString): string[] {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    newArray.push(callbackfn(array[index]));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];

const resultArr = mapString(abc, (item) => item.toUpperCase());

console.log(resultArr);
