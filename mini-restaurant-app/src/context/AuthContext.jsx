import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (email, password) => {
    if (email === "admin@gmail.com" && password === "admin1234") {
      setUser({ role: "admin", email });
      navigate("/admin/dashboard");
    } else if (email === "customer@gmail.com" && password === "customer1234") {
      setUser({ role: "customer", email });
      navigate("/customers/dashboard");
    } else {
      alert("Wrong email or password!");
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;