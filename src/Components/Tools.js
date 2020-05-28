import React from "react";

const Tools = (props) => {
  return (
    <div className="tools">
      {props.tools.map((tool, index) => (
        <button className="tool" key={index}>
          {tool}
        </button>
      ))}
    </div>
  );
};

export default Tools;
