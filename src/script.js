const password = document.getElementById("password");
const icon = document.getElementById("icon");

icon.addEventListener("click", () => {
  const isPasswordVisible = password.getAttribute("type") === "text";

  if (isPasswordVisible) {
    password.setAttribute("type", "password");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    password.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
});
