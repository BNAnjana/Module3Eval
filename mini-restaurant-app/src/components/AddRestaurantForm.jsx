import React, { useState } from "react";
import { getRestaurants, saveRestaurants } from "../utils/localStorageUtils";

export default function AddRestaurantForm({ onAdd }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("Rajasthani");
  const [parkingLot, setParkingLot] = useState(true);
  const image = "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address) {
      alert("Form cannot be empty!");
      return;
    }
    const restaurants = getRestaurants();
    const newRestaurant = {
      restaurantID: Date.now(),
      restaurantName: name,
      address,
      type,
      parkingLot,
      image
    };
    saveRestaurants([...restaurants, newRestaurant]);
    onAdd();
    alert("Restaurant added successfully!");
    setName(""); setAddress("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
      <input placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)} />
      <select value={type} onChange={(e)=>setType(e.target.value)}>
        <option>Rajasthani</option><option>Gujarati</option><option>Mughlai</option>
        <option>Jain</option><option>Thai</option><option>North Indian</option><option>South Indian</option>
      </select>
      <select value={parkingLot} onChange={(e)=>setParkingLot(e.target.value === "true")}>
        <option value="true">Available</option>
        <option value="false">Not Available</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}