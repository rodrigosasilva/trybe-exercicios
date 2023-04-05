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
function getNumberOfStudents(obj) {
  let total = 0;

  let keys = Object.keys(obj);
    
  for (index in keys) {
    total += obj[keys[index]].numeroEstudantes; // incremente a variável total a cada iteração
  }
  return total; // a função retorna o total de estudantes após as iterações do "for/in"
}
// console.log(getNumberOfStudents(allLessons));

//Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto. Por exemplo:
function getValueByNumber(obj, number) {
  return Object.values(obj)[number];
}
// usa-se o "Object.values()" para criar um array com os valores do objeto e, então, pode-se acessar sua posição passando o índice.

console.log(getValueByNumber(lesson1, 2));

//Crie uma função que verifique se o par chave/valor existe na função. Essa função deve ter três parâmetros: o objeto, o nome da chave e o valor dela.

function verifyPair(obj, key, value) {
  let entries = Object.entries(obj);
  let isEqual = false;
  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
  }
  return isEqual;
}
console.log(verifyPair(lesson2,'professor','Carlos'));