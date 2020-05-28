import React from "react";

const Languages = (props) => {
  return (
    <div className="languages">
      {props.languages.map((language, index) => (
        <button className="language" key={index}>
          {language}
        </button>
      ))}
    </div>
  );
};

export default Languages;
