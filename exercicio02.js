const prompt = require('prompt-sync')(); 

let definirCategoria; 

//  Nesse segundo exercicio tentei testar meus limites e colocar uma verificação, enquanto o usuário não digitar um número válido, caimos dentro do looping de perguntar novamente a idade.
while (true) {
  let idadeDigitada = prompt("Digite sua idade: ");
  definirCategoria = Number(idadeDigitada);

  if (!isNaN(definirCategoria)) { 
    break; 
  } else {
    console.log("Por favor, digite um número válido para a idade.");
  }
}

if(isNaN(definirCategoria)) {
    console.log("Por favor, digite um número válido para a idade.");
} else if (definirCategoria <= 12) {
    console.log ("Você é criança!")
} else if (definirCategoria > 12 && definirCategoria <= 18) {
    console.log ("Você é adolescente")
} else if (definirCategoria > 18 && definirCategoria <=60){
    console.log("Você é adulto")
} else{
    console.log("Você é idoso")
}

