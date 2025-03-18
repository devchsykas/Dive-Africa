import React from "react";

/**
 * A functional component for rendering an input field.
 * @param {string} value - The current value of the input.
 * @param {string} placeholder - The placeholder text for the input.
 * @param {function} onChange - The function to call when the input value changes.
 * @returns {ReactElement} - The rendered input element.
 */

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
