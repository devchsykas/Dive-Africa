import { Fragment } from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <Fragment>
      <section className="todo-container">
        <h1 className="todo-title">ToDo List App</h1>
        <div className="todo-input-container">
          <input className="todo-input" type="text" placeholder="Enter"></input>
          <button className="todo-add-btn">Add</button>
        </div>
        <div className="todo-list-container">
          <h3 className="todo-list-title">today's tasks</h3>
          <ul className="todo-list">
            <li className="todo-list-item">
              <i className="fa-regular fa-circle"></i>
              Task 1
            </li>
            <li className="todo-list-item">
              <i className="fa-regular fa-circle"></i>
              Task 2
            </li>
            <li className="todo-list-item">
              <i className="fa-regular fa-circle"></i>
              Task 3
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
