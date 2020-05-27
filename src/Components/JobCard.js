import React from "react";

const JobCard = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="logo-job">
          <img src={props.data.logo} alt="logo" />
        </div>
        <div className="content-job">
          <div className="job-company">
            <div>
              <p>{props.data.company}</p>
            </div>
            <div>
              <h3>NEW!</h3>
            </div>
            <div>
              <h3>FEATURED</h3>
            </div>
          </div>

          <h1>Title</h1>
          <p>
            ALEX <span>&#xb7;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
