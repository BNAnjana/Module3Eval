import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRestaurants, saveRestaurants } from "../utils/localStorageUtils";

export default function UpdateRestaurant() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const data = getRestaurants();
    const found = data.find((r) => r.restaurantID === Number(id));
    setRestaurant(found);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!restaurant.restaurantName || !restaurant.address) {
      alert("Form cannot be empty!");
      return;
    }
    if (window.confirm("Are you sure you want to update?")) {
      const data = getRestaurants();
      const updated = data.map((r) =>
        r.restaurantID === restaurant.restaurantID ? restaurant : r
      );
      saveRestaurants(updated);
      alert("Restaurant updated successfully!");
      navigate("/admin/dashboard");
    }
  };

  if (!restaurant) return <p>Loading...</p>;

  return (
    <div className="update-form">
      <h2>Update Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={restaurant.restaurantName}
          onChange={(e) =>
            setRestaurant({ ...restaurant, restaurantName: e.target.value })
          }
        />
        <input
          value={restaurant.address}
          onChange={(e) =>
            setRestaurant({ ...restaurant, address: e.target.value })
          }
        />
        <select
          value={restaurant.type}
          onChange={(e) => setRestaurant({ ...restaurant, type: e.target.value })}
        >
          <option>Rajasthani</option>
          <option>Gujarati</option>
          <option>Mughlai</option>
          <option>Jain</option>
          <option>Thai</option>
          <option>North Indian</option>
          <option>South Indian</option>
        </select>
        <select
          value={restaurant.parkingLot}
          onChange={(e) =>
            setRestaurant({ ...restaurant, parkingLot: e.target.value === "true" })
          }
        >
          <option value="true">Available</option>
          <option value="false">Not Available</option>
        </select>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}