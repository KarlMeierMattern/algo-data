class Book {
  title: string;
  author: string;
  isbn: string;

  constructor(title: string, author: string, isbn: string) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  books = new Map<string, Book>();

  createBook = (title: string, author: string, isbn: string) => {
    const existingBook = this.books.has(isbn);
    if (existingBook) {
      return this.books.get(isbn);
    }
    const book = new Book(title, author, isbn);
    this.books.set(isbn, book);
    return book;
  };

  bookList: Array<{
    title: string;
    author: string;
    isbn: string;
    sales: number;
    availability: number;
  }> = [];

  addBook = (
    title: string,
    author: string,
    isbn: string,
    sales: number,
    availability: number
  ) => {
    const book = {
      ...this.createBook(title, author, isbn),
      sales,
      availability,
      isbn,
    };

    this.bookList.push(book);
    return book;
  };
}
