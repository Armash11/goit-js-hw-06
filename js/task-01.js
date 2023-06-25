const items = document.querySelectorAll("li.item");
console.log(`Number of categories: ${items.length}`);

const categories = document.querySelector("#categories");

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});
