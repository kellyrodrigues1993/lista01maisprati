const prompt = require('prompt-sync')();

let valor1 = Number(prompt("Digite o primeiro valor: "));
let valor2 = Number(prompt("Digite o segundo valor: "));


if (valor1 === valor2) { // Verifica se os valores são diferentes
  console.log("Por favor, digite dois valores diferentes.");
} else {
  if (valor1 < valor2) {   // Organiza em ordem crescente e exibe
    console.log(`Os valores em ordem crescente são: ${valor1}, ${valor2}`);
  } else {
    console.log(`Os valores em ordem crescente são: ${valor2}, ${valor1}`);
  }
}
