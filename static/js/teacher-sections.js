
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchSection");
    const courseFilter = document.getElementById("courseFilter");
    const sectionCards = document.querySelectorAll(".section-card");
    const emptyMessage = document.getElementById("emptyMessage");

    if (!searchInput || !courseFilter || !emptyMessage) {
        return;
    }

    function filterSections() {
        const searchText = searchInput.value.toLowerCase().trim();
        const selectedCourse = courseFilter.value;

        let visibleCount = 0;

        sectionCards.forEach(card => {
            const cardText = card.innerText.toLowerCase();
            const cardCourse = card.dataset.course;

            const matchesSearch = cardText.includes(searchText);

            const matchesCourse =
                selectedCourse === "all" ||
                cardCourse === selectedCourse;

            if (matchesSearch && matchesCourse) {
                card.style.display = "block";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });

        emptyMessage.style.display =
            visibleCount === 0 ? "block" : "none";
    }

    searchInput.addEventListener("input", filterSections);
    courseFilter.addEventListener("change", filterSections);
});

