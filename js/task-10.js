function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// refs = {
//   inputEl: document.querySelector("input"),
//   buttonCreate: document.querySelector("[data-destroy]"),
//   buttonDestroy: document.querySelector("[data-destroy]"),
//   boxes: document.querySelector("#boxes"),
// };

// function createBoxes(amount) {
//   let boxesContainer = refs.boxes;
//   let size = 30;
//   for (let i = 1; i < amount; i += 1) {
//     const newDiv = document.createElement("div");
//     newDiv.style.width = size + "px";
//     newDiv.style.height = size + "px";
//     newDiv.style.background = getRandomHexColor();
//     refs.boxes.appendChild(newDiv);
//     size += 10;
//   }
// }

// refs.buttonCreate.addEventListener("click", onCreate);

// function onCreate() {
//   let amount = input.value;
//   createBoxes(amount);
// }

// refs.buttonDestroy.addEventListener("click", onDestroy);

// function onDestroy() {
//   let amount = input.value;
//   createBoxes(amount);
// }
