//null & undefined
/*eslint-disable */

let x;
if (typeof x === 'undefined') x = 10;
console.log(x * 2);

function quadrado(x: any) {
  if (typeof x == 'number') return x * x;
  return null;
}

quadrado(3);
quadrado('3');
