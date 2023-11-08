const inputText = document.querySelector("#validation-input");
const inputlength = Number(inputText.getAttribute("data-length"));
inputText.addEventListener("blur", outText);

function outText(evn) {
    const writeText = evn.currentTarget.value;
    console.log(writeText.length);
    console.log(inputlength);
  if (writeText.length === inputlength) {
    inputText.classList.add("valid");
  } else {
    inputText.classList.add("invalid");
  }
}
