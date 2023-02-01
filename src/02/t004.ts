type paramsCallbackFn = <U>(value: U, index?: number, array?: U[]) => boolean;

function filter<T>(array: T[], callbackfn: paramsCallbackFn): T[] {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) newArray.push(array[i]);
  }
  return newArray;
}
const array = [1, 2, 3, 4];

console.log(filter(array, (value) => value > 2));
