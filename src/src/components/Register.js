import { useState } from "react";
import {register} from "../services/RegisterService";
import "../styles/Auth.css";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [buttonHover, setButtonHover] = useState(false);
    const [message, setMessage] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await register(username, password);
            console.log('User registered:', response.data);
            setMessage('Registration successful!');
           
        } catch (error) {
            console.error('Error registering user:', error);
            setMessage('Registration failed. Please try again.');
            
        }
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="label">Register</h1>
                <input
                    className="input"
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Username"
                    required
                />
                <input
                    className="input"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                    required
                />

                {message && (
                    <div>
                        <p>{message}</p>
                    </div>
                )}
                <button
                    className={buttonHover ? "button buttonHover" : "button"}
                    type="submit"
                    onMouseOver={() => setButtonHover(true)}
                    onMouseOut={() => setButtonHover(false)}
                >
                    Register
                </button>
            </form>
        </div>
    );
}
export default Register;







