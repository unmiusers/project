// GanttService.js
import axios from 'axios';
import API_BASE_URL from '/src/config';

const GanttService = {
    getGanttData: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/gantt`);
            return response.data;
        } catch (error) {
            console.error('Error fetching Gantt data:', error);
            throw error;
        }
    }
};

export default GanttService;
