import React from "react";
import jobsData from "../data.json";
import JobCard from "./JobCard";

const JobList = () => {
  return (
    <>
      {jobsData.map((job) => (
        <JobCard key={job.id} data={job} />
      ))}
    </>
  );
};

export default JobList;
