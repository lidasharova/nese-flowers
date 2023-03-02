import getData from './api.js';
import renderCard from './renderCard.js';
import showPopUp from './showPopUp.js';

//карточки флористики
let cards;
let containerFloristic = document.getElementById('containerFloristic');
console.log(containerFloristic);

const showCardsFloristic = async () => {
  const url = 'dist/data/cardsFloristic_data.json'; //файл с данными о карточках
  try {
    cards = await getData(url);
  } catch (error) {
    console.log(message);
  }

  //отрисовка карточек
  cards.forEach((card) => {
    renderCard(card, containerFloristic);
  });
  showPopUp();
};

export default showCardsFloristic;
