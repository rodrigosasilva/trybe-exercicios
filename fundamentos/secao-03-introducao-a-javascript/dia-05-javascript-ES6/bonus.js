const substituaX = (nome) => {
  const line = 'Tryber x aqui!';
  const array = line.split(' ');
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === 'x') {
      array[index] = nome;
    }
  }
  return array.join(' ');
};

console.log(substituaX('Bebeto'));

const minhasSkills = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let resultado = `
  ${func}

  Minhas três principais habilidades são:`;
  for (let index = 0; index < skills.length; index += 1) {
    resultado = `${resultado}
    - ${skills[index]}`;
  }
  return resultado;
};
console.log(minhasSkills(substituaX('Bebeto')));