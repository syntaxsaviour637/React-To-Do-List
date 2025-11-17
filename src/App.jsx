import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [completed, setCompleted] = useState([]); // array of completed task indexes

  const toggleDone = (index) => {
    setCompleted((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="container">
      <div className="heading">
        <img
          className="heading__img"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg"
          alt="laptop"
        />
        <h1 className="heading__title">To-Do List</h1>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const trimmedTask = task.trim();
          if (!trimmedTask) return;
          setTasks((prevTask) => [...prevTask, trimmedTask]);
          setTask("");
        }}
        className="form"
      >
        <div>
          <label className="form__label" htmlFor="todo">
            ~ Today I need to ~
          </label>
          <input
            onChange={(e) => setTask(e.target.value)}
            className="form__input"
            type="text"
            id="todo"
            name="to-do"
            size="30"
            value={task}
            required
          />
          <button className="button">
            <span>Submit</span>
          </button>
        </div>
      </form>

      <div className="main">
        <ul className="toDoList">
          {tasks.map((item, index) => (
            <li
              key={index}
              onClick={() => toggleDone(index)}
              className={completed.includes(index) ? "done" : ""}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default App;
