let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Ordene o array numbers em ordem crescente e imprima seus valores.
/*
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

//Ordene o array numbers em ordem decrescente e imprima seus valores.
for (let index = numbers.length -1; index >= 0; index -= 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  console.log(numbers);
  
 //Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja valor seguinte, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push.
 let newNumbers = [];

  for (let index = 0; index < numbers.length; index += 1) {
    if (index < numbers.length -1) {
        newNumbers.push((numbers[index]*numbers[(index+1)]));
    }
    else {
        newNumbers.push((numbers[index] * 2));
    }
  }
console.log(newNumbers);
*/
//Escreva um algoritmo que, dado um valor n positivo, ou seja, n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:
// let n = 5;
// let sinal = '*';
// let line = '';
// exercicios/fundamentos-3.5
// for (let index = 0; index < n; index += 1) {
//   line = line + sinal;
// }
// for (let secondIndex = 0; secondIndex < n; secondIndex += 1) {
//   console.log(line);
//
// for (let index = 0; index <= n; index += 1) {
//   line = line + sinal;
// }
// for (let index = 0; index <= n; index += 1) {
//   comsole.log(line);
// }

//Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
let n = 5;
let sinal = '*';
let line = '';
// exercicios/fundamentos-3.5

for (let index = 0; index <= n; index += 1) {
  console.log(line);
  line = line + sinal;
}

for (let index = 0; index <= n; index += 1) {
  console.log(line);
  line = line + sinal;
}

