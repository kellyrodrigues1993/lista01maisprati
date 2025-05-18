const prompt = require('prompt-sync')();

const numeroTermos = 10;

let primeiroTermo = 0;
let segundoTermo = 1;

console.log("Os primeiros 10 números da sequência de Fibonacci são:");

for (let i = 0; i < numeroTermos; i++) { // Loop para gerar e imprimir os termos da sequência
  console.log(primeiroTermo);


  const proximoTermo = primeiroTermo + segundoTermo;

  
  primeiroTermo = segundoTermo;
  segundoTermo = proximoTermo;
}
