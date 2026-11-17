document.addEventListener("DOMContentLoaded", function () {

    const filter = document.getElementById("noticeFilter");
    const notices = document.querySelectorAll(".notice-card");
    const emptyMessage = document.getElementById("emptyMessage");

    if (!filter || !emptyMessage) {
        return;
    }

    filter.addEventListener("change", function () {

        const selectedCategory = filter.value;
        let visibleCount = 0;

        notices.forEach(function (notice) {

            const category = notice.dataset.category;

            if (selectedCategory === "all" || category === selectedCategory) {
                notice.style.display = "block";
                visibleCount++;
            } else {
                notice.style.display = "none";
            }

        });

        emptyMessage.style.display = visibleCount === 0 ? "block" : "none";

    });

});