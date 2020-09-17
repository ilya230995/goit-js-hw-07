const listItemsRef = categories.querySelectorAll(".item");

const categoriesLength = categories.querySelectorAll(".item").length;
console.log(`В списке ${categoriesLength} категории.`);

listItemsRef.forEach((listItem) => {
  const secondListRef = listItem.querySelector("ul");
  console.log(
    `Категория: ${
      listItem.firstElementChild.textContent
    }; Количество элементов: ${secondListRef.querySelectorAll("li").length}`
  );
});
