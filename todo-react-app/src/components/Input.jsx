import React from "react";

const Input = ({ value, placeholder, onChange }) => {
  return (
    <input
      className="todo-input"
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
};

export default Input;
