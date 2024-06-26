// TimeLogService.js
import axios from 'axios';
import API_BASE_URL from './config';

const TimeLogService = {
    getTimeLogs: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/timelogs`);
            return response.data;
        } catch (error) {
            console.error('Error fetching time logs:', error);
            throw error;
        }
    },

    createTimeLog: async (log) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/timelogs`, log);
            return response.data;
        } catch (error) {
            console.error('Error creating time log:', error);
            throw error;
        }
    }
};

export default TimeLogService;
