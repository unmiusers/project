// VersionService.js
import axios from 'axios';
import API_BASE_URL from '/src/config';

const VersionService = {
    getBranches: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/version/branches`);
            return response.data;
        } catch (error) {
            console.error('Error fetching branches:', error);
            throw error;
        }
    },

    getCommits: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/version/commits`);
            return response.data;
        } catch (error) {
            console.error('Error fetching commits:', error);
            throw error;
        }
    },

    getCommitDiff: async (commitId) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/version/commits/${commitId}/diff`);
            return response.data;
        } catch (error) {
            console.error('Error fetching commit diff:', error);
            throw error;
        }
    }
};

export default VersionService;
