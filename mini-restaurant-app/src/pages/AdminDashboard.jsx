import React, { useState, useEffect, useRef } from "react";
import AddRestaurantForm from "../components/AddRestaurantForm";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";
import { getRestaurants, saveRestaurants } from "../utils/localStorageUtils";

export default function AdminDashboard() {
  const [restaurants, setRestaurants] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const searchRef = useRef();

  useEffect(() => {
    const data = getRestaurants();
    setRestaurants(data);
    setFiltered(data);
    searchRef.current.focus();
  }, []);

  const refresh = () => {
    const data = getRestaurants();
    setRestaurants(data);
    setFiltered(data);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const updated = restaurants.filter((r) => r.restaurantID !== id);
      saveRestaurants(updated);
      setRestaurants(updated);
      setFiltered(updated);
      alert("Restaurant deleted successfully!");
    }
  };

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
      <div style={{ display: "flex" }}>
        {/* Sidebar for adding restaurants */}
        <div style={{ width: "30%", padding: "10px", borderRight: "1px solid #ccc" }}>
          <h3>Add Restaurant</h3>
          <AddRestaurantForm onAdd={refresh} />
        </div>

        {/* Restaurant cards */}
        <div style={{ width: "70%", padding: "10px" }} className="card-container">
          {filtered.map((r) => (
            <RestaurantCard
              key={r.restaurantID}
              restaurant={r}
              isAdmin={true}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}