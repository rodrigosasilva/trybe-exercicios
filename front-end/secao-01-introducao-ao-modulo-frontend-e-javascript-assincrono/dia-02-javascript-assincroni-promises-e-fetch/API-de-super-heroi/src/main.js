import './style.css';
import Swal from 'sweetalert2'

const imageHero = document.querySelector('#image-hero');
const heroName = document.querySelector('#hero-name');
const buttonSort = document.querySelector('#sort-button');

const ACCESS_TOKEN = '2162742260584412'

const HERO_API = `https://superheroapi.com/api.php/${ACCESS_TOKEN}`;

buttonSort.addEventListener('click', (event) => {
  event.preventDefault();

  const randomId = Math.floor(Math.random() * 1000);

  fetch(`${HERO_API}/${randomId}`)
    .then((response) => response.json())
    .then((data) => {
      imageHero.src = `${data.image.url}`
      heroName.innerHTML = data.name
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
})