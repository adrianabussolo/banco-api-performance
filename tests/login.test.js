import http from 'k6/http';
import { sleep } from 'k6';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))

export const options = {
  // lista de objetos com duas proriedades: target > qdt de usuarios
    stages: [
      {duration: '10s', target: 10 },
      {duration: '20s', target: 10 },
      {duration: '10s', target: 30 },
      {duration: '20s', target: 30 },
      {duration: '20s', target: 0 }
    ],

interation: 1,
    //tempo que cada requisição HTTP levou para ser concluída
thresholds: {
      http_req_duration: ['p(90)<3000', 'max<5000'],
      //quantidade de erros:
      http_req_failed: ['rate<0.01']
    } 
};

export default function () {
    // teste aqui 
    const url = 'http://localhost:3000/login';
    
    console.log(postLogin)
    const payload = JSON.stringify(postLogin); 

    const params = {
        headers: {
      'Content-Type': 'application/json',
    },
  };
    http.post(url, payload, params);

    sleep(1);

  //const resposta = http.post(url, payload, params);
  //console.log(resposta)
}