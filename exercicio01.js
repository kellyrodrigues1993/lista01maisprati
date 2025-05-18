const prompt = require('prompt-sync')(); 
// O comando require('prompt-sync')() importa a biblioteca prompt-sync, que fornece uma função para obter entrada do usuário de forma síncrona no terminal. O programa "pausa" a execução até que o usuário digite algo, para então ele "despausar"

let digiteUmNumero = prompt("Digite um número inteiro: ") // Aqui usei o prompt para pedir algo para o usuaário
let parOuImpar = Number(digiteUmNumero) // Aqui para guardar em uma variavel a informação que ele trouxe do usuário.


    if(digiteUmNumero % 2 === 0){
        console.log(`O número ${digiteUmNumero} é PAR`)
    } else {
        console.log(`O número ${digiteUmNumero} é IMPAR`
        )
    }

