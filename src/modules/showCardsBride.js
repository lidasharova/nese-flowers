import getData from './api.js';
import renderCard from './renderCard.js';
import showPopUp from './showPopUp.js';

// карточки букетов невесты
let cards;
let containerBride = document.getElementById('containerBride');
console.log(containerBride);

const showCardsBride = async () => {
  const url = 'dist/data/cardsBride_data.json'; //файл с данными
  try {
    cards = await getData(url);
    console.log(cards);
  } catch (error) {
    console.log(message);
  }

  //отрисовка в нужный контейнер
  cards.forEach((card) => {
    renderCard(card, containerBride);
  });
  showPopUp();
};

export default showCardsBride;
