// QueryService.js
import axios from 'axios';
import API_BASE_URL from '/src/config';

const createQuery = async (query) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/queries`, query);
        return response.data;
    } catch (error) {
        console.error('Error creating query:', error);
        throw error;
    }
};

const getSavedQueries = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/queries/saved`);
        return response.data;
    } catch (error) {
        console.error('Error fetching saved queries:', error);
        throw error;
    }
};

const getQueryResults = async (queryId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/queries/${queryId}/results`);
        return response.data;
    } catch (error) {
        console.error('Error fetching query results:', error);
        throw error;
    }
};

export { createQuery, getSavedQueries, getQueryResults };
