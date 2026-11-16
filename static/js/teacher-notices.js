function filterNotices() {
    const searchText = document.getElementById("noticeSearch")
        .value.toLowerCase();

    const selectedCategory = document.getElementById("categoryFilter").value;

    const notices = document.querySelectorAll(".notice-item");
    let visibleCount = 0;

    notices.forEach(notice => {
        const text = notice.innerText.toLowerCase();
        const category = notice.dataset.category;

        const matchesSearch = text.includes(searchText);
        const matchesCategory =
            selectedCategory === "all" || category === selectedCategory;

        if (matchesSearch && matchesCategory) {
            notice.style.display = "block";
            visibleCount++;
        } else {
            notice.style.display = "none";
        }
    });

    document.getElementById("emptyMessage").style.display =
        visibleCount === 0 ? "block" : "none";
}

function showCreateMessage() {
    alert(
        "The Create Notice feature will be enabled after backend integration."
    );
}