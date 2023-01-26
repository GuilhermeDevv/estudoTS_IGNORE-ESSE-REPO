//this em funções

function teste18(this: unknown, arg: string) {
  console.log(this);
  console.log(arg);
}

teste18.call(teste18, 'gl');
