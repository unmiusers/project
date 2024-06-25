import axios from "axios";
const API_URL = "/api/timelog";
const getTimeLogs = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
const createTimeLog = async (timeLog) => {
    const response = await axios.post(API_URL, timeLog);
    return response.data;
};
const getTimeLogReports = async () => {
    const response = await axios.get(`${API_URL}/reports`);
    return response.data;
};
const getTimeVisualizationData = async () => {
    const response = await axios.get(`${API_URL}/visualization`);
    return response.data;
};
export default {
    getTimeLogs,
    createTimeLog,
    getTimeLogReports,
    getTimeVisualizationData,
};