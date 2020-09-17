const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

const changeText = () => {
  spanRef.textContent = inputRef.value;
  if (inputRef.value.length === 0) {
    spanRef.textContent = "незнакомец";
  }
};
inputRef.addEventListener("input", changeText);
