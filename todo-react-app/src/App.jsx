import { Fragment } from "react";
import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import List from "./components/List";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  return (
    <Fragment>
      <section className="todo-container">
        <h1 className="todo-title">ToDo List App</h1>
        <div className="todo-input-container">
          <Input
            placeholder="Enter"
            value={inputValue}
            onChange={handleInputChange}
          ></Input>
          <Button className="todo-add-btn" onClick={handleAddTask}></Button>
        </div>
        <div className="todo-list-container">
          <h3 className="todo-list-title">today's tasks</h3>
          <List tasks={tasks} />
        </div>
      </section>
    </Fragment>
  );
}

export default App;
