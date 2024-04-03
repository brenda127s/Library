const newBook = document.querySelector("#new-book");
const dialog = document.querySelector("dialog");
const closeDialog = document.querySelector("#close");
const confirmDialog = document.querySelector("#confirm");
const library = document.querySelector("#library");

const myLibrary = [];

newBook.addEventListener("click", () => {
    dialog.showModal();
});

closeDialog.addEventListener("click", () => {
    dialog.closeModal();
});

confirmDialog.addEventListener("click", () => {
    event.preventDefault();
    confirmAction();
    dialog.close();
});

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
};

function confirmAction() {
    const titleValue = document.querySelector("#book-title").value;
    const authorValue =  document.querySelector("#book-author").value;
    const pagesValue = document.querySelector("#page-numbers").value;
    let hasReadValue = document.querySelector("#has-read").checked;

    let hasRead;
    if (hasReadValue) {
        hasRead = true;
        // cardHasRead.textContent = "Read";
        // cardHasRead.style.backgroundColor = "rgba(61, 164, 65)";
    } else {
        hasRead = false;
        // cardHasRead.textContent = "Unread";
        // cardHasRead.style.backgroundColor = "rgba(200, 61, 61)";
    }

    const book = new Book(titleValue, authorValue, pagesValue, hasReadValue);
    myLibrary.push(book);
    createCard();

    let booksArray = 0;

    function createCard() {
    const card = document.createElement("div");
    const cardTitle = document.createElement("h2");
    const cardAuthor = document.createElement("p");
    const cardPages = document.createElement("p");
    const cardHasRead = document.createElement("button");
    const cardDelete = document.createElement("button");

    card.classList.add("card");
    cardTitle.textContent = titleValue;
    cardAuthor.textContent = "Written by: " + authorValue;
    cardPages.textContent = pagesValue + " pages";
    cardHasRead.classList.add("has-read");
    

    if (hasRead === true) {
        cardHasRead.textContent = "Read";
        cardHasRead.style.backgroundColor = "rgba(61, 164, 65)";
    } else {
        cardHasRead.textContent = "Unread";
        cardHasRead.style.backgroundColor = "rgba(200, 61, 61)";
    };
    
    
    cardDelete.classList.add("delete-card");
    cardDelete.textContent = "Delete";

    
    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardHasRead);
    card.appendChild(cardDelete);

    document.querySelector("#library").appendChild(card);


    cardDelete.addEventListener("click", () => {
        card.remove();
    })
}
}

