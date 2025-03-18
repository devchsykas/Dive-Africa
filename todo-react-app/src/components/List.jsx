import React, { useState } from "react";

const List = () => {
  const [tasks, setTasks] = useState("");

  const handleClickTaskItem = () => {
    const newTasks = [...tasks];
    newTasks.push("");
    setTasks(newTasks);
  };

  return (
    <div>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                handleClickTaskItem(task);
              }}
            >
              {task}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
