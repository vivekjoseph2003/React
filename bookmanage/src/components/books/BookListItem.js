import { Link } from "react-router-dom";
import axios from "axios";

function BookListItem({ book, refresh }) {
  function deleteBook() {
    axios
      .delete(`https://worksheet-library.mashupstack.com/books/${book.id}`)
      .then(() => {
        alert("Book deleted successfully!");
        refresh();
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5>{book.title}</h5>
        <p>
          Author: {book.author} | Year: {book.published_year} | Genre:{" "}
          {book.genre}
        </p>
        <Link to={`/books/${book.id}/edit`} className="btn btn-primary mr-2">
          Edit
        </Link>
        <button className="btn btn-danger" onClick={deleteBook}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookListItem;