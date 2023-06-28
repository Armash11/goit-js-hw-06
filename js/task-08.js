const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  const formData = Object.fromEntries(new FormData(formEl));

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(formData);
  evt.currentTarget.reset();
}
