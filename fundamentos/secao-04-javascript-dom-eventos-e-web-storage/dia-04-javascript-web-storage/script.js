const backgroundColors = document.querySelectorAll('#background-color button');
const whiteButton = backgroundColors[0];
const blackButton = backgroundColors[1];
const greenButton = backgroundColors[2];
const blueButton = backgroundColors[3];
const yellowButton = backgroundColors[4];

const backgroundMain = document.querySelector('main');

const changeBackColor = (element) => {
  if (element.target === whiteButton) {
    backgroundMain.style.backgroundColor = 'white';
  } else if (element.target === blackButton) {
    backgroundMain.style.backgroundColor = 'black';
  } else if (element.target === greenButton) {
    backgroundMain.style.backgroundColor = 'green';
  } else if (element.target === blueButton) {
    backgroundMain.style.backgroundColor = 'blue';
  } else if (element.target === yellowButton) {
    backgroundMain.style.backgroundColor = 'yellow';
  }
}
whiteButton.addEventListener('click', changeBackColor);
blackButton.addEventListener('click', changeBackColor);
greenButton.addEventListener('click', changeBackColor);
blueButton.addEventListener('click', changeBackColor);
yellowButton.addEventListener('click', changeBackColor);
