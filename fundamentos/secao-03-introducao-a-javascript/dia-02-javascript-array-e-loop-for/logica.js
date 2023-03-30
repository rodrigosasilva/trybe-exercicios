//Lógica de programação e algoritmos

//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'banana';
let invetWord = "";

for (let w = word.length - 1; w >= 0 ; w -= 1) {
    invetWord += word[w];
}
//console.log(invetWord);

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = "";
for (let index = 0; index < array.length ; index +=1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }
}
console.log(maiorPalavra);