const validationInputRef = document.querySelector("#validation-input");

const validation = () => {
  if (validationInputRef.value.length > validationInputRef.dataset.length) {
    console.log(validationInputRef.value.length);
    validationInputRef.classList.remove("valid");
    return validationInputRef.classList.add("invalid");
  }

  console.log(validationInputRef.value.length);
  validationInputRef.classList.add("valid");
  return validationInputRef.classList.replace("invalid", "valid");
};

validationInputRef.addEventListener("blur", validation);
