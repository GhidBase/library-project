const myLibrary = [];

const libraryElement = document.querySelector("#library");
const addBookButton = document.querySelector("#addBook");
const cancelButton = document.querySelector("#cancel-button");
const bookInputWindow = document.querySelector("#book-input");

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
    myLibrary.push(new Book(title, author, pages, readStatus));
    let newDiv = document.createElement("div");
    newDiv.classList.add("book");
    libraryElement.insertBefore(newDiv, addBookButton);
}

function hideAddBookWindow() {
    document.body.removeChild(bookInputWindow);
}

function displayAddBookWindow() {
    document.body.appendChild(bookInputWindow);
}

addBookButton.addEventListener("click", function() {
    // addBookToLibrary("test", "test", 10, true)
    displayAddBookWindow();
});

cancelButton.addEventListener("click", function() {
    hideAddBookWindow();
})