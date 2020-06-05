import React, { useState } from "react";
import "./App.css";
import jobsData from "./data.json";
import JobsList from "./Components/JobsList";
import FilterBox from "./Components/FilterBox";

function App() {
  const [filters, setFilters] = useState([]);

  const addToFilter = (newFilter) => {
    if (!filters.includes(newFilter)) {
      setFilters([...filters, newFilter]);
    }
  };

  const removeFromFilter = (filterToRemove) => {
    setFilters(filters.filter((filter) => filter !== filterToRemove));
  };
  const filteredJobs = jobsData.filter((job) => {
    const roleName =
      job.role.charAt(0).toUpperCase() + job.role.toLowerCase().slice(1);

    const filterableValues = [
      roleName,
      job.level,
      ...job.languages,
      ...job.tools,
    ];

    return filters.every((filter) => filterableValues.includes(filter));
  });
  const setClear = () => {
    setFilters([]);
  };
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <FilterBox
          data={filters}
          onclick={removeFromFilter}
          setClear={setClear}
        />
      </div>
      <JobsList
        data={filteredJobs}
        setFilterJobs={setFilters}
        addToFilter={addToFilter}
      />
      <div className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="/">Alexandru Budaca</a>.
      </div>
    </div>
  );
}

export default App;
