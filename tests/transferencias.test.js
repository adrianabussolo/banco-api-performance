import http from 'k6/http';
import { check, sleep } from 'k6';
//import { sleep } from 'k6';
import { obterToken } from '../helpers/autenticacao.js';


export const options = {
 interation: 1
};

export default function() {
  const token = obterToken()

  const url = 'http://localhost:3000/transferencias'; // passando a URL

  const payload = JSON.stringify({
      contaOrigem: 1,
      contaDestino: 2,
      valor: 11,
      token: ""
  })

  const params = {
        headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },



  }
  let res = http.post(url, payload, params);
  
  console.log('Status da resposta:', res.status);
  console.log('Corpo da resposta:', res.body);

  check(res, { "status is 201": (res) => res.status === 201 });
  //check(res, { 'status is 201': (r) => r.status === 201,
};

  sleep(1)

