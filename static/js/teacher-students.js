document.addEventListener("DOMContentLoaded", function () {
    const studentSearch = document.getElementById("studentSearch");
    const courseFilter = document.getElementById("courseFilter");
    const sectionFilter = document.getElementById("sectionFilter");
    const studentRows = document.querySelectorAll(".student-row");
    const emptyState = document.getElementById("emptyState");
    const resultCount = document.getElementById("resultCount");

    if (
        !studentSearch ||
        !courseFilter ||
        !sectionFilter ||
        !emptyState ||
        !resultCount
    ) {
        return;
    }

    function filterStudents() {
        const searchValue = studentSearch.value.toLowerCase().trim();
        const selectedCourse = courseFilter.value;
        const selectedSection = sectionFilter.value;

        let visibleCount = 0;

        studentRows.forEach(function (row) {
            const rowText = row.textContent.toLowerCase();
            const course = row.dataset.course;
            const section = row.dataset.section;

            const matchesSearch = rowText.includes(searchValue);

            const matchesCourse =
                selectedCourse === "all" || course === selectedCourse;

            const matchesSection =
                selectedSection === "all" || section === selectedSection;

            if (matchesSearch && matchesCourse && matchesSection) {
                row.style.display = "";
                visibleCount++;
            } else {
                row.style.display = "none";
            }
        });

        resultCount.textContent =
            visibleCount + (visibleCount === 1 ? " Student" : " Students");

        emptyState.style.display =
            visibleCount === 0 ? "block" : "none";
    }

    studentSearch.addEventListener("input", filterStudents);
    courseFilter.addEventListener("change", filterStudents);
    sectionFilter.addEventListener("change", filterStudents);
});