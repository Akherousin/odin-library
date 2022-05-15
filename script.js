let myLibrary = [
  { title: "hobbit", author: "tolkin", pages: 300, read: true },
  { title: "harry potter", author: "rowling", pages: 200, read: true },
  { title: "book3", author: "random", pages: 200, read: false },
];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

function displayBooks() {
  const body = document.querySelector("body");
  for (let i = 0; i < myLibrary.length; i++) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");
    const title = document.createElement("h2");
    title.classList.add("book-title");
    title.textContent = myLibrary[i].title;
    bookCard.appendChild(title);

    const author = document.createElement("p");
    author.textContent = `Author: ${myLibrary[i].author}`;
    author.classList.add("book-author");
    bookCard.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = myLibrary[i].pages;
    pages.classList.add("book-pages");
    bookCard.appendChild(pages);

    const read = document.createElement("p");
    read.textContent = myLibrary[i].read ? "read" : "to read";
    read.classList.add("book-read");
    bookCard.appendChild(read);

    body.appendChild(bookCard);
  }
}

displayBooks();

function addBookToLibrary() {}
