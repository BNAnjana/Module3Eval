import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    if(email === "admin@gmail.com" && password === "admin1234"){
        navigate("/admin/dashboard");
    }else{
        alert("Wrong email or password !");
    }

    if(email === "customer@gmail.com" && password === "customer1234"){
        navigate("/customers/dashboard");
    }else{
        alert("Wrong email or password !");
    }
}
export default Login;