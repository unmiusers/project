import React from 'react';
import UserManagement from '../components/UserManagement/UserPage';
import './UserPage.css';

const UserPage = () => {
    return (
        <div className="user-page">
            <UserManagement />
        </div>
    );
};

export default UserPage;