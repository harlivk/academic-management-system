
document.addEventListener("DOMContentLoaded", function () {

    // Show and hide password fields
    document.querySelectorAll(".toggle-password").forEach(function (button) {

        button.addEventListener("click", function () {

            const targetId = this.getAttribute("data-target");
            const input = document.getElementById(targetId);

            if (!input) return;

            const isPassword = input.type === "password";

            input.type = isPassword ? "text" : "password";

            this.innerHTML = isPassword
                ? '<i class="bi bi-eye-slash"></i>'
                : '<i class="bi bi-eye"></i>';

            this.setAttribute(
                "aria-label",
                isPassword ? "Hide password" : "Show password"
            );
        });

    });

    // Check password confirmation
    const registerForm = document.getElementById("teacherRegisterForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {

            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm_password").value;

            if (password !== confirmPassword) {
                event.preventDefault();
                alert("Passwords do not match. Please check again.");
            }

        });
    }

});

