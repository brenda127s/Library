const newBook = document.querySelector("#new-book");
const dialog = document.querySelector("dialog");
const closeDialog = document.querySelector("#close");

newBook.addEventListener("click", () => {
    dialog.showModal();
});

closeDialog.addEventListener("click", () => {
    dialog.closeModal();
});
