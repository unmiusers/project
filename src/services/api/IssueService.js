// IssueService.js
import axios from 'axios';

const IssueService = {
    getIssues: async () => {
        try {
            const response = await axios.get('/api/issues');
            return response.data;
        } catch (error) {
            console.error('Error fetching issues:', error);
            throw error;
        }
    },

    createIssue: async (issue) => {
        try {
            const response = await axios.post('/api/issues', issue);
            return response.data;
        } catch (error) {
            console.error('Error creating issue:', error);
            throw error;
        }
    },

    updateIssue: async (id, updates) => {
        try {
            const response = await axios.put(`/api/issues/${id}`, updates);
            return response.data;
        } catch (error) {
            console.error('Error updating issue:', error);
            throw error;
        }
    },

    deleteIssue: async (id) => {
        try {
            const response = await axios.delete(`/api/issues/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting issue:', error);
            throw error;
        }
    }
};

export default IssueService;
