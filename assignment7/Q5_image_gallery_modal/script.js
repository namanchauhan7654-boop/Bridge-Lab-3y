// Q5: Open a modal preview for the image that was clicked.
const gallery = document.getElementById("gallery");
const modal = document.getElementById("imageModal");
const modalContent = document.querySelector(".modal-content");
const largeImage = document.getElementById("largeImage");
const closeModalButton = document.getElementById("closeModal");

gallery.addEventListener("click", event => {
    if (event.target.tagName !== "IMG") return;

    largeImage.src = event.target.src;
    largeImage.alt = event.target.alt;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
});

modal.addEventListener("click", () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
});

// Prevent clicks inside the modal content from reaching the modal backdrop.
modalContent.addEventListener("click", event => event.stopPropagation());

closeModalButton.addEventListener("click", event => {
    event.stopPropagation();
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
});
