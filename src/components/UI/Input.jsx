import React from "react";

const Input = (props) => {
  return (
    <input
      type="text"
      onChange={props.onchange}
      onBlur={props.onblur}
      className={props.classname}
      id={props.id}
      name={props.id}
      autoComplete="off"
      placeholder={props.placeholder}
      value={props.value}
    />
  );
};

export default Input;
