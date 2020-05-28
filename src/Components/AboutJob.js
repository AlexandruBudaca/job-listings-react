import React from "react";

const AboutJob = (props) => {
  return (
    <div className="content-job">
      <div className="company">
        <p>{props.AboutJobData.company}</p>

        <p className="new">{props.AboutJobData.new ? "new!" : ""}</p>

        <p className="featured">
          {props.AboutJobData.featured ? "featured" : ""}
        </p>
      </div>

      <div>
        <h4>{props.AboutJobData.position}</h4>
        <p>
          {props.AboutJobData.postedAt}
          <span>&#xb7;</span> {props.AboutJobData.contract} <span>&#xb7;</span>
          {props.AboutJobData.location}
        </p>
      </div>
    </div>
  );
};
export default AboutJob;
