const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número para ver a tabuada (de 1 a 10): "));

if (isNaN(numero) || numero < 1 || numero > 10) { // Verifica se a entrada é um número inteiro válido entre 1 e 10
  console.log("Entrada inválida. Por favor, digite um número inteiro entre 1 e 10.");
} else {
  console.log(`Tabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}
