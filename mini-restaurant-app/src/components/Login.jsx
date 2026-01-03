import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
        if (email === "admin@gmail.com" && password === "admin1234") {
           login("admin", email);
          navigate("/admin/dashboard");
        } else if (email === "customer@gmail.com" && password === "customer1234") {
           login("customer", email);
          navigate("/customers/dashboard");
        } else {
          alert("Wrong email or password!");
        }
      };

  return (
    <div style={{ margin: "50px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}