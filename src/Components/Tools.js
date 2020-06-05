import React from "react";

const Tools = (props) => {
  return (
    <div className="tools">
      {props.tools.map((tool, index) => (
        <button
          className="btn"
          key={index}
          onClick={() => {
            props.addToFilter(tool);
          }}
        >
          {tool}
        </button>
      ))}
    </div>
  );
};

export default Tools;
