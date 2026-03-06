import axios from "axios";
import { useEffect, useState } from "react";
import BookListItem from "./BookListItem";
import Navbar from "../Navbar";

function ListBooks() {
  const [books, setBooks] = useState([]);

  function fetchBooks() {
    axios
      .get("https://worksheet-library.mashupstack.com/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container my-4">
        <h1 className="text-center">Library Books</h1>
        {books.length === 0 ? (
          <p>No books available.</p>
        ) : (
          books.map((book) => (
            <BookListItem key={book.id} book={book} refresh={fetchBooks} />
          ))
        )}
      </div>
    </div>
  );
}

export default ListBooks;