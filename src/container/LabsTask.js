import React, { useState } from "react";
import News from "./News";
import "./LabsTask.css";

const LabsTask = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="labs-task-container">
      <h1 className="labs-task-heading">News Search</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter a search query..."
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>
      <News searchQuery={searchQuery} />
    </div>
  );
};

export default LabsTask;
