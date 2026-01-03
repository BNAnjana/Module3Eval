import React, { useState, useEffect, useRef } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { getRestaurants } from "../utils/localStorageUtils";
import Navbar from "../components/Navbar";

export default function CustomerDashboard() {
  const [restaurants, setRestaurants] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const searchRef = useRef();

  useEffect(() => {
    const data = getRestaurants();
    setRestaurants(data);
    setFiltered(data);
    searchRef.current.focus();
  }, []);

  const handleSearch = (query) => {
    const q = query.toLowerCase();
    setFiltered(
      restaurants.filter(
        (r) =>
          r.restaurantName.toLowerCase().includes(q) ||
          r.address.toLowerCase().includes(q)
      )
    );
  };

  const handleFilter = (type, parking) => {
    let data = [...restaurants];
    if (type !== "All") data = data.filter((r) => r.type === type);
    if (parking !== "All") {
      const hasParking = parking === "Available";
      data = data.filter((r) => r.parkingLot === hasParking);
    }
    setFiltered(data);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} onFilter={handleFilter} searchRef={searchRef} />
      <div className="card-container">
        {filtered.map((r) => (
          <RestaurantCard key={r.restaurantID} restaurant={r} isAdmin={false} />
        ))}
      </div>
    </div>
  );
}