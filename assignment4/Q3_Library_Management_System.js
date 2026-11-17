"use strict";

// Q3: Library Management System (Classes + Objects)

class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  // Issue the book
  issueBook() {
    if (this.isIssued) {
      console.log(`"${this.title}" is already issued.`);
      return false;
    }
    this.isIssued = true;
    console.log(`✓ "${this.title}" has been issued.`);
    return true;
  }

  // Return the book
  returnBook() {
    if (!this.isIssued) {
      console.log(`"${this.title}" is not currently issued.`);
      return false;
    }
    this.isIssued = false;
    console.log(`✓ "${this.title}" has been returned.`);
    return true;
  }

  // Helper to display book info
  getInfo() {
    return `${this.title} by ${this.author} | ISBN: ${this.isbn} | Status: ${this.isIssued ? "ISSUED" : "AVAILABLE"}`;
  }
}

// Create an array of book objects
const library = [
  new Book("The Alchemist", "Paulo Coelho", "978-0061122415"),
  new Book("Atomic Habits", "James Clear", "978-0735211292"),
  new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "978-1612680194", true), // already issued
  new Book("Clean Code", "Robert C. Martin", "978-0132350884"),
  new Book("The Pragmatic Programmer", "Andrew Hunt", "978-0201616224")
];

console.log("===== All Books =====");
library.forEach(book => console.log(book.getInfo()));

// Display all available books (not issued)
console.log("\n===== Available Books =====");
const available = library.filter(book => !book.isIssued);
available.forEach(book => console.log(book.getInfo()));

// Allow a user to issue a book by searching ISBN
function issueByISBN(isbn) {
  const book = library.find(b => b.isbn === isbn);
  if (!book) {
    console.log(`No book found with ISBN: ${isbn}`);
    return;
  }
  book.issueBook();
}

console.log("\n===== Issuing a book by ISBN =====");
issueByISBN("978-0061122415"); // The Alchemist

console.log("\n===== Available Books after issuing =====");
library.filter(b => !b.isIssued).forEach(b => console.log(b.getInfo()));

// Demo return
console.log("\n===== Returning a book =====");
library.find(b => b.isbn === "978-1612680194").returnBook();
