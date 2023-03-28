let a = 10;
let b = 8;
let c = 14;
/*
//Quesito 1
console.log(a + b); //soma
console.log(a - b); //subtração
console.log(a * b); //multipicação
console.log(a / b); //divisão
console.log(a % b); //sobra da divião

//Quesito 2
if (a > b){
    console.log(a);
}
else if (a < b){
    console.log(b);
}
else {
    console.log("São iguais!");
}

//Quesito 3
if (a > b && a > c){
    console.log(a);
}
else if (a < b && b > c){
    console.log(b);
}
else if (a < c && c > b){
    console.log(c);
}

//Quesito 4
let n = 1;

if (n > 0){
    console.log("positive");
}
else if (n < 0){
    console.log("negative");
}
else {
    console.log("zero");
}

//Quesito 5
let a1 = 30;
let a2 = 60;
let a3 = 90;

if (a1 + a2 + a3 == 180) {
    console.log(true)
}
else {
    console.log(false);
}
if (a1 > 0 || a2 > 0 || a3 > 0){
    console.log("Angulo invalido");
}


//Quesito 6
let pecXadrez = 'cavalo'

switch (pecXadrez) {
    case 'peao':
        console.log('Uma ou duas casas para frente');
        break;
    case 'cavalo':
        console.log('Duas casas para frente e uma para o lado');
        break;
    case 'torre':
        console.log('Pode andar para frente e para os lados');
        break;
    case 'bispo':
        console.log('Pode andar pelas diagonais');
}


//Quesito 7
let nota = 25;

if (nota >= 90 && nota <=100) {
    console.log("Exelente, sua nota é A");
}
else if (nota >= 70 && nota < 90) {
    console.log("Parabéns, sua nota é B.");
}
else if (nota >= 50 && nota < 70) {
    console.log("Cuidado, sua nota é C.");
}
else if (nota >= 30 && nota < 50) {
    console.log("Estude mais, sua nota é E.");
}
else if (nota < 30) {
    console.log("Xiii, sua nota é F.");
}


//Quesito 8

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    console.log(true);
}
else {
    console.log(false);
}


//Quesito 9

if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
    console.log(true);
}
else {
    console.log(false);
}


//Quesito 10
let venda = 100;
let custo = 75;

if (venda >= custo) {
    console.log(`Você tem R$ ${venda-custo},00 de lucro`)
}
else {
    console.log(`Você está tendo prejuizo de R$ ${custo-venda},00`)
}
*/

//Quesito 11
let salario = 3000;
let INSS;
let IR;

if (salario <= 1556.94) {
    salarioBase = salario - salario*0.08;
}
else if (salario >= 1556.95 && salario <= 2594.92) {
    salarioBase = salario - salario*0.09;
}
else if (salario >= 2594.93 && salario <= 5189.82) {
    salarioBase = salario - salario*0.11;
}
else if (salario > 5189.82) {
    salarioBase = salario - 570.88;
}


if (salarioBase <= 1903.98) {
    IR = 0;
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    IR = salarioBase*0.075 - 142.80;
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    IR = salarioBase*0.15 - 354.80;
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    IR = salarioBase*0.225 - 636.13;
}
else if (salarioBase > 4664.68) {
    IR = salarioBase*0.275 - 869.36;
}

let salarioLiquido = salarioBase - IR;

console.log('Seu salário bruto é de R$ ', salarioLiquido);
