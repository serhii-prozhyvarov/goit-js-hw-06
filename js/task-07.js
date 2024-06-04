const refs = {
  inputItem: document.querySelector('input[type="range"]'),
  spanItem: document.querySelector("#text"),
};

console.log(refs.spanItem);


refs.inputItem.addEventListener("input", handleInput);

function handleInput() {
    const fontSize = refs.inputItem.value;
    refs.spanItem.style.fontSize = fontSize + "px";
   
}


