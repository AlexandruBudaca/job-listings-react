import React from "react";
import "./App.css";
import bgHeaderDesktop from "./bg-header-desktop.svg";
import JobList from "./Components/JobList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bgHeaderDesktop} alt="header-background" />
      </header>
      <JobList />
    </div>
  );
}

export default App;
