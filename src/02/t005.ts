export interface Pessoa1<T = string> {
  nome: T;
  sobrenome: T;
}
export const nome1: Pessoa1 = { nome: 'GL', sobrenome: 'santos' };

export interface Pessoa2<T> {
  nome: T;
  sobrenome: T;
}

export const nome2: Pessoa2<string> = { nome: 'GL', sobrenome: 'santos' };

export interface PessoaCompleta<U> extends Pessoa1 {
  idade: U;
}
export const pessoa3: PessoaCompleta<number> = {
  idade: 17,
  nome: 'Guilherme',
  sobrenome: 'Santos',
};

export interface PessoaCompleta2<U = number> extends Pessoa1 {
  idade: U;
}
export const pessoa4: PessoaCompleta2 = {
  idade: 17,
  nome: 'Guilherme',
  sobrenome: 'Santos',
};
