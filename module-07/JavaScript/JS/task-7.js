const fontSizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const changeFontSize = (event) => {
  textRef.style.fontSize = event.currentTarget.value + "px";
};

fontSizeControlRef.addEventListener("input", changeFontSize);
