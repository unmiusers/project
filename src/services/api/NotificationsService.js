// NotificationService.js
import axios from 'axios';

const NotificationService = {
    getNotifications: async () => {
        try {
            const response = await axios.get('/api/notifications');
            return response.data;
        } catch (error) {
            console.error('Error fetching notifications:', error);
            throw error;
        }
    },

    createNotification: async (notification) => {
        try {
            const response = await axios.post('/api/notifications', notification);
            return response.data;
        } catch (error) {
            console.error('Error creating notification:', error);
            throw error;
        }
    }
};

export default NotificationService;
