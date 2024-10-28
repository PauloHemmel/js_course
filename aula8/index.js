/*
16. Exercícios - Const e Let

Paulo Gustavo tem 30 anos, pesa 84 kg
tem 1. de altura e seu IMC é de 25,000000

*/

const nome = 'Paulo Gustavo';
const sobrenome = "Hemmel";
const idade = 29;
const peso = 65;
const altura = 1.72;
let imc = peso / (altura * altura);
let anoNascimento;
anoNascimento = 2024 - idade;
console.log(`${nome}, ${sobrenome}, tem, ${idade} anos, pesa,${peso} kg tem ${altura}, e seu IMC é de, ${imc},nasceu em,${anoNascimento}`);