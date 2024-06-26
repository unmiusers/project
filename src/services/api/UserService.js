// UserService.js
import axios from 'axios';

const UserService = {
    getUsers: async () => {
        try {
            const response = await axios.get('/api/users');
            return response.data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    },

    createUser: async (user) => {
        try {
            const response = await axios.post('/api/users', user);
            return response.data;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    },

    updateUser: async (id, updates) => {
        try {
            const response = await axios.put(`/api/users/${id}`, updates);
            return response.data;
        } catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    },

    deleteUser: async (id) => {
        try {
            const response = await axios.delete(`/api/users/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting user:', error);
            throw error;
        }
    }
};

export default UserService;
