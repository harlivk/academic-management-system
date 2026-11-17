document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("documentSearch");
    const categoryFilter = document.getElementById("documentFilter");
    const documents = document.querySelectorAll(".document-item");
    const emptyMessage = document.getElementById("emptyMessage");

    function filterDocuments() {
        const searchText = searchInput.value.toLowerCase().trim();
        const selectedCategory = categoryFilter.value;

        let visibleCount = 0;

        documents.forEach(function (document) {
            const text = document.innerText.toLowerCase();
            const category = document.dataset.category;

            const matchesSearch = text.includes(searchText);
            const matchesCategory =
                selectedCategory === "all" ||
                category === selectedCategory;

            if (matchesSearch && matchesCategory) {
                document.style.display = "flex";
                visibleCount++;
            } else {
                document.style.display = "none";
            }
        });

        emptyMessage.style.display =
            visibleCount === 0 ? "block" : "none";
    }

    searchInput.addEventListener("input", filterDocuments);
    categoryFilter.addEventListener("change", filterDocuments);
});