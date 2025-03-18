import React from "react";

const Button = ({ onClick }) => {
  return (
    <button type="button" className="todo-add-btn" onClick={onClick}>
      Add Task
    </button>
  );
};

export default Button;
