
//popup

function showPopUp() {
  let popupBg = document.querySelector('.popup__bg');
  let popup = document.querySelector('.popup');
  let openPopupButtons = document.querySelectorAll('.open-popup');
  let closePopupButton = document.querySelector('.close-popup');

  //обработчик на кнопку открытия попап
  openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('active');
      popup.classList.add('active');
    });
  });

  //скрытие попап на крестик
  closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
  });

  //скрытие при нажатии на фон попап
  document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
      popupBg.classList.remove('active');
      popup.classList.remove('active');
    }
  });
}

export default showPopUp;
