import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logIn } from "../services/LogInService";
import "../styles/Auth.css";


const LogIn = ({ usrLogg }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        logIn(username, password).then((res) => {
            console.log(res.data);
            if (res.data.rol === "ADMIN") {
                //usrLogg(res.data.id);
                // used to persist the user's role between different pages or sessions of the web application.
                localStorage.setItem("rol", JSON.stringify(res.data));
                localStorage.setItem("id", JSON.stringify(res.data.id));
                navigate("/admin");
            } else if (res.data.rol === "CLIENT") {
                //usrLogg(res.data.id);
                localStorage.setItem("rol", JSON.stringify("CLIENT"));
                localStorage.setItem("id", JSON.stringify(res.data.id));
                navigate("/client");
            } else {
                alert("Invalid credentials!");
                setUsername("");
                setPassword("");
            }
        });
    };

   
return (
    <div className="container">
        <form className="form" onSubmit={handleSubmit}>
            <h1 className="label">Login</h1>
            <input
                className="input"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
            />
            <input
                className="input"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button
                className="button"
                type="submit"
            >
                Log In
            </button>
        </form>
    </div>
);

export default LogIn;


