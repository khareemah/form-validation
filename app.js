const form = document.querySelector(".form");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const password2 = document.querySelector(".password2");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const password2Value = password2.value;
  //check for empty username string
  if (usernameValue === "") {
    showError(username, "usenname cannot be empty");
  } else {
    showSuccess(username);
  }

  //check for empty and valid email
  if (emailValue === "") {
    showError(email, "email cannot be empty");
  } else if (!validateEmail(emailValue)) {
    showError(email, "email is not valid");
  } else {
    showSuccess(email);
  }

  //check first password is empty and lenght is okay
  if (passwordValue === "") {
    showError(password, "password cannot be empty");
  } else if (passwordValue.length < 3) {
    showError(password, "password is too short");
  } else if (passwordValue.length > 10) {
    showError(password, "password is too long");
  } else {
    showSuccess(password);
  }

  //check empty string for second password and if they match
  if (password2Value === "") {
    showError(password2, "password can not be empty");
  } else if (password2Value.length < 3) {
    showError(password2, "password is too short");
  } else if (password2Value.length > 10) {
    showError(password2, "password is too long");
  } else if (password2Value !== passwordValue) {
    showError(password2, "passwords do not match");
  } else {
    showSuccess(password2);
  }
});
function showError(input, message) {
  const formControl = input.parentElement;
  const errorMesssage = formControl.querySelector(".form-control small");

  errorMesssage.innerHTML = message;
  formControl.classList.add("error");
  formControl.classList.remove("success");
}
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add("success");
  formControl.classList.remove("error");
}
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
