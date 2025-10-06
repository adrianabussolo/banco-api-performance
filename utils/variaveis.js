import http from 'k6/http';

// importou o configLocal para dentro deste variavel como objeto
const configLocal = JSON.parse(open('../config/config.local.json'));

export function pegarBaseURL() {
    // ou traz o que vem na variavel de ambiente ou traz o ambiente local e utiliza a propriedade baseUrl do configLocal
    return __ENV.BASE_URL || configLocal.baseUrl;
    
    
    //const baseURL = __ENV.BASE_URL || configLocal.baseURL;
    //return baseURL;

}