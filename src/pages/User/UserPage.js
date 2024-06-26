import React from 'react';
import UserList from '../../components/UserManagement/UserList';
import UserLoginHistory from '../../components/UserManagement/UserLoginHistory';
import EditUser from '../../components/UserManagement/EditUser';
import './UserPage.css';

const UserPage = () => {
    return (
        <div className="user-page">
            <h1>User Management</h1>
            <UserList />
            <UserLoginHistory />
            <EditUser />
        </div>
    );
};

export default UserPage;
