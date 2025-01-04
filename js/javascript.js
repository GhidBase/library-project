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

    addFieldToBook("Title:", title, newDiv);
    addFieldToBook("Author:", author, newDiv);
    addFieldToBook("Pages", pages, newDiv);
    
    let readStatusP = document.createElement("p");
    readStatusP.textContent = readStatus ? "Already finished reading" : "Haven't read yet";
    newDiv.appendChild(readStatusP);

    let newButton = document.createElement("button");
    newButton.textContent = "Remove";
    newDiv.appendChild(newButton);

    libraryElement.insertBefore(newDiv, addBookButton);

    hideAddBookWindow();
}

function addFieldToBook(header, data, target) {
    let newHeader = document.createElement("h4");
    newHeader.textContent = header;
    let newP = document.createElement("p");
    newP.textContent = data;
    target.appendChild(newHeader);
    target.appendChild(newP);
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
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readStatus.checked)
    console.log(titleInput.value, authorInput.value, pagesInput.value, readStatus.checked)
})

hideAddBookWindow();