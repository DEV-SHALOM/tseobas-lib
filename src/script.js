let password = document.getElementById("password");
let icon = document.getElementById("icon");
let passButton = document.getElementById("pass-button");
let checkbox = document.getElementById("checkbox");
// let hidden = true;

passButton.addEventListener("click", () => {
  if (checkbox.checked === false) {
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
    password.setAttribute("type", "text");
    checkbox.checked = true;
  } else if (checkbox.checked === true) {
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
    password.setAttribute("type", "password");
    checkbox.checked = false;
  } else {
    // ~~~~~~~~
  }
});
