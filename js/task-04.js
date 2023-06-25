const counter = document.querySelector("#value");
const buttons = document.querySelectorAll("button[data-action]");

let counterValue = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    counterValue = action === "increment" ? counterValue + 1 : counterValue - 1;
    counter.textContent = counterValue;
  });
});
