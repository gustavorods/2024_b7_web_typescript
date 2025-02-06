// Função que faz a requisição
function fazerReq(url: string, method: 'GET' | 'POST') {
    // ...
}

// Uma estrutura para nosso objeto
type RequestDetails = { 
    url: string,
    method: 'GET' | 'POST'
}

// Objeto usando como base uma estrutura ja feita
let config: RequestDetails =  {
    url: "https://google.com.br",
    method: "GET"
}


fazerReq(config.url, config.method);
