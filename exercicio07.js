const prompt = require('prompt-sync')();

let numeroMacas = parseInt(prompt("Digite o número de maçãs compradas: ")); // Pede o número de maçãs compradas para o usuário

if (isNaN(numeroMacas) || numeroMacas < 0) {
  console.log("Entrada inválida. Por favor, digite um número inteiro não negativo.");
} else {
  let precoTotal;
  if (numeroMacas < 12) {
    precoTotal = numeroMacas * 0.30;
  } else {
    precoTotal = numeroMacas * 0.25;
  }

  console.log(`O valor total da compra é: R$ ${precoTotal.toFixed(2)}`);
}
