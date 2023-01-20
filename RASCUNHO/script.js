async function constultaApi(urlApi) {
    let dadosApi;
    await fetch(urlApi).then((response) => response.json().then((data) => {
        dadosApi = data;
    }));
    console.log(dadosApi);
}
constultaApi("https://fakerapi.it/api/v1/addresses?_quantity=1");
