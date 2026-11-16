
document.addEventListener("DOMContentLoaded", function () {

    const teacherPassword = document.getElementById("teacherPassword");
    const toggleTeacherPassword = document.getElementById("toggleTeacherPassword");

    if (teacherPassword && toggleTeacherPassword) {

        toggleTeacherPassword.addEventListener("click", function () {

            const isPassword = teacherPassword.type === "password";

            teacherPassword.type = isPassword ? "text" : "password";

            this.innerHTML = isPassword
                ? '<i class="bi bi-eye-slash"></i>'
                : '<i class="bi bi-eye"></i>';

            this.setAttribute(
                "aria-label",
                isPassword ? "Hide password" : "Show password"
            );

        });

    }

});
