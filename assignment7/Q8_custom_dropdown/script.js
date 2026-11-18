// Q8: Custom dropdown; document capture phase closes it on outside clicks.
const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");

dropdownButton.addEventListener("click", () => {
    const isOpening = dropdownOptions.hidden;
    dropdownOptions.hidden = !isOpening;
    dropdownButton.setAttribute("aria-expanded", String(isOpening));
});

dropdownOptions.addEventListener("click", event => {
    const optionButton = event.target.closest("button");
    if (!optionButton) return;

    dropdownButton.textContent = optionButton.textContent;
    dropdownOptions.hidden = true;
    dropdownButton.setAttribute("aria-expanded", "false");
});

// Capture phase: this listener runs before normal bubbling listeners.
document.addEventListener("click", event => {
    if (!dropdown.contains(event.target)) {
        dropdownOptions.hidden = true;
        dropdownButton.setAttribute("aria-expanded", "false");
    }
}, true);
