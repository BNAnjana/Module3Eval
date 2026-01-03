import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Admin from "./admin/dashboard";
import Customer from "./customers/dashboard";

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