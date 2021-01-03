let myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;

  this.read = false;

  this.info = function () {
    console.log(
      this.name +
        " by " +
        this.author +
        ", " +
        this.pages +
        " pages " +
        this.read
    );
  };
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

// Function to display all books on the web page
// test book creation

const displayBookShelf = function (novel) {
  // create the book
  const bookShelf = document.querySelector("#book-shelf");
  const book = document.createElement("div");
  book.classList.add("book-card");

  // create the top section
  const topSection = document.createElement("div");
  topSection.classList.add("top-container");
  book.appendChild(topSection);

  // create the title
  const title = document.createElement("div");
  title.classList.add("book-title");
  title.textContent = novel.name;
  topSection.appendChild(title);

  // create the author
  const author = document.createElement("div");
  author.classList.add("book-author");
  author.textContent = "By: " + novel.author;
  topSection.appendChild(author);

  // create bottom section
  const bottomSection = document.createElement("div");
  bottomSection.classList.add("bottom-container");
  book.appendChild(bottomSection);

  // create page count section
  const pages = document.createElement("div");
  pages.classList.add("book-pages");
  pages.textContent = novel.pages + " pages";
  bottomSection.appendChild(pages);

  // create read Y/N section
  const read = document.createElement("div");
  read.classList.add("book-read");
  read.textContent = novel.read;
  bottomSection.appendChild(read);

  // add book to bookShelf
  bookShelf.appendChild(book);
};

// Start of formula's in action
const theHobbit = new Book("The Hobbit", "J.R. Tolkein", 498);
const antiracist = new Book("How to be an Antiracist", "Ibram X. Kendi", 280);
const mediocre = new Book("Mediocre", "Ileoma Olou", 306);

addBookToLibrary(theHobbit);
addBookToLibrary(antiracist);
addBookToLibrary(mediocre);

console.log(myLibrary);

myLibrary.forEach(displayBookShelf);
