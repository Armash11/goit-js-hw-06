const inputEl = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

inputEl.addEventListener("input", onInput);

function onInput(evt) {
  const name = inputEl.value.trim();

  if (name === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = evt.currentTarget.value;
  }
}
