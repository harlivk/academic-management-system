
document.addEventListener("DOMContentLoaded", function () {
    const subjectSearch = document.getElementById("subjectSearch");
    const courseFilter = document.getElementById("courseFilter");
    const subjectItems = document.querySelectorAll(".subject-item");
    const emptyState = document.getElementById("emptyState");

    if (!subjectSearch || !courseFilter || !emptyState) {
        return;
    }

    function filterSubjects() {
        const searchValue = subjectSearch.value.toLowerCase().trim();
        const selectedCourse = courseFilter.value;

        let visibleCount = 0;

        subjectItems.forEach(function (item) {
            const subjectText = item.textContent.toLowerCase();
            const course = item.dataset.course;

            const matchesSearch = subjectText.includes(searchValue);

            const matchesCourse =
                selectedCourse === "all" || course === selectedCourse;

            if (matchesSearch && matchesCourse) {
                item.style.display = "";
                visibleCount++;
            } else {
                item.style.display = "none";
            }
        });

        emptyState.style.display =
            visibleCount === 0 ? "block" : "none";
    }

    subjectSearch.addEventListener("input", filterSubjects);
    courseFilter.addEventListener("change", filterSubjects);
});
