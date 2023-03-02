//смена изображений в слайдере
import toggleClassActiveSlider from './toggleClassActiveSlider.js';

function toggleImgSlider() {
  const items = document.querySelectorAll('.slider__item');
  const image = document.querySelector('.about__img');
  let link = '';
  let img = new Image();

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', (e) => {
      let slider = e.target;
      toggleClassActiveSlider(slider);
      link = `url('assets/img/about/${i + 1}.png')`;
      img.src = `assets/img/about/${i + 1}.png`;
      img.onload = () => {
        image.style.backgroundImage = link;
      };
    });
  }
}

export default toggleImgSlider;
