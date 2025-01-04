const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
    myLibrary.push(new Book(title, author, pages, readStatus));
}

addBookToLibrary("The Way of the Wolf", "Jordan Belfort", 256, true);
addBookToLibrary("Magic Tree House: Dinosaurs Before Dark", "Mary Pope Osborn", 80, true);

console.log(myLibrary);