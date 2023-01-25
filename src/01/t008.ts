// never, se usa quando nunca vai retornar nada.

function Erro(): never {
  throw new Error('erro');
}

Erro();
