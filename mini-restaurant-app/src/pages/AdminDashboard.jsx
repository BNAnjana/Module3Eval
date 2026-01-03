import React, { useState, useEffect } from "react";
import AddRestaurantForm from "../components/AddRestaurantForm";
import RestaurantCard from "../components/RestaurantCard";
import { getRestaurants, saveRestaurants } from "../utils/localStorageUtils";

export default function AdminDashboard() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(getRestaurants());
  }, []);

  const refresh = () => setRestaurants(getRestaurants());

  const handleDelete = (id) => {
    const updated = restaurants.filter(r => r.restaurantID !== id);
    saveRestaurants(updated);
    setRestaurants(updated);
    alert("Restaurant deleted successfully!");
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "30%" }}>
        <h3>Add Restaurant</h3>
        <AddRestaurantForm onAdd={refresh} />
      </div>
      <div style={{ width: "70%" }}>
        {restaurants.map(r => (
          <RestaurantCard key={r.restaurantID} restaurant={r} isAdmin={true} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}