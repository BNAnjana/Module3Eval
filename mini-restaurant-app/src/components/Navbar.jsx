import React, { useState } from "react";

export default function Navbar({ onSearch, onFilter, searchRef }) {
  const [type, setType] = useState("All");
  const [parking, setParking] = useState("All");

  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  const handleFilterChange = () => {
    onFilter(type, parking);
  };

  return (
    <div className="navbar">
      <input
        ref={searchRef}
        placeholder="Search by name or address"
        onChange={handleSearchChange}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>All</option>
        <option>Rajasthani</option>
        <option>Gujarati</option>
        <option>Mughlai</option>
        <option>Jain</option>
        <option>Thai</option>
        <option>North Indian</option>
        <option>South Indian</option>
      </select>
      <select value={parking} onChange={(e) => setParking(e.target.value)}>
        <option>All</option>
        <option>Available</option>
        <option>Not Available</option>
      </select>
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
}