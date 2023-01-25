//union types

function add(a: number | string, b: number | string): number | string {
  if (typeof a == 'number' && typeof b == 'number') {
    return a + b;
  }
  return +a + +b;
}
add(1, 1);
