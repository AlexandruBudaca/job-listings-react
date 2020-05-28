import React from "react";

const JobCard = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="logo-job">
          <img src={props.data.logo} alt="logo" />
        </div>
        <div className="content-job">
          <div className="company">
            <p>{props.data.company}</p>

            <p className="new">{props.data.new ? "new!" : ""}</p>

            <p className="featured">{props.data.featured ? "featured" : ""}</p>
          </div>

          <div>
            <h4>{props.data.position}</h4>
            <p>
              {props.data.postedAt}
              <span>&#xb7;</span> {props.data.contract} <span>&#xb7;</span>
              {props.data.location}
            </p>
          </div>
        </div>
        <div>
          <hr></hr>
        </div>

        <div className="role-level">
          <button className="role">{props.data.role}</button>

          <button className="level">{props.data.level}</button>

          <div className="languages">
            {props.data.languages.map((language, index) => (
              <button className="language" key={index}>
                {language}
              </button>
            ))}
          </div>
          <div className="tools">
            {props.data.tools.map((tool, index) => (
              <button className="tool" key={index}>
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
