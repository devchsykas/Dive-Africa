import React from "react";

/**
 * A functional component that renders a list of tasks.
 * @param {Object} props - The component props.
 * @param {Array} props.tasks - An array of task strings to be displayed as list items.
 * @returns {ReactElement} - The rendered list of tasks.
 */

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
