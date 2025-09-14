// The flyweight pattern is useful when you’re creating a huge number of objects, which could potentially drain all available RAM.
// It allows us to minimize the amount of consumed memory.

class Book {
  title: string;
  author: string;
  isbn: string;

  constructor(title: string, author: string, isbn: string) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

const books = new Map<string, Book>();

const createBook = (title: string, author: string, isbn: string) => {
  const existingBook = books.has(isbn);
  if (existingBook) {
    return books.get(isbn);
  }
  const book = new Book(title, author, isbn);
  books.set(isbn, book);
  return book;
};

const bookList: Array<{
  title: string;
  author: string;
  isbn: string;
  sales: number;
  availability: boolean;
}> = [];

const addBook = (
  title: string,
  author: string,
  isbn: string,
  sales: number,
  availability: boolean
) => {
  const book = {
    ...createBook(title, author, isbn)!,
    sales,
    availability,
    isbn,
  };

  bookList.push(book);
  return book;
};

// Instead of creating a new Book instance each time we add a copy, we can effectively use the already existing Book instance for that particular copy.

addBook("Harry Potter", "JK Rowling", "AB123", 100, true);
addBook("Harry Potter", "JK Rowling", "AB123", 50, true);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", 10, true);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", 20, false);
addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", 20, false);

console.log(`\n✅ Added ${bookList.length} book entries`);
console.log(`🎯 Created only ${books.size} unique Book classes`);
console.log(
  `💾 Memory saved: ${bookList.length - books.size} duplicate classes avoided`
);
