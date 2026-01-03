import React from "react";
import { useNavigate } from "react-router-dom";

export default function RestaurantCard({ restaurant, isAdmin, onDelete }) {
  const navigate = useNavigate();

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <img src={restaurant.image} alt={restaurant.restaurantName} width="200" />
      <h3>{restaurant.restaurantName}</h3>
      <p>{restaurant.address}</p>
      <p>Type: {restaurant.type}</p>
      <p>Parking: {restaurant.parkingLot ? "Available" : "Not Available"}</p>
      {isAdmin && (
        <>
          <button onClick={() => navigate(`/admin/restaurants/update/${restaurant.restaurantID}`)}>Update</button>
          <button onClick={() => {
            if (window.confirm("Are you sure you want to delete?")) {
              onDelete(restaurant.restaurantID);
            }
          }}>Delete</button>
        </>
      )}
    </div>
  );
}