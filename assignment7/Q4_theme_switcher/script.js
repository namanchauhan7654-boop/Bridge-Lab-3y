// Q4: Change the body theme using setAttribute().
const themeButtons = document.querySelectorAll("[data-theme-choice]");
const currentTheme = document.getElementById("currentTheme");

function applyTheme(themeName) {
    document.body.classList.remove("dark-theme", "blue-theme");
    if (themeName === "dark") {
        document.body.classList.add("dark-theme");
    } else if (themeName === "blue") {
        document.body.classList.add("blue-theme");
    }

    // Store the selected theme in the required custom attribute.
    document.body.setAttribute("data-theme", themeName);
    currentTheme.textContent = themeName.charAt(0).toUpperCase() + themeName.slice(1);
}

themeButtons.forEach(button => {
    button.addEventListener("click", () => {
        applyTheme(button.getAttribute("data-theme-choice"));
    });
});

applyTheme(document.body.getAttribute("data-theme") || "light");
