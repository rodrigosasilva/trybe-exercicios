//1 – Crie uma função que ligue e desligue o motor de um carro
const ligaDesliga = (val) => {
    if (val === 'liga'){
        return `Motor ligado`;
    } else if (val === 'desliga'){
        return `Motor desligado`;
    } else {
        return `Entrada inválida`;
    }
}

console.log(ligaDesliga('liga'));

//2 – Crie uma função que calcule a área de um círculo
const areaCirculo = (r) => {return (3.14*(r**2))}

console.log(areaCirculo(2));

//3 – Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase
