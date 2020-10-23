const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const gallerysList = document.querySelector("#ingredients");

const asd = ingredients.map((ingredient) => {
  const createLi = document.createElement("li");
  createLi.textContent = ingredient;
  return createLi;
});

gallerysList.prepend(...asd);
