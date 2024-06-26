// ReportService.js
import axios from 'axios';

const ReportService = {
    getIssueReport: async () => {
        try {
            const response = await axios.get('/api/reports/issues');
            return response.data;
        } catch (error) {
            console.error('Error fetching issue report:', error);
            throw error;
        }
    },

    getProgressReport: async () => {
        try {
            const response = await axios.get('/api/reports/progress');
            return response.data;
        } catch (error) {
            console.error('Error fetching progress report:', error);
            throw error;
        }
    }
};

export default ReportService;
