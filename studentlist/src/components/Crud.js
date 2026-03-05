import React, { useState } from "react";
import Navbar from "./navbar";

function StudentCrud() {

  var [items, setItems] = useState([
    { id: 1, name: "Chris", roll: "101", className: "10A" },
    { id: 2, name: "Harry", roll: "102", className: "10B" }
  ]);

  const [studentName, setStudentName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [className, setClassName] = useState("");

  const [editingItemId, setEditingItemId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedRoll, setEditedRoll] = useState("");
  const [editedClass, setEditedClass] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      studentName.trim() === "" ||
      rollNumber.trim() === "" ||
      className.trim() === ""
    ) {
      alert("All fields are required");
      return;
    }

    const rollExists = items.some((item) => item.roll === rollNumber);
    if (rollExists) {
      alert("Roll number must be unique");
      return;
    }

    var x = items.length + 1;

    var newItem = {
      id: x,
      name: studentName,
      roll: rollNumber,
      className: className
    };

    setItems([...items, newItem]);

    setStudentName("");
    setRollNumber("");
    setClassName("");
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const handleEditItem = (item) => {
    setEditingItemId(item.id);
    setEditedName(item.name);
    setEditedRoll(item.roll);
    setEditedClass(item.className);
  };

  const handleSaveItem = () => {

    if (
      editedName.trim() === "" ||
      editedRoll.trim() === "" ||
      editedClass.trim() === ""
    ) {
      alert("All fields are required");
      return;
    }

    const rollExists = items.some(
      (item) => item.roll === editedRoll && item.id !== editingItemId
    );

    if (rollExists) {
      alert("Roll number must be unique");
      return;
    }

    const updatedItems = items.map((item) => {
      if (item.id === editingItemId) {
        return {
          ...item,
          name: editedName,
          roll: editedRoll,
          className: editedClass
        };
      }
      return item;
    });

    setItems(updatedItems);
    setEditingItemId(null);
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>

      <div><Navbar /></div><br/>

      <div className="container">
        <div className="row">
          <div className="col-md-8">

            <h2>Student List Management</h2>

            <form onSubmit={handleSubmit}>

              <label>Student Name</label><br/>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              /><br/>

              <label>Roll Number</label><br/>
              <input
                type="text"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
              /><br/>

              <label>Class</label><br/>
              <input
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
              /><br/><br/>

              <button className="btn btn-small btn-success" type="submit">
                Add Student
              </button>

            </form>

          </div>
        </div>
      </div>

      <br/>

      <div className="container">
        <div className="row">
          <div className="col-md-8">

            <label>Search Student:</label>
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
          <h4>No students found</h4>
        ) : (

        <table className="table table-bordered table-dark">

          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Roll Number</th>
              <th>Class</th>
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
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                  ) : (
                    item.name
                  )}
                </td>

                <td>
                  {editingItemId === item.id ? (
                    <input
                      type="text"
                      value={editedRoll}
                      onChange={(e) => setEditedRoll(e.target.value)}
                    />
                  ) : (
                    item.roll
                  )}
                </td>

                <td>
                  {editingItemId === item.id ? (
                    <input
                      type="text"
                      value={editedClass}
                      onChange={(e) => setEditedClass(e.target.value)}
                    />
                  ) : (
                    item.className
                  )}
                </td>

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

export default StudentCrud;