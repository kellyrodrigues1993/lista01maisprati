const prompt = require('prompt-sync')();


function calcularIMC(peso, altura) { // Função para calcular o IMC
  return peso / (altura * altura);
}

function determinarCategoriaPeso(imc) { // Função para determinar a categoria de peso
  if (imc < 18.5) {
    return "Baixo peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    return "Sobrepeso";
  } else {
    return "Obesidade";
  }
}

// Pede o peso e a altura para o usuário
let peso = Number(prompt("Digite o seu peso em quilogramas: "));
let altura = Number(prompt("Digite a sua altura em metros: "));

// Verifica se as entradas são válidas
if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
  console.log("Entrada inválida. Por favor, digite valores numéricos positivos para peso e altura.");
} else {
  // Calcula o IMC
  let imc = calcularIMC(peso, altura);

  // Determina a categoria de peso
  let categoriaPeso = determinarCategoriaPeso(imc);

  // Mostra o resultado para o usuário
  console.log(`Seu IMC é: ${imc.toFixed(2)}`);
  console.log(`Categoria de peso: ${categoriaPeso}`);
}
