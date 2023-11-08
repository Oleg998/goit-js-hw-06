const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", writeText);

function writeText(evt) {
  const inputTex = evt.currentTarget.value;
  if (inputTex === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = inputTex;
  }
}
