// TimeLogService.js
import axios from 'axios';

const TimeLogService = {
    getTimeLogs: async () => {
        try {
            const response = await axios.get('/api/timelogs');
            return response.data;
        } catch (error) {
            console.error('Error fetching time logs:', error);
            throw error;
        }
    },

    createTimeLog: async (log) => {
        try {
            const response = await axios.post('/api/timelogs', log);
            return response.data;
        } catch (error) {
            console.error('Error creating time log:', error);
            throw error;
        }
    }
};

export default TimeLogService;
