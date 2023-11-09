const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  const emailValue = email.value;
  const passwordValue = password.value;
  if (emailValue === "" || passwordValue === "") {
    const message = " Всі поля повинні бути заповнені!!!";
    alert(message);
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
  }
}
