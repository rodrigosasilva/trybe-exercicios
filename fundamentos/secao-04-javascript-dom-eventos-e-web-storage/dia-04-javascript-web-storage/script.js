const backgroundColors = document.querySelectorAll('#background-color button');
const whiteButton = backgroundColors[0];
const blackButton = backgroundColors[1];
const greenButton = backgroundColors[2];
const blueButton = backgroundColors[3];
const yellowButton = backgroundColors[4];

const fontColors = document.querySelectorAll('#font-color button');
const blackFont = fontColors[0];
const redFont = fontColors[1];
const whiteFont = fontColors[2];

const mainContent = document.querySelector('main');

const changeBackColor = (element) => {
  if (element.target === whiteButton) {
    mainContent.style.backgroundColor = 'white';
  } else if (element.target === blackButton) {
    mainContent.style.backgroundColor = 'black';
  } else if (element.target === greenButton) {
    mainContent.style.backgroundColor = 'green';
  } else if (element.target === blueButton) {
    mainContent.style.backgroundColor = 'blue';
  } else if (element.target === yellowButton) {
    mainContent.style.backgroundColor = 'yellow';
  }
}
whiteButton.addEventListener('click', changeBackColor);
blackButton.addEventListener('click', changeBackColor);
greenButton.addEventListener('click', changeBackColor);
blueButton.addEventListener('click', changeBackColor);
yellowButton.addEventListener('click', changeBackColor);

const changeFontColor = (element) => {
  if (element.target === blackFont) {
    mainContent.style.color = 'black';
  } else if (element.target === redFont) {
    mainContent.style.color = 'red';
  } else if (element.target === whiteFont) {
    mainContent.style.color = 'white';
  }
}

blackFont.addEventListener('click', changeFontColor);
redFont.addEventListener('click', changeFontColor);
whiteFont.addEventListener('click', changeFontColor);