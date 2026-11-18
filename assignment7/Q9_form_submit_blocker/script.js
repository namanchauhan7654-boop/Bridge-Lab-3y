// Q9: Validate fields, prevent invalid submission and clear errors live.
const userForm = document.getElementById("userForm");
const fields = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    password: document.getElementById("password")
};
const successMessage = document.getElementById("successMessage");

function validateField(fieldName) {
    const field = fields[fieldName];
    const value = field.value.trim();
    let errorMessage = "";

    if (fieldName === "name" && !value) {
        errorMessage = "Name is required.";
    } else if (fieldName === "email" && (!value || !value.includes("@"))) {
        errorMessage = "Enter an email containing @.";
    } else if (fieldName === "password" && value.length < 6) {
        errorMessage = "Password must be at least 6 characters.";
    }

    document.getElementById(`${fieldName}Error`).textContent = errorMessage;
    field.classList.toggle("invalid", Boolean(errorMessage));
    return errorMessage === "";
}

// Revalidate a field as soon as the user changes it.
Object.entries(fields).forEach(([fieldName, field]) => {
    field.addEventListener("input", () => {
        validateField(fieldName);
        successMessage.textContent = "";
    });
});

userForm.addEventListener("submit", event => {
    // Prevent browser navigation/submission while validating.
    event.preventDefault();

    const isValid = Object.keys(fields).map(validateField).every(Boolean);

    if (isValid) {
        successMessage.textContent = "Form Submitted Successfully";
        userForm.reset();
        Object.keys(fields).forEach(fieldName => {
            document.getElementById(`${fieldName}Error`).textContent = "";
            fields[fieldName].classList.remove("invalid");
        });
    } else {
        successMessage.textContent = "";
    }
});
