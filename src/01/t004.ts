//Objeto

const objetoA: {
  readonly chaveA: string; //essa chave não pode alter seu valor após seta-lo.
  chaveB: string;
  [key: string]: unknown; //index signature
} = {
  chaveA: 'valor a',
  chaveB: 'valorB',
};

objetoA.chaveC = 'KK';
