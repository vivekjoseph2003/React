import React, { useState } from "react";
import Navbar from "./navbar";

function BookCrud() {

  var [items, setItems] = useState([
    { id: 1, bookName: "Art of Defending", authorName: "Harry", publishDate: "2026-01-01" },
    { id: 2, bookName: "Book", authorName: "Chris", publishDate: "2025-05-10" }
  ]);

  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [publishDate, setPublishDate] = useState("");

  const [editingItemId, setEditingItemId] = useState(null);
  const [editedBookName, setEditedBookName] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (bookName.trim() === "") return;

    var x = items.length + 1;

    var newItem = {
      id: x,
      bookName: bookName,
      authorName: authorName,
      publishDate: publishDate
    };

    setItems([...items, newItem]);

    setBookName("");
    setAuthorName("");
    setPublishDate("");
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const handleEditItem = (item) => {
    setEditingItemId(item.id);
    setEditedBookName(item.bookName);
  };

  const handleSaveItem = () => {

    if (editedBookName.trim() === "") return;

    const updatedItems = items.map((item) => {
      if (item.id === editingItemId) {
        return { ...item, bookName: editedBookName };
      }
      return item;
    });

    setItems(updatedItems);
    setEditingItemId(null);
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
    setEditedBookName("");
  };

  const filteredItems = items.filter((item) =>
    item.bookName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.authorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>

      <div><Navbar /></div><br/>

      <div className="container">
        <div className="row">
          <div className="col-md-8">

            <h2>Book List Management</h2>

            <form onSubmit={handleSubmit}>

              <label>Book Name</label><br/>
              <input
                type="text"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
              /><br/>

              <label>Author Name</label><br/>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
              /><br/>

              <label>Publish Date</label><br/>
              <input
                type="date"
                value={publishDate}
                onChange={(e) => setPublishDate(e.target.value)}
              /><br/><br/>

              <button className="btn btn-small btn-success" type="submit">
                Add Book
              </button>

            </form>

          </div>
        </div>
      </div>

      <br/>

      <div className="container">
        <div className="row">
          <div className="col-md-8">

            <label>Search Book:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

          </div>
        </div>
      </div>

      <br/>

      <div className="container">

        {filteredItems.length === 0 ? (
          <h4>No books found</h4>
        ) : (

        <table className="table table-bordered table-dark">

          <thead>
            <tr>
              <th>ID</th>
              <th>Book Name</th>
              <th>Author Name</th>
              <th>Publish Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredItems.map((item) => (

              <tr key={item.id}>

                <td>{item.id}</td>

                <td>
                  {editingItemId === item.id ? (
                    <input
                      type="text"
                      value={editedBookName}
                      onChange={(e) => setEditedBookName(e.target.value)}
                    />
                  ) : (
                    item.bookName
                  )}
                </td>

                <td>{item.authorName}</td>

                <td>{item.publishDate}</td>

                <td>

                  {editingItemId === item.id ? (
                    <>
                      <button
                        className="btn btn-primary"
                        onClick={handleSaveItem}
                      >
                        Save
                      </button>

                      <button
                        className="btn btn-secondary"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEditItem(item)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteItem(item.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

        )}

      </div>

    </div>
  );
}

export default BookCrud;