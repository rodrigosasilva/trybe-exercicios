
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorra o array imprimindo todos os valores contidos nele com a função console.log().
//Some todos os valores contidos no array e imprima o resultado.
let soma = 0;
for (let n of numbers) {
    soma = soma + n;
    console.log(n);
}
console.log("Resultado da soma: ", soma);

//Calcule e imprima a média aritmética dos valores contidos no array.
let media = soma/numbers.length;
console.log("Média aritmética: ", media);

//Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.
if (media > 20) {
    console.log("Valor maior que 20");
}
else {
    console.log("Valor menor ou igual a 20");
}

//Utilizando for, descubra o maior valor contido no array e imprima-o.
let maiorValor = 0;
for (let index = 0; index < numbers.length; index +=1) {
    if (numbers[index] > maiorValor){
        maiorValor = numbers[index];
    }
}
console.log("Maior valor: ", maiorValor);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
let count = 0;
for (let i = 0; i < numbers.length; i +=1) {
    if (numbers[i] % 2 != 0) {
        count += 1;
    }
}
if (count > 0) {
    console.log("Quantidade de valores ímpares: ", count);
}
else {
    console.log("Nenhum valor ímpar encontrado");
}

//Utilizando for, descubra o menor valor contido no array e imprima-o.
let menorValor = maiorValor;
for (let index = 0; index < numbers.length; index +=1) {
    if (numbers[index] < menorValor){
        menorValor = numbers[index];
    }
}
console.log("Menor valor: ", menorValor);

//Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.
let ar = [];
for (let a = 1; a < 26; a += 1) {
    ar.push(a);
}
console.log(ar);

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for (let b = 0; b < ar.length; b +=1) {
    console.log(ar[b]/2);
}