const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const gallerysList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const createLi = document.createElement("li");
  const addToUl = ingredientsList.appendChild(createLi);
  return addToUl.prepend(ingredient);
});
