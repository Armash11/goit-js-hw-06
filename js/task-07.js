const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
console.log(inputEl);
console.log(textEl);

inputEl.addEventListener("input", onChangeText);

function onChangeText() {
  const fontSize = inputEl.value + "px";
  textEl.style.fontSize = fontSize;
}
