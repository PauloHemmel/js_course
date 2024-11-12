let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

//[varA, varB, varC] = [varB, varC, varA] outro método

console.log(varA, varB, varC);
