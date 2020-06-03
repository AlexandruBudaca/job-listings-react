import React from "react";
import JobCard from "./JobCard";

const JobList = ({
  data,
  setData,
  setFilterJobs,
  setButtonsValue,
  buttonsValue,
  addToFilter,
}) => {
  const buttonsValues = (e) => {
    console.log(e.target.value);
    setButtonsValue(e.target.value);
  };

  return (
    <>
      {data.map((job) => (
        <JobCard
          key={job.id}
          data={job}
          addToFilter={addToFilter}
          setFilterJobs={setFilterJobs}
          setButtonsValue={setButtonsValue}
          buttonsValues={buttonsValues}
        />
      ))}
    </>
  );
};

export default JobList;
