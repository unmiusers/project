import axios from 'axios';

const AuthService = {
    login: async (credentials) => {
        try {
            const response = await axios.post('/api/auth/login', credentials);
            return response.data;
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    },

    register: async (userInfo) => {
        try {
            const response = await axios.post('/api/auth/register', userInfo);
            return response.data;
        } catch (error) {
            console.error('Error registering:', error);
            throw error;
        }
    },

    logout: async () => {
        try {
            const response = await axios.post('/api/auth/logout');
            return response.data;
        } catch (error) {
            console.error('Error logging out:', error);
            throw error;
        }
    }
};

export default AuthService;
