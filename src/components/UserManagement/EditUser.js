import React, { useState } from 'react';
import axios from 'axios';
import './EditUser.css';

const EditUser = () => {
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleEditUser = async () => {
        try {
            const response = await axios.put(`/api/users/${userId}`, { username, email });
            console.log('User updated:', response.data);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div className="edit-user">
            <h2>Edit User</h2>
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="User ID"
            />
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <button onClick={handleEditUser}>Update User</button>
        </div>
    );
};

export default EditUser;
