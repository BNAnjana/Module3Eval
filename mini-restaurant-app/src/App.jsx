import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Admin from "./admin/dashboard";
import Customer from "./customers/dashboard";

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
      <Route path ="/admin/dashboard" element ={<Admin/>}/>
      <Route path ="/customers/dashboard" element ={<Customer/>}/>
      <Route path = "/login" element={<Login />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;