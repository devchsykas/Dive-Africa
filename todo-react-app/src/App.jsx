import { Fragment } from "react";
import "./App.css";

function App() {
  return (
    <Fragment>
      <section className="todo-container">
        <h1>To-Do List App</h1>
        <div className="todo-input">
          <input type="text" placeholder="Enter"></input>
          <button>Add</button>
        </div>
        <div className="todo-list-container">
          <h3 className="todo-list-title">today's tasks</h3>
          <ul className="todo-list">
            <li className="todo-list-item">Task 1</li>
            <li className="todo-list-item">Task 2</li>
            <li className="todo-list-item">Task 3</li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
