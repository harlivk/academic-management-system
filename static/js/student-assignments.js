
document.addEventListener("DOMContentLoaded", function () {

    const filter = document.getElementById("assignmentFilter");

    const assignments = document.querySelectorAll(".assignment-item");

    if (!filter) {
        return;
    }

    filter.addEventListener("change", function () {

        const selectedStatus = filter.value;

        assignments.forEach(function (item) {

            const status = item.dataset.status;

            if (selectedStatus === "all" || status === selectedStatus) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});
