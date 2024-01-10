import React from "react";

const TabButton = (props) => {
  return (
    <li>
      <button
        type={props.type || "button"}
        className={props.isSelected ? "active" : undefined}
        onClick={props.onSelect}
      >
        {props.children}
      </button>
    </li>
  );
};

export default TabButton;
