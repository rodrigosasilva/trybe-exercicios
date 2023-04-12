const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele.
// 1.1. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
//Por causa da class tech.
// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como é possível fazer isso? Dica: Lembre-se do método `.classList.remove`.
const receiveClick = (element) => {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('tech');
  element.target.classList.add('tech');
}

firstLi.addEventListener('click', receiveClick);
secondLi.addEventListener('click', receiveClick);
thirdLi.addEventListener('click', receiveClick);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech'.
const textAlt = (element) => {
  const techElement = document.querySelector('.tech');
  techElement.innerText = element.target.value;
}

input.addEventListener('input', textAlt);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy',
// redirecione para alguma página.
// 4.1. Que tal redirecionar para seu portfólio? Dica: Lembre-se dos métodos `window.location.replace` e `window.open`.
const redirectPage = () => {
  window.location.replace('https://rodrigosasilva.github.io/');
}

myWebpage.addEventListener('dblclick', redirectPage);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo.
const setColor = (element) => {
  element.target.style.color = 'white';
}
const changeColor = (element) => {
  element.target.style.color = 'green';
}
myWebpage.addEventListener('mouseleave', setColor);
myWebpage.addEventListener('mouseover', changeColor);

// Segue abaixo um exemplo de uso do event.target.

const resetText = (event) => {
  // O event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na função retornará o objeto 'firstLi'.