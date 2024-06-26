import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserLoginHistory.css';

const UserLoginHistory = () => {
    const [loginHistory, setLoginHistory] = useState([]);

    useEffect(() => {
        fetchLoginHistory();
    }, []);

    const fetchLoginHistory = async () => {
        try {
            const response = await axios.get('/api/users/login-history');
            setLoginHistory(response.data);
        } catch (error) {
            console.error('Error fetching login history:', error);
        }
    };

    return (
        <div className="user-login-history">
            <h2>User Login History</h2>
            <ul>
                {loginHistory.map((entry) => (
                    <li key={entry.id}>
                        <p>{entry.username}</p>
                        <p>{entry.loginTime}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserLoginHistory;
