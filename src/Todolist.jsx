import React from "react";

export default function Todolist(props) {
  return (
    <>
      <div className="todo_style">
        <i
          className=" text-1 fa-solid fa-circle-xmark"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
        <li className="text-2">{props.text}</li>
      </div>
    </>
  );
        }