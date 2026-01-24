import React from "react";
import JobList from "./components/JobList";
import AddJob from "./components/AddJob";
import RegisterUser from "./components/RegisterUser";

function App() {
  return (
    <div className="App">
      <h1>Internship & Job Alert App</h1>
      <RegisterUser />
      <AddJob />
      <JobList />
    </div>
  );
}

export default App;
