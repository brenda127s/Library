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

    if (!titleValue ||!authorValue ||!pagesValue ||!hasReadValue) {
        alert("Please fill in all fields.");
        return;
    }


    let hasRead;
    if (hasReadValue) {
        hasRead = true;
    } else {
        hasRead = false;
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
    cardDelete.classList.add("card-delete");

    cardHasRead.addEventListener("click", () => {
        let button = cardHasRead;
        const parent = button.parentNode;
        let parentNumber = parent.dataset.number;
    
        if (button.textContent == "Read") {
        button.textContent = "Unread";
        button.style.backgroundColor = "rgb(255, 70, 70)";
        myLibrary[parentNumber].read = false;
        } else {
        button.textContent = "Read";
        button.style.backgroundColor = "rgb(42, 161, 42)";
        myLibrary[parentNumber].read = true;
        }
        });

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
    });
};
};
