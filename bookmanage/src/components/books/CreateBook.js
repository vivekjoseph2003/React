import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function CreateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [genre, setGenre] = useState("");
  const navigate = useNavigate();

  function addBook() {
    axios
      .post("https://worksheet-library.mashupstack.com/books", {
        title,
        author,
        published_year: publishedYear,
        genre,
      })
      .then(() => navigate("/books"))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <Navbar />
      <div className="container my-4">
        <h1 className="text-center">Add New Book</h1>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Published Year:</label>
          <input
            type="number"
            className="form-control"
            value={publishedYear}
            onChange={(e) => setPublishedYear(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Genre:</label>
          <input
            type="text"
            className="form-control"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <button className="btn btn-success mt-2" onClick={addBook}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateBook;