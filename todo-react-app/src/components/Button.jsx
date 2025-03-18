import React from "react";

/**
 * A button component for adding tasks.
 * @param {function} onClick - The function to run when the button is clicked.
 * @returns {ReactElement} - The button element.
 */
const Button = ({ onClick }) => {
  return (
    <button type="button" className="todo-add-btn" onClick={onClick}>
      Add Task
    </button>
  );
};

export default Button;
