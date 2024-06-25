// pages/Auth/LoginPage.jsimport React, { useState } from 'react';import { Link, useNavigate } from 'react-router-dom';import authService from '../../services/auth/authService';
const LoginPage = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
    };
    const handleLogin = async () => {
        try {
            const response = await authService.login(credentials);
            console.log("Login successful", response);
            window.opener.postMessage({ type: "loginSuccess", data: response }, "*");
            window.close();
            navigate("/home");
        } catch (error) {
            setError("Invalid username or password");
        }
    };
    return (
        <div className="login-page">
            {" "}
            <h2>Login</h2> {error && <p className="error">{error}</p>}{" "}
            <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleInputChange}
                placeholder="Username"
            />{" "}
            <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                placeholder="Password"
            />{" "}
            <button onClick={handleLogin}>Login</button>{" "}
            <p>
                {" "}
                Don't have an account?{" "}
                <Link
                    to="/register"
                    target="_blank"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open("/register", "_blank", "width=800,height=600");
                    }}
                >
                    Register
                </Link>{" "}
            </p>{" "}
        </div>
    );
};
export default LoginPage;