// overload

interface Possibilidades {
  (a: number, b: number): number | string;
  (a: string, b: string): number | string;
}

export const soma: Possibilidades = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (
    typeof a === 'string' &&
    typeof b === 'string' &&
    !isNaN(+a + +b)
  ) {
    return +a + +b;
  } else {
    return 'isto não é valido';
  }
};
