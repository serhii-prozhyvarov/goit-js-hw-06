const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

console.log(decrementBtn);
console.log(incrementBtn);
console.log(valueEl);

let counterValue = 0;

function handleDecrement() {
    counterValue -= 1
    valueEl.textContent = counterValue;
}

function handleIncrement() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

decrementBtn.addEventListener('click', handleDecrement)
incrementBtn.addEventListener("click", handleIncrement);