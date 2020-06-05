import React from "react";

const Languages = (props) => {
  return (
    <div className="languages">
      {props.languages.map((language, index) => (
        <button
          className="btn"
          key={index}
          onClick={() => {
            props.addToFilter(language);
          }}
        >
          {language}
        </button>
      ))}
    </div>
  );
};

export default Languages;
