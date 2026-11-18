// Q2: Show remaining characters and change warning colors.
const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");
const maximumCharacters = 100;

function updateCounter() {
    const remaining = maximumCharacters - message.value.length;
    counter.textContent = `${remaining} characters remaining`;
    counter.classList.toggle("warning", remaining <= 20 && remaining > 0);
    counter.classList.toggle("danger", remaining === 0);
}

message.addEventListener("input", updateCounter);

// maxlength is a built-in limit. This keydown guard also demonstrates
// preventDefault() when a new printable character would exceed the limit.
message.addEventListener("keydown", event => {
    const isEditingKey = event.ctrlKey || event.metaKey || event.altKey ||
        ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter"].includes(event.key);

    if (!isEditingKey && event.key.length === 1 &&
        message.value.length >= maximumCharacters &&
        message.selectionStart === message.selectionEnd) {
        event.preventDefault();
    }
});

resetButton.addEventListener("click", () => {
    message.value = "";
    updateCounter();
});

updateCounter();
