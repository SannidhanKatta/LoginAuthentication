document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".container");
  const emailInput = loginForm.querySelector('input[type="text"]');
  const passwordInput = loginForm.querySelector('input[type="password"]');
  const loginButton = loginForm.querySelector(".login-btn");
  const passwordToggle = loginForm.querySelector(".password-toggle");

  passwordToggle.addEventListener("click", togglePasswordVisibility);

  function togglePasswordVisibility() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordToggle.innerHTML = "&#x1F440;"; // Eye open
    } else {
      passwordInput.type = "password";
      passwordToggle.innerHTML = "&#x1F441;"; // Eye closed
    }
  }

  loginButton.addEventListener("click", function (e) {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields.");
    } else {
      alert(`Email: ${email}\nPassword: ${password}`);
    }
  });
});
