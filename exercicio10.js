const prompt = require('prompt-sync')();

let numero = Number(prompt("Digite um número inteiro: "));

if (isNaN(numero)) {
  console.log("Entrada inválida. Por favor, digite um número inteiro.");
} else {
  console.log(`O número ${numero} repetido 10 vezes:`);   // Loop for para escrever o número 10 vezes
  for (let i = 0; i < 10; i++) {
    console.log(numero);
  }
}
