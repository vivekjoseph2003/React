import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function EditBook() {
  const { bookId } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [genre, setGenre] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://worksheet-library.mashupstack.com/books/${bookId}`)
      .then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishedYear(res.data.published_year);
        setGenre(res.data.genre);
      })
      .catch((error) => console.log(error));
  }, [bookId]);

  function updateBook() {
    axios
      .put(`https://worksheet-library.mashupstack.com/books/${bookId}`, {
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
        <h1 className="text-center">Edit Book</h1>
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
        <button className="btn btn-primary mt-2" onClick={updateBook}>
          Update
        </button>
      </div>
    </div>
  );
}

export default EditBook;