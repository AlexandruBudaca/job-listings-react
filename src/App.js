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
  a;

  const removeFromFilter = (filterToRemove) => {
    setFilters(filters.filter((filter) => filter !== filterToRemove));
  };
  const filteredJobs =
    filters.length === 0
      ? jobsData
      : jobsData.filter((job) => {
          const filterableValues = [job.role, job.level];

          return filters.includes((filter) =>
            filterableValues
              .map((_) => _.toLowerCase())
              .includes(filter.toLowerCase())
          );
        });

  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <FilterBox data={filters} onclick={removeFromFilter} />
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
