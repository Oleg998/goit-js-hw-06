const inputText = document.querySelector("#validation-input");
const inputlength = Number(inputText.getAttribute("data-length"));
inputText.addEventListener("blur", outText);

function outText(evn) {
  const writeText = evn.currentTarget.value;

  if (writeText.length === inputlength) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
  }
}
