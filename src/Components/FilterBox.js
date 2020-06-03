import React from "react";
import jobsData from "../data.json";

const FilterBox = ({ data, setFilterJobs, setData }) => {
  const removeFromFilter = (job) => {
    setFilterJobs(data.filter((role) => role.id !== job.id));
    setData(jobsData);
  };
  return (
    <div>
      {data.map((role) => (
        <button
          className="role"
          key={role.id}
          onClick={() => {
            removeFromFilter(role);
          }}
        >
          {role}
        </button>
      ))}
    </div>
  );
};
export default FilterBox;
