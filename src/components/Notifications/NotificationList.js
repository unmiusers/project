import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NotificationList.css";
const NotificationList = () => {
    const [notifications, setNotifications] = useState([]);
    useEffect(() => {
        fetchNotifications();
    }, []);
    const fetchNotifications = async () => {
        try {
            const response = await axios.get("/api/notifications");
            setNotifications(response.data);
        } catch (error) {
            console.error("Error fetching notifications:", error);
        }
    };
    return (
        <div className="notification-list">
            <h2>Notifications</h2>
            <ul>
                {notifications.map((notification) => (
                    <li key={notification.id}>
                        <p>{notification.message}</p>
                        <p>{notification.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default NotificationList;