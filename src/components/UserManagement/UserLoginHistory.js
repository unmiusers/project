import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserLoginHistory.css";
const UserLoginHistory = ({ userId }) => {
    const [loginHistory, setLoginHistory] = useState([]);
    useEffect(() => {
        fetchLoginHistory();
    }, [userId]);
    const fetchLoginHistory = async () => {
        try {
            const response = await axios.get(`/api/users/${userId}/login-history`);
            setLoginHistory(response.data);
        } catch (error) {
            console.error("Error fetching login history:", error);
        }
    };
    return (
        <div className="user-login-history">
            {" "}
            <h2>Login History</h2>{" "}
            <ul>
                {" "}
                {loginHistory.map((entry) => (
                    <li key={entry.id}>
                        {" "}
                        <p>{entry.date}</p> <p>{entry.ip}</p>{" "}
                    </li>
                ))}{" "}
            </ul>{" "}
        </div>
    );
};
export default UserLoginHistory;