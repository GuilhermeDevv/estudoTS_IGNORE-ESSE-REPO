//intersection types &

type Nome = { nome: string };
type Sobrenome = { sobrenome: string };

type Pessoa = Nome & Sobrenome;

const createdChar: Pessoa = { nome: 'gl', sobrenome: 'Santos' };

console.log(createdChar);
