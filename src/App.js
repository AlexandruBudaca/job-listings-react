import React, { useState, useEffect } from "react";
import "./App.css";
import jobsData from "./data.json";
import JobsList from "./Components/JobsList";
import FilterBox from "./Components/FilterBox";

function App() {
  const [data, setData] = useState([]);
  const [filterJobs, setFilterJobs] = useState([]);
  const [buttonsValue, setButtonsValue] = useState([]);

  useEffect(() => {
    setData(jobsData);
  }, []);

  const addToFilter = (job) => {
    setFilterJobs((jobs) => [...jobs, job]);
    const some = data.filter((jobs) => jobs.role.includes(buttonsValue));
    setData(some);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <FilterBox
          data={filterJobs}
          setFilterJobs={setFilterJobs}
          setButtonsValue={setButtonsValue}
          setData={setData}
        />
      </div>
      <JobsList
        data={data}
        setData={setData}
        setFilterJobs={setFilterJobs}
        buttonsValue={buttonsValue}
        setButtonsValue={setButtonsValue}
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
