const myLibrary = [];

const libraryElement = document.querySelector("#library");
const addBookButton = document.querySelector("#addBook");

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

// addBookToLibrary("The Way of the Wolf", "Jordan Belfort", 256, true);
// addBookToLibrary("Magic Tree House: Dinosaurs Before Dark", "Mary Pope Osborn", 80, true);

addBookButton.addEventListener("click", function() {
    addBookToLibrary("test", "test", 10, true)
});

console.log(addBookButton)