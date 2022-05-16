const body = document.querySelector("body");
const closeFormBtn = document.querySelector(".close-btn");
const newBookBtn = document.querySelector(".new-book-btn");
const form = document.querySelector(".form");

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

function displayBook(book, index) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("card");
  bookCard.dataset.indexCard = index;
  const title = document.createElement("h2");
  title.classList.add("book-title");
  title.textContent = book.title;
  bookCard.appendChild(title);

  const author = document.createElement("p");
  author.textContent = `Author: ${book.author}`;
  author.classList.add("book-author");
  bookCard.appendChild(author);

  const pages = document.createElement("p");
  pages.textContent = book.pages;
  pages.classList.add("book-pages");
  bookCard.appendChild(pages);

  const read = document.createElement("p");
  read.textContent = book.read ? "read" : "not read";
  read.classList.add("book-read");
  read.dataset.indexRead = index;
  bookCard.appendChild(read);

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.classList.add("remove-btn");
  removeBtn.dataset.index = index;
  bookCard.appendChild(removeBtn);

  body.appendChild(bookCard);
}

function resetDataIndicis() {
  const cards = document.querySelectorAll(".card");
  const btns = document.querySelectorAll(".remove-btn");
  cards.forEach((item, index) => (item.dataset.indexCard = index));
  btns.forEach((item, index) => (item.dataset.index = index));
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    displayBook(myLibrary[i], i);
  }
}

function hideModalWindow() {
  const modalWindow = document.querySelector(".bg-modal");
  modalWindow.classList.add("closed-modal");
}

function showModalWindow() {
  const modalWindow = document.querySelector(".bg-modal");
  modalWindow.classList.remove("closed-modal");
}

function addBookToLibrary(e) {
  e.preventDefault();
  console.dir(e.target);
  let selected = document.querySelector("input[type='radio']:checked");

  const bookTitle = e.target[1].value;
  const bookAuthor = e.target[2].value;
  const bookPages = +e.target[3].value;
  const bookRead = Boolean(+selected.value);
  console.log(bookTitle, bookAuthor, bookPages, bookRead);

  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  myLibrary.push(newBook);
  displayBook(newBook, myLibrary.length - 1);
}

function removeBook(e) {
  if (!e.target.classList.contains("remove-btn")) return;

  const toBeRemovedIndex = +e.target.dataset.index;
  const toBeRemovedCard = document.querySelector(
    `[data-index-card='${toBeRemovedIndex}']`
  );

  myLibrary.splice(toBeRemovedIndex, 1);
  body.removeChild(toBeRemovedCard);
  resetDataIndicis();
}

function changeReadStatus(e) {
  if (!e.target.classList.contains("book-read")) return;

  const toBeChangedIndex = +e.target.dataset.indexRead;

  myLibrary[toBeChangedIndex].read = !myLibrary[toBeChangedIndex].read;
  e.target.textContent = myLibrary[toBeChangedIndex].read ? "read" : "not read";
  console.table(myLibrary);
}

closeFormBtn.addEventListener("click", hideModalWindow);
newBookBtn.addEventListener("click", showModalWindow);
form.addEventListener("submit", addBookToLibrary);
document.addEventListener("click", removeBook);
document.addEventListener("click", changeReadStatus);

displayBooks();
