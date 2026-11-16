
document.addEventListener("DOMContentLoaded", function () {
    const studentSearch = document.getElementById("studentSearch");
    const sectionFilter = document.getElementById("sectionFilter");
    const subjectFilter = document.getElementById("subjectFilter");
    const resultFilter = document.getElementById("resultFilter");

    const marksRows = document.querySelectorAll(".marks-row");
    const emptyMessage = document.getElementById("emptyMessage");
    const exportButton = document.getElementById("exportResultsBtn");

    function filterMarks() {
        const searchText = studentSearch.value.toLowerCase().trim();
        const section = sectionFilter.value;
        const subject = subjectFilter.value;
        const result = resultFilter.value;

        let visibleCount = 0;

        marksRows.forEach(function (row) {
            const rowText = row.innerText.toLowerCase();

            const matchesSearch = rowText.includes(searchText);
            const matchesSection =
                section === "all" || row.dataset.section === section;
            const matchesSubject =
                subject === "all" || row.dataset.subject === subject;
            const matchesResult =
                result === "all" || row.dataset.result === result;

            if (
                matchesSearch &&
                matchesSection &&
                matchesSubject &&
                matchesResult
            ) {
                row.style.display = "";
                visibleCount++;
            } else {
                row.style.display = "none";
            }
        });

        emptyMessage.style.display =
            visibleCount === 0 ? "block" : "none";
    }

    if (
        studentSearch &&
        sectionFilter &&
        subjectFilter &&
        resultFilter &&
        emptyMessage
    ) {
        studentSearch.addEventListener("input", filterMarks);
        sectionFilter.addEventListener("change", filterMarks);
        subjectFilter.addEventListener("change", filterMarks);
        resultFilter.addEventListener("change", filterMarks);
    }

    if (exportButton) {
        exportButton.addEventListener("click", function () {
            alert(
                "The Export Results feature will be connected to the backend later."
            );
        });
    }
});
