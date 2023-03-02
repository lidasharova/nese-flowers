//переключение класса у слайдера
let items = document.querySelectorAll('.slider__item');

function toggleClassActiveSlider(slider) {
  if (!slider.classList.contains('slider-active') && slider == items[0]) {
    slider.classList.add('slider-active');
    items[1].classList.remove('slider-active');
    items[2].classList.remove('slider-active');
  }
  if (!slider.classList.contains('slider-active') && slider == items[1]) {
    slider.classList.add('slider-active');
    items[0].classList.remove('slider-active');
    items[2].classList.remove('slider-active');
  }
  if (!slider.classList.contains('slider-active') && slider == items[2]) {
    slider.classList.add('slider-active');
    items[0].classList.remove('slider-active');
    items[1].classList.remove('slider-active');
  }
}

export default toggleClassActiveSlider;
