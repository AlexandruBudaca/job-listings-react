import React from "react";
import AboutJob from "./AboutJob";
import Languages from "./Languages";
import Tools from "./Tools";

const JobCard = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="logo-job">
          <img src={props.data.logo} alt="logo" />
        </div>
        <AboutJob AboutJobData={props.data} />
        <div>
          <hr></hr>
        </div>
        <div className="role-level">
          <button className="role">{props.data.role}</button>
          <button className="level">{props.data.level}</button>
          <Languages languages={props.data.languages} />
          <Tools tools={props.data.tools} />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
