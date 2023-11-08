const frontsizecontrol = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

frontsizecontrol.addEventListener("input", changeSize);
function changeSize(evn) {
  const fontSize = frontsizecontrol.value + "px";
  textSpan.style.fontSize = fontSize;
}
