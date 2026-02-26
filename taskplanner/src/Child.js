import React from 'react';
function TaskList(props) {
  return (
    <div className="card p-4">
      <h4>Task List</h4>

      <ul>
        {props.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <p>{props.message}</p>
    </div>
  );
}

export default TaskList;