// Q3: Three-step form with validation, Back and Next controls.
const form = document.getElementById("registrationForm");
const steps = [...document.querySelectorAll(".step")];
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const error = document.getElementById("error");
const summary = document.getElementById("summary");
const summaryText = document.getElementById("summaryText");
let currentStep = 0;

function showStep() {
    steps.forEach((step, index) => step.classList.toggle("active", index === currentStep));
    backButton.disabled = currentStep === 0;
    nextButton.textContent = currentStep === steps.length - 1 ? "Submit" : "Next";
    error.textContent = "";
}

function validateCurrentStep() {
    const input = steps[currentStep].querySelector("input");
    const value = input.value.trim();

    if (!value) {
        error.textContent = "This field is required.";
        input.focus();
        return false;
    }

    if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error.textContent = "Please enter a valid email address.";
        input.focus();
        return false;
    }

    if (input.type === "password" && value.length < 6) {
        error.textContent = "Password must contain at least 6 characters.";
        input.focus();
        return false;
    }

    return true;
}

nextButton.addEventListener("click", () => {
    if (!validateCurrentStep()) return;

    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep();
    } else {
        const data = new FormData(form);
        summaryText.textContent =
            `Name: ${data.get("fullName")} | Email: ${data.get("email")} | Password: ${"*".repeat(String(data.get("password")).length)}`;
        form.hidden = true;
        summary.hidden = false;
    }
});

backButton.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
});

showStep();
