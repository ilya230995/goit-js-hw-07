const boxesRef = document.querySelector("#boxes");
const controlsRef = document.querySelector("#controls");
const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="destroy"]');
const inputNumberREf = controlsRef.querySelector("input");

const createBoxes = (amount) => {
  amount = +inputNumberREf.value;
  const fragment = document.createDocumentFragment();
  const firstElementSize = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    const nextDivSize = firstElementSize + i * 10;
    div.style = `width: ${nextDivSize}px; height: ${nextDivSize}px; background-color: rgba( ${randomRgb()} , ${randomRgb()} , ${randomRgb()} )`;
    fragment.appendChild(div);
  }
  boxesRef.appendChild(fragment);
};

const randomRgb = () => {
  return Math.floor(Math.random() * 255);
};

const removeBoxes = () => {
  boxesRef.innerHTML = "";
  inputNumberREf.value = null;
};

renderRef.addEventListener("click", createBoxes);
destroyRef.addEventListener("click", removeBoxes);
