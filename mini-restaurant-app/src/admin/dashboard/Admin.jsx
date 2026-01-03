import React from "react";
import { useState } from "react";

function Admin() {

    return (
        <div>
            <side>
                <p>Restaurant ID: 26</p>
                <p>Type: </p>
                <select name="dishes" id="category">
                    <option value="Rajasthani">Rajasthani</option>
                    <option value="Gujarati">Gujarati</option>
                    <option value="Mughlai">Mughlai</option>
                    <option value="Jain">Jain</option>
                    <option value="Thai">Thai</option>
                    <option value="North Indian">North Indian</option>
                    <option value="South Indian">South Indian</option>
                </select>
                <p>Parking Lot: </p>
                <select name="parking" id="Parking">
                    <option value="true">Available</option>
                    <option value="false">Unavailable</option>
                </select>
                <img src="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg" alt="restaurant" width="300px" height="400px" />
                <button type="submit">Add</button>
            </side>
        </div>
    )
}
export default Admin;