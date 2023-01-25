//tipos arrays

function multiplicar(...x: number[]): number {
  return x.reduce((acc, curr) => acc * curr, 1);
}
multiplicar(1, 2, 3);
