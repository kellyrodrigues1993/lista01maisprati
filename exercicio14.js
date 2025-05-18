const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número inteiro não negativo para calcular o fatorial: "));


if (isNaN(numero) || numero < 0) { // Verificando se a entrada é válida
  console.log("Entrada inválida. Por favor, digite um número inteiro não negativo.");
} else {
  let fatorial = 1; // Inicializa o fatorial com 1

  for (let i = 2; i <= numero; i++) { // Calcula o fatorial usando um loop for
    fatorial *= i;
  }


  console.log(`O fatorial de ${numero} é: ${fatorial}`);
}
