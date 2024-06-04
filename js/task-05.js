const inputName = document.querySelector('input[type="text"]');
const outputName = document.querySelector("#name-output");

function handleInput(event) {
  outputName.textContent = event.target.value;
  if (event.currentTarget.value.trim() === "") {
    outputName.textContent = "Anonymous";
  }
}

inputName.addEventListener("input", handleInput);
