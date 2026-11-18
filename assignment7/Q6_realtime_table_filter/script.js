// Q6: Filter student rows immediately as the user types.
const searchInput = document.getElementById("searchInput");
const studentRows = document.querySelectorAll("#studentRows tr");
const emptyMessage = document.getElementById("emptyMessage");

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.trim().toLowerCase();
    let visibleRows = 0;

    studentRows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        const matches = rowText.includes(searchText);
        row.hidden = !matches;
        if (matches) visibleRows++;
    });

    emptyMessage.hidden = visibleRows !== 0;
});
