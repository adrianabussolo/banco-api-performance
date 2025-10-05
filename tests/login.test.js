import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // quantos usuarios virtuais que eu quero:
    vus: 10,
    duration: '30s',

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

    const payload = JSON.stringify({
        username: 'julio.lima',
        senha: '123456',
    }); 

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