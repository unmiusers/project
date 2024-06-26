// QueryService.js
import axios from 'axios';

const QueryService = {
    createQuery: async (query) => {
        try {
            const response = await axios.post('/api/queries', query);
            return response.data;
        } catch (error) {
            console.error('Error creating query:', error);
            throw error;
        }
    },

    getSavedQueries: async () => {
        try {
            const response = await axios.get('/api/queries/saved');
            return response.data;
        } catch (error) {
            console.error('Error fetching saved queries:', error);
            throw error;
        }
    },

    getQueryResults: async (queryId) => {
        try {
            const response = await axios.get(`/api/queries/${queryId}/results`);
            return response.data;
        } catch (error) {
            console.error('Error fetching query results:', error);
            throw error;
        }
    }
};

export default QueryService;
