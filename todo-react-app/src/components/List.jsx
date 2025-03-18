import React from "react";

const List = ({ tasks }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <li key={index} className="todo-list-item">
          <i className="fa-regular fa-circle"></i> {task}
        </li>
      ))}
    </ul>
  );
};

export default List;
