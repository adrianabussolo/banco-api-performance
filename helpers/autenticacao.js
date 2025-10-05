import http from 'k6/http';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))


export function obterToken() {
    const url = 'http://localhost:3000/login'; // passando a URL

    
    const payload = JSON.stringify(postLogin); // postLogin com usuário válido:

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const res = http.post(url, payload, params); // faz a reuisição

    return res.json('token') // obtem o token a partir do json
    


}