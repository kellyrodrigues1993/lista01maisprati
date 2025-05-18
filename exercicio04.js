const prompt = require('prompt-sync')();

function calcularAreaQuadrado(lado) { // Função para calcular a área do quadrado
  return lado * lado;
}

function calcularAreaTriangulo(base, altura) { // Função para calcular a área do triângulo
  return (base * altura) / 2;
}

function celsiusParaFahrenheit(celsius) { // Função para converter Celsius para Fahrenheit
  return (celsius * 9/5) + 32;
}

function gerarNumeroAleatorio() { // Função para gerar um número aleatório entre 1 e 50
  return Math.floor(Math.random() * 50) + 1;
}


console.log("Menu:"); // Mostrar o menu para o usuário
console.log("1. Calcular a área do quadrado");
console.log("2. Calcular a área do triângulo");
console.log("3. Transformar Celsius para Fahrenheit");
console.log("4. Gerar um número aleatório entre 1 e 50");


let escolha = prompt("Digite o número da opção desejada: "); // Pegar a escolha do usuário

// Usar switch-case para executar a lógica da opção escolhida
switch (escolha) {
  case "1":
    let ladoQuadrado = parseFloat(prompt("Digite o lado do quadrado: ")); // Pede o lado do quadrado e calcula a área
    if (isNaN(ladoQuadrado)) {
      console.log("Entrada inválida. Por favor, digite um número.");
    } else {
      let areaQuadrado = calcularAreaQuadrado(ladoQuadrado);
      console.log(`A área do quadrado é: ${areaQuadrado}`);
    }
    break;

  case "2":
    let baseTriangulo = parseFloat(prompt("Digite a base do triângulo: ")); // Pede a base e a altura do triângulo e calcula a área
    let alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo: "));
    if (isNaN(baseTriangulo) || isNaN(alturaTriangulo)) {
      console.log("Entrada inválida. Por favor, digite números.");
    } else {
      let areaTriangulo = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
      console.log(`A área do triângulo é: ${areaTriangulo}`);
    }
    break;

  case "3":
    let temperaturaCelsius = parseFloat(prompt("Digite a temperatura em Celsius: ")); // Pede a temperatura em Celsius e converte para Fahrenheit
    if (isNaN(temperaturaCelsius)) {
      console.log("Entrada inválida. Por favor, digite um número.");
    } else {
      let temperaturaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);
      console.log(`${temperaturaCelsius}°C é igual a ${temperaturaFahrenheit}°F`);
    }
    break;

  case "4":
    let numeroAleatorio = gerarNumeroAleatorio(); // Gera um número aleatório e mostra para o usuário
    console.log(`Número aleatório gerado: ${numeroAleatorio}`);
    break;


  default:
    console.log("Opção inválida. Por favor, escolha uma opção de 1 a 4.");  // Caso o usuário digite uma opção inválida
}
