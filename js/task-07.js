const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onChangeText);

function onChangeText() {
  const fontSize = inputEl.value + "px";
  textEl.style.fontSize = fontSize;
}
