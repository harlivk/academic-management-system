
document.addEventListener("DOMContentLoaded", function () {

    // Automatically dismiss Django messages after 5 seconds
    const alerts = document.querySelectorAll(".message-container .alert");

    alerts.forEach(function (alert) {
        setTimeout(function () {
            const closeButton = alert.querySelector(".btn-close");

            if (closeButton) {
                closeButton.click();
            }
        }, 5000);
    });

});
