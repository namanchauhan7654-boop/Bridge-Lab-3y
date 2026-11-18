// Q1: Add, edit and delete products using event delegation.
const productForm = document.getElementById("productForm");
const productInput = document.getElementById("productInput");
const productList = document.getElementById("productList");

function saveEditedItem(item) {
    const editInput = item.querySelector(".edit-input");
    if (!editInput) return;

    const newName = editInput.value.trim();
    if (newName) {
        item.querySelector(".product-name").textContent = newName;
    }
    editInput.remove();
    item.querySelector(".product-name").hidden = false;
    item.dataset.editing = "false";
}

function finishCurrentEdit() {
    const editingItem = productList.querySelector('li[data-editing="true"]');
    if (editingItem) saveEditedItem(editingItem);
}

productForm.addEventListener("submit", event => {
    event.preventDefault();
    const productName = productInput.value.trim();
    if (!productName) return;

    finishCurrentEdit();

    const item = document.createElement("li");
    item.dataset.editing = "false";

    const name = document.createElement("span");
    name.className = "product-name";
    name.textContent = productName;

    const editButton = document.createElement("button");
    editButton.className = "edit";
    editButton.type = "button";
    editButton.dataset.action = "edit";
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.type = "button";
    deleteButton.dataset.action = "delete";
    deleteButton.textContent = "Delete";

    item.append(name, editButton, deleteButton);
    productList.appendChild(item);
    productInput.value = "";
});

// One listener on the parent handles all Edit and Delete buttons.
productList.addEventListener("click", event => {
    const actionButton = event.target.closest("button[data-action]");
    if (!actionButton) return;

    const item = actionButton.closest("li");
    if (actionButton.dataset.action === "delete") {
        item.remove();
    } else if (actionButton.dataset.action === "edit") {
        finishCurrentEdit();
        const name = item.querySelector(".product-name");
        const editInput = document.createElement("input");
        editInput.className = "edit-input";
        editInput.value = name.textContent;
        name.hidden = true;
        item.insertBefore(editInput, name);
        item.dataset.editing = "true";
        editInput.focus();
        editInput.select();
    }
});

// Save on Enter, cancel is not required; clicking outside auto-saves.
productList.addEventListener("keydown", event => {
    if (event.target.matches(".edit-input") && event.key === "Enter") {
        saveEditedItem(event.target.closest("li"));
    }
});

document.addEventListener("click", event => {
    const editingItem = productList.querySelector('li[data-editing="true"]');
    if (editingItem && !editingItem.contains(event.target)) {
        saveEditedItem(editingItem);
    }
});
