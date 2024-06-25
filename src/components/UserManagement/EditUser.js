import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EditUser.css";
const EditUser = ({ userId, onUserUpdated }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetchUser();
    }, [userId]);
    const fetchUser = async () => {
        try {
            const response = await axios.get(`/api/users/${userId}`);
            setUser(response.data);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };
    const handleUpdateUser = async () => {
        try {
            const response = await axios.put(`/api/users/${userId}`, user);
            onUserUpdated(response.data);
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };
    if (!user) return null;
    return (
        <div className="edit-user">
            {" "}
            <h2>Edit User</h2>{" "}
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                placeholder="Name"
            />{" "}
            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                placeholder="Email"
            />{" "}
            <select name="role" value={user.role} onChange={handleInputChange}>
                {" "}
                <option value="admin">Admin</option>{" "}
                <option value="developer">Developer</option>{" "}
                <option value="viewer">Viewer</option>{" "}
            </select>{" "}
            <button onClick={handleUpdateUser}>Update User</button>{" "}
        </div>
    );
};
export default EditUser;