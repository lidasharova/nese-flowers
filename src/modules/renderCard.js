//ф-ция для отрисовки карточки

function renderCard(card, containerSelector) {
  let htmlCard = `
  					<div class="flowers__card">
  						    <img class="flowers__card__img" src="${card.img}" alt="photo-flowers">
  						<div class="flowers__card__content">
  							  <h3 class="flowers__card__name title-mini">${card.type}</h3>
  							  <h1 class="flowers__card__title title-main">${card.name}</h1>
  							  <p class="flowers__card__description text-style">${card.description}</p>
  							<div class="flowers__card__price-wrapper">
  								    <div class="flowers__card__price">${card.price}</div>
  								    <button class="flowers__card__button button button_unactive open-popup"><a
  										class="button__link" href="#">заказать</a></button>
  							</div>
  						</div>
  					</div>
      `;

  //   отрисовка в нужном контейнере
  containerSelector.insertAdjacentHTML('beforeend', htmlCard);
}

export default renderCard;
