const incrementBtnRef = document.querySelector('[data-action="increment"]');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const spanCounterRef = document.querySelector("#value");

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  spanCounterRef.textContent = counterValue;
  return spanCounterRef.textContent;
};

const decrement = () => {
  counterValue = counterValue - 1;
  spanCounterRef.textContent = counterValue;
  return spanCounterRef.textContent;
};

incrementBtnRef.addEventListener("click", increment);
decrementBtnRef.addEventListener("click", decrement);
