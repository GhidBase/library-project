const myLibrary = [];

const libraryElement = document.querySelector("#library");
const addBookButton = document.querySelector("#addBook");
const cancelButton = document.querySelector("#cancel-button");
const bookInputWindow = document.querySelector("#book-input");
const submitButton = document.querySelector("#submit-button");
const titleInput = bookInputWindow.querySelector("#title");
const authorInput = bookInputWindow.querySelector("#author");
const pagesInput = bookInputWindow.querySelector("#pages");
const readStatus = bookInputWindow.querySelector("#read-status")

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
    displayAddBookWindow();
});

cancelButton.addEventListener("click", function() {
    hideAddBookWindow();
})

submitButton.addEventListener("click", function() {
    addBookToLibrary()
    console.log(titleInput.value, authorInput.value, pagesInput.value, readStatus.checked)
})

hideAddBookWindow();