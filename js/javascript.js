const myLibrary = [];

const libraryElement = document.querySelector("#library");
const addBookButton = document.querySelector("#addBook");
const cancelButton = document.querySelector("#cancel-button");
const bookInputWindow = document.querySelector("#book-input");
const transparentPanel = document.querySelector("#transparent-blocker");
const submitButton = document.querySelector("#submit-button");
const titleInput = bookInputWindow.querySelector("#title");
const authorInput = bookInputWindow.querySelector("#author");
const pagesInput = bookInputWindow.querySelector("#pages");
const readStatus = bookInputWindow.querySelector("#read-status");

class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }

    toggleReadStatus() {
        this.readStatus = !this.readStatus;
    }

    render() {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        // Add book details
        this.addField("Title:", this.title, bookDiv);
        this.addField("Author:", this.author, bookDiv);
        this.addField("Pages:", this.pages, bookDiv);

        // Add read status toggle
        const uniqueValue = Date.now();
        const readStatusDiv = document.createElement("div");
        const readStatusCheckbox = document.createElement("input");
        const readStatusLabel = document.createElement("label");

        readStatusCheckbox.type = "checkbox";
        readStatusCheckbox.id = "read-status" + uniqueValue;
        readStatusCheckbox.checked = this.readStatus;

        readStatusLabel.setAttribute("for", readStatusCheckbox.id);
        readStatusLabel.textContent = this.readStatus ? "Already finished" : "Haven't read yet";

        readStatusCheckbox.addEventListener("click", () => {
            this.toggleReadStatus();
            readStatusLabel.textContent = this.readStatus ? "Already finished" : "Haven't read yet";
        });

        readStatusDiv.appendChild(readStatusCheckbox);
        readStatusDiv.appendChild(readStatusLabel);
        bookDiv.appendChild(readStatusDiv);

        // Add remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            bookDiv.remove();
            Library.removeBook(this);
        });
        bookDiv.appendChild(removeButton);

        return bookDiv;
    }

    addField(header, data, target) {
        const newHeader = document.createElement("h4");
        newHeader.textContent = header;
        const newP = document.createElement("p");
        newP.textContent = data;
        target.appendChild(newHeader);
        target.appendChild(newP);
    }
}

class Library {
    static books = [];

    static addBook(book) {
        this.books.push(book);
        this.renderLibrary();
    }

    static removeBook(book) {
        this.books = this.books.filter(b => b !== book);
        this.renderLibrary();
    }

    static renderLibrary() {
        libraryElement.innerHTML = ""; // Clear library
        this.books.forEach(book => {
            libraryElement.appendChild(book.render());
        });
    }
}

// UI Logic
function displayAddBookWindow() {
    document.body.appendChild(transparentPanel);
    document.body.appendChild(bookInputWindow);
}

function hideAddBookWindow() {
    document.body.removeChild(transparentPanel);
    document.body.removeChild(bookInputWindow);
}

function resetInputFields() {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readStatus.checked = false;
}

// Event Listeners
addBookButton.addEventListener("click", displayAddBookWindow);

cancelButton.addEventListener("click", hideAddBookWindow);

submitButton.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const pages = pagesInput.value.trim();
    const readStatusValue = readStatus.checked;

    if (title && author && pages) {
        const newBook = new Book(title, author, pages, readStatusValue);
        Library.addBook(newBook);
        resetInputFields();
        hideAddBookWindow();
    }
});

hideAddBookWindow();
