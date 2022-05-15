let myLibrary = [
  { title: "hobbit", author: "tolkin", pages: 300, read: true },
  { title: "harry potter", author: "rowling", pages: 200, read: true },
  { title: "book3", author: "random", pages: 200, read: true },
];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

function addBookToLibrary() {}
