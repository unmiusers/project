// UserService.js
import axios from 'axios';
import API_BASE_URL from '/src/config';

const UserService = {
    getUsers: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/users`);
            return response.data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    },

    createUser: async (user) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/users`, user);
            return response.data;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    },

    updateUser: async (id, updates) => {
        try {
            const response = await axios.put(`${API_BASE_URL}/api/users/${id}`, updates);
            return response.data;
        } catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    },

    deleteUser: async (id) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/api/users/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting user:', error);
            throw error;
        }
    }
};

export default UserService;
