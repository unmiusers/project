import React from 'react';
import './NotificationsPage.css';
import EmailNotifications from '../../components/Notifications/EmailNotifications';
import NotificationList from '../../components/Notifications/NotificationList';

const NotificationsPage = () => {
    return (
        <div className="notifications-page">
            <h1 className="notifications-title">Notifications</h1>
            <EmailNotifications />
            <NotificationList />
        </div>
    );
};

export default NotificationsPage;
