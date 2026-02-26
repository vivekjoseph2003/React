import React, { useState } from 'react';
import TaskList from './Child';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("Add a task to get started!");
  const [bgColor, setBgColor] = useState('white');

  const handleAddTask = (e) => {
    e.preventDefault();

    if(task.trim() === '') return;

    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);

    setMessage(`Task added: ${task}!`);
    setTask('');
    setBgColor('lightblue');
  };
  return (
    <div className="container p-4" style={{ backgroundColor: bgColor }}>
      <div className="card p-4 mb-4">
        <h2>Task Planner</h2>
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            className="form-control mb-3"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task name"
          />
          <button className="btn btn-primary" type="submit">
            Add Task
          </button>
        </form>
      </div>
      <TaskList tasks={tasks} message={message} />
    </div>
  );
}

export default App;