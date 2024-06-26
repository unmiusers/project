// GanttService.js
import axios from 'axios';

const GanttService = {
    getGanttData: async () => {
        try {
            const response = await axios.get('/api/gantt');
            return response.data;
        } catch (error) {
            console.error('Error fetching Gantt data:', error);
            throw error;
        }
    }
};

export default GanttService;
