const btnDecrement = document.querySelector(`button[data-action="decrement"]`);
const btnIncrement = document.querySelector(`button[data-action="increment"]`);
const value = document.querySelector("#value");

let counterValue = 0;
let step = 0;

btnDecrement.addEventListener("click", clicDecrement);

function clicDecrement() {
  counterValue -= 1;
  return (value.textContent = counterValue);
}

btnIncrement.addEventListener("click", clicIncrement);

function clicIncrement() {
  counterValue += 1;
  return (value.textContent = counterValue);
}
