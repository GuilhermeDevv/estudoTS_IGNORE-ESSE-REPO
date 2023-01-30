//types(keyof/typeof)
export const cores = { vermelho: 'red', verde: 'green', azul: 'blue' };
type typeCor = typeof cores;
type nomeCor = keyof typeCor;

function tradutor(obj: typeCor, cor: nomeCor): void {
  console.log(obj[cor]);
}
tradutor(cores, 'vermelho');
