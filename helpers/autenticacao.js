import http from 'k6/http';
import { pegarBaseURL } from '../utils/variaveis.js'
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))


export function obterToken() {
    const url = pegarBaseURL() + '/login'; // passando a URL

    
    const payload = JSON.stringify(postLogin); // postLogin com usuário válido:

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const res = http.post(url, payload, params); // faz a reuisição

    return res.json('token') // obtem o token a partir do json
    


}