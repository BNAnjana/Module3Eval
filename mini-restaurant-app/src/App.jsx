import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Login from "./components/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import UpdateRestaurant from "./pages/UpdateRestaurant";
import AuthContext from "./context/AuthContext";

function PrivateRoute({ children, role }) {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return children;
}

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element ={<Login />} />
      <Route path ="/pages/AdminDashboard" element = {<PrivateRoute role="admin"><AdminDashboard /></PrivateRoute>}/>
      <Route path ="/pages/CustomerDashboard" element = {<PrivateRoute role="admin"><CustomerDashboard /></PrivateRoute>}/>
      <Route path = "/pages/UpdateRestaurant" element = {<PrivateRoute role="admin"><UpdateRestaurant /></PrivateRoute>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;