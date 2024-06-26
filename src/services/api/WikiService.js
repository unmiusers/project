// WikiService.js
import axios from 'axios';

const WikiService = {
    getWikiPages: async () => {
        try {
            const response = await axios.get('/api/wiki');
            return response.data;
        } catch (error) {
            console.error('Error fetching Wiki pages:', error);
            throw error;
        }
    },

    createWikiPage: async (page) => {
        try {
            const response = await axios.post('/api/wiki', page);
            return response.data;
        } catch (error) {
            console.error('Error creating Wiki page:', error);
            throw error;
        }
    },

    updateWikiPage: async (id, updates) => {
        try {
            const response = await axios.put(`/api/wiki/${id}`, updates);
            return response.data;
        } catch (error) {
            console.error('Error updating Wiki page:', error);
            throw error;
        }
    },

    deleteWikiPage: async (id) => {
        try {
            const response = await axios.delete(`/api/wiki/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting Wiki page:', error);
            throw error;
        }
    }
};

export default WikiService;
