function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  changeBtn: document.querySelector(".change-color"),
  spanEl: document.querySelector(".color")
};

function onHandleClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.spanEl.textContent = getRandomHexColor();
}


refs.changeBtn.addEventListener('click', onHandleClick)