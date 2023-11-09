const btnClick = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const body = document.querySelector("body")
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnClick.addEventListener("click", chengeColor);

function chengeColor(evt) {
   let randomColor = getRandomHexColor();
   colorSpan.textContent = randomColor;
   body.style.backgroundColor = randomColor;
};
