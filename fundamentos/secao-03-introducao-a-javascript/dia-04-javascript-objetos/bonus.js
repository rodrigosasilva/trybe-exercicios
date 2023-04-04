let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.

function addTurn (objeto, chave, valor) {
  objeto[chave] = valor;
}
let key = 'turno';
let value = 'noite';
addTurn(lesson2, key, value);
//console.log(lesson2);


//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listKeys(objeto) {
  for (let key in objeto){
    console.log(key);
  }
}

//listKeys(lesson1);

//Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
function lengthObject (objeto) {
  return Object.keys(objeto).length;
}

//console.log(lengthObject(lesson1));

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function listValue(objeto) {
  return Object.values(objeto);
}

//console.log(listValue(lesson1));

//Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

let allLessons = Object.assign({} , {lesson1, lesson2, lesson3});
//console.log(allLessons);

//Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
