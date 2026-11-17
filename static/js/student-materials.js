document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("materialSearch");
    const subjectFilter = document.getElementById("subjectFilter");
    const materials = document.querySelectorAll(".material-item");
    const emptyMessage = document.getElementById("emptyMessage");

    if (!searchInput || !subjectFilter || !emptyMessage) {
        return;
    }

    function filterMaterials() {

        const searchValue = searchInput.value.toLowerCase();
        const selectedSubject = subjectFilter.value;

        let visibleCount = 0;

        materials.forEach(function (material) {

            const subject = material.dataset.subject;
            const text = material.textContent.toLowerCase();

            const matchesSubject =
                selectedSubject === "all" || subject === selectedSubject;

            const matchesSearch = text.includes(searchValue);

            if (matchesSubject && matchesSearch) {
                material.style.display = "";
                visibleCount++;
            } else {
                material.style.display = "none";
            }

        });

        emptyMessage.style.display =
            visibleCount === 0 ? "block" : "none";
    }

    searchInput.addEventListener("input", filterMaterials);
    subjectFilter.addEventListener("change", filterMaterials);

});
