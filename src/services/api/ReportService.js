// ReportService.js
import axios from 'axios';
import API_BASE_URL from '/src/config';

const ReportService = {
    getIssueReport: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/reports/issues`);
            return response.data;
        } catch (error) {
            console.error('Error fetching issue report:', error);
            throw error;
        }
    },

    getProgressReport: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/reports/progress`);
            return response.data;
        } catch (error) {
            console.error('Error fetching progress report:', error);
            throw error;
        }
    }
};

export default ReportService;
