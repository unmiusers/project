// NotificationService.js
import axios from 'axios';
import API_BASE_URL from '/src/config';

const getNotifications = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/notifications`);
        return response.data;
    } catch (error) {
        console.error('Error fetching notifications:', error);
        throw error;
    }
};

const createNotification = async (notification) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/notifications`, notification);
        return response.data;
    } catch (error) {
        console.error('Error creating notification:', error);
        throw error;
    }
};


export { getNotifications, createNotification };
