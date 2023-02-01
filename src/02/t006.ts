//contrains

export type ObjectChaveFn = <T, U extends keyof T>(obj: T, key: U) => T[U];

export const animal = {
  cor: 'Rosa',
  vacina: ['1', '2'],
};

const objectChave: ObjectChaveFn = (objeto, chave) => objeto[chave];

export const cor = objectChave(animal, 'cor');
