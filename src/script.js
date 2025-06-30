let password = document.getElementById("password")
let icon = document.getElementById("icon");
let hidden = true;

icon.addEventListener("click", () => {
    if (hidden === true) {
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
    password.setAttribute("type", "text")
    hidden = false;
} else if (hidden === false) {
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
    password.setAttribute("type", "password")
      hidden = true;
    }
    else{
    // ~~~~~~~~
    }
});
