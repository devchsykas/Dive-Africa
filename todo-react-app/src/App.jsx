import { Fragment } from "react";
import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import List from "./components/List";
import "./App.css";

/**
 * A functional component representing the main application.
 * Manages the state for the input field and the list of tasks.
 * Allows users to add tasks to the list by typing into an input field and clicking a button.
 * Displays the list of tasks using the List component.
 *
 * @returns {ReactElement} - The rendered application component.
 */

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState(["Check emails", "Review code"]);
  // const [tasks, setTasks] = useState([]);

  /**
   * Handles changes to the input field value.
   * Updates the input value state with the current input field value.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
   */
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  /**
   * Adds the current input value to the tasks list if it is not empty.
   * Resets the input value to an empty string after adding the task.
   */

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
            placeholder="Enter task"
            value={inputValue}
            onChange={handleInputChange}
          ></Input>
          <Button onClick={handleAddTask}></Button>
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
