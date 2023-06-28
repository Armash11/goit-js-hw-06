function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const body = document.querySelector("body");

buttonEl.addEventListener("click", onChangeColor);

function onChangeColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanEl.textContent = randomColor;
}
