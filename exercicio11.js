const prompt = require('prompt-sync')();

let soma = 0; // Inicializa a variável para armazenar a soma

for (let i = 0; i < 5; i++) { 
  let numero = Number(prompt(`Digite o ${i + 1}º número: `)); // Pede o número e converte para Number

  if (isNaN(numero)) {
    console.log("Entrada inválida. Por favor, digite um número válido.");
    i--; 
    continue; // Volta para o início do loop
  }

  soma += numero; 
}


console.log(`A soma dos números digitados é: ${soma}`);
