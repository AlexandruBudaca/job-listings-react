import React from "react";
import JobCard from "./JobCard";

const JobList = ({ data, addToFilter }) => {
  return (
    <>
      {data.map((job) => (
        <JobCard key={job.id} data={job} addToFilter={addToFilter} />
      ))}
    </>
  );
};

export default JobList;
