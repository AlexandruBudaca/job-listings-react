import React from "react";
import AboutJob from "./AboutJob";
import Languages from "./Languages";
import Tools from "./Tools";

const JobCard = ({ data, addToFilter, setButtonsValue, buttonsValues }) => {
  const roleName = data.role;
  return (
    <div className="container">
      <div className="row">
        <div className="logo-job">
          <img src={data.logo} alt="logo" />
        </div>
        <AboutJob AboutJobData={data} />
        <div>
          <hr></hr>
        </div>
        <div className="role-level">
          <button
            key={data.id}
            value={roleName}
            className="role"
            onClick={(e) => {
              buttonsValues(e);
              addToFilter(data.role);
            }}
          >
            {roleName.charAt(0).toUpperCase() + roleName.toLowerCase().slice(1)}
          </button>
          <button className="level">{data.level}</button>
          <Languages languages={data.languages} />
          <Tools tools={data.tools} />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
