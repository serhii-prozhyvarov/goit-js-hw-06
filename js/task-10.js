// Задание 10 (выполнять не обязательно)
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает
// кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>,
// сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const refs = {
  createElBtn: document.querySelector("[data-create]"),
  removeElBtn: document.querySelector("[data-destroy]"),
  divForBoxes: document.querySelector("#boxes"),
  inputEl: document.querySelector("input"),
  controlsEl: document.querySelector("#controls"),
};
// console.log(refs.createElBtn);
// console.log(refs.removeElBtn);
// console.log(refs.divForBoxes);
// console.log(refs.inputEl);
// console.log(refs.controlsEl)

refs.createElBtn.addEventListener("click", onBtnCreateBox);
refs.removeElBtn.addEventListener("click", onBtnRemoveBox);

function onBtnCreateBox() {
  let number = Number(refs.inputEl.value);
  const boxCollection = [];
  if (
    number >= refs.inputEl.attributes.min.value &&
    number <= refs.inputEl.attributes.max.value
  ) {
    for (let i = 0; i < refs.inputEl.value; i += 1) {
      const newBox = document.createElement("div");
      newBox.style.width = `${30 + i * 10}px`;
      newBox.style.height = `${30 + i * 10}px`;
      newBox.style.backgroundColor = getRandomHexColor();
      boxCollection.push(newBox);
      // console.log(boxCollection);
    }
    refs.divForBoxes.append(...boxCollection);
    console.log(refs.divForBoxes);
    refs.inputEl.value = ``;
  } else {
    alert("Введи число від 1 до 100");
  }
}

function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  return color;
}

function onBtnRemoveBox() {
  refs.divForBoxes.innerHTML = ``;
  refs.inputEl.value = "";
}
