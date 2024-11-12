

//let umaString = "Um \"texto\"";

//    ver indice 01234567
let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString[4]); // posição da string
console.log(umaString.charAt(6)); // posição da string
console.log(umaString.concat(' em', ' um', ' lindo')); // concatenação
console.log(umaString + ' em um lindo'); // concatenação
console.log(`${umaString} em um lindo`); // concatenação

console.log(umaString.indexOf('texto')); //onde começa a palavra no indice, se não encontra fica (-1)
console.log(umaString.indexOf('o', 3)); //encontrar a letra ou palavra a partir do indice 3

console.log(umaString.lastIndexOf('m', 3)); //encontrar do final pra frente a letra ou palavra a partir do indice 7

console.log(umaString.match(/[a-z]/g)); //expressão regular

console.log(umaString.search(/x/g)); //encontrar letra
console.log(umaString.replace('Um', 'Outra')); //substituir palavra ou letra
console.log(umaString.replace(/a/g, 'b')); //substituir palavra ou letra

console.log(umaString.length); //tamanho do texto

console.log(umaString.slice(3, 6)); //pegar partes do texto do inicio ao final, ou negativo do final para o inicio

console.log(umaString.slice(-5, umaString.length - 1)); //pegar partes do texto do inicio ao final, ou negativo do final para o inicio, diminuindo uma letra no final com -1

console.log(umaString.substring(umaString.length - 5)); //faz a mesma coisa do slice, mais trabalho

console.log(umaString.split(' ', 3)); //dividir uma string, uma string e selecionar a quantidade que quer dividir

console.log(umaString.toUpperCase()); //deixar a letra grande
console.log(umaString.toLowerCase()); //deixar a letra pequena
