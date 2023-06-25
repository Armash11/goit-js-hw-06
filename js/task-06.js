const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  const enteredValue = inputEl.value.trim();
  const requiredLength = Number(inputEl.dataset.length);
  inputEl.classList.remove("valid", "invalid");
  if (enteredValue.length === requiredLength) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
});
