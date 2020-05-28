import React from "react";

const JobCard = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="logo-job">
          <img src={props.data.logo} alt="logo" />
        </div>
        <div className="content-job col-6">
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

        <div className="role-level col-4">
          <div className="role">{props.data.role}</div>
          <div className="level">{props.data.level}</div>
          <div>dsadas</div>
          <div>dasdasda</div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
