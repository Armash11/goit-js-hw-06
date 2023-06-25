const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const container = document.querySelector("#ingredients");

// const list = document.createElement("li");
ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  container.appendChild(li);
});

// ul.appendChild(list);
console.dir(container);
