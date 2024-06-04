const refs = {
  inputEl: document.querySelector('input[type="text"]'),
};

function handleInput(event) {
  const inputValue = event.target.value.trim();

  if (inputValue.length === 6) {
    refs.inputEl.classList.add("valid");
    refs.inputEl.classList.remove("invalid");
  } else {
    refs.inputEl.classList.add("invalid");
    refs.inputEl.classList.remove("valid");
  }
}

refs.inputEl.addEventListener("blur", handleInput);
