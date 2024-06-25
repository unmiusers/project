import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EmailNotifications.css";
const EmailNotifications = () => {
    const [settings, setSettings] = useState([]);
    useEffect(() => {
        fetchSettings();
    }, []);
    const fetchSettings = async () => {
        try {
            const response = await axios.get("/api/notifications/settings");
            setSettings(response.data);
        } catch (error) {
            console.error("Error fetching email notifications settings:", error);
        }
    };
    const handleToggle = async (settingId) => {
        try {
            const response = await axios.put(
                `/api/notifications/settings/${settingId}/toggle`
            );
            setSettings(response.data);
        } catch (error) {
            console.error("Error toggling email notification setting:", error);
        }
    };
    return (
        <div className="email-notifications">
            {" "}
            <h2>Email Notifications</h2>{" "}
            <ul>
                {" "}
                {settings.map((setting) => (
                    <li key={setting.id}>
                        {" "}
                        <span>{setting.name}</span>{" "}
                        <button onClick={() => handleToggle(setting.id)}>
                            {" "}
                            {setting.enabled ? "Disable" : "Enable"}{" "}
                        </button>{" "}
                    </li>
                ))}{" "}
            </ul>{" "}
        </div>
    );
};
export default EmailNotifications;