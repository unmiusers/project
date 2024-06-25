// pages/Auth/RegisterPage.jsimport React, { useState } from 'react';import { Link, useNavigate } from 'react-router-dom';import authService from '../../services/auth/authService';
const RegisterPage = () => {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };
    const handleRegister = async () => {
        try {
            const response = await authService.register(userData);
            console.log("Registration successful", response);
            window.opener.postMessage(
                { type: "registerSuccess", data: response },
                "*"
            );
            window.close();
            navigate("/home");
        } catch (error) {
            setError("Registration failed");
        }
    };
    return (
        <div className="register-page">
            {" "}
            <h2>Register</h2> {error && <p className="error">{error}</p>}{" "}
            <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleInputChange}
                placeholder="Username"
            />{" "}
            <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                placeholder="Email"
            />{" "}
            <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                placeholder="Password"
            />{" "}
            <button onClick={handleRegister}>Register</button>{" "}
            <p>
                {" "}
                Already have an account?{" "}
                <Link
                    to="/login"
                    target="_blank"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open("/login", "_blank", "width=800,height=600");
                    }}
                >
                    Login
                </Link>{" "}
            </p>{" "}
        </div>
    );
};
export default RegisterPage;