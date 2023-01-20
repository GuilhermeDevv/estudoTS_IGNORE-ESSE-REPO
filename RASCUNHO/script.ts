async function constultaApi(urlApi: string): Promise<void> {
  let dadosApi;
  await fetch(urlApi).then((response) =>
    response.json().then((data: DADOS_API) => {
      dadosApi = data;
    })
  );
  console.log(dadosApi);
}
constultaApi("https://fakerapi.it/api/v1/addresses?_quantity=1");

interface DADOS_API {
  status: string;
  code: number;
  total: string;
  data: Array<string | number>;
}
