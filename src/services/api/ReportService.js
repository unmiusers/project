import axios from "axios";
const API_URL = "/api/reports";
const getIssueReport = async () => {
    const response = await axios.get(`${API_URL}/issues`);
    return response.data;
};
const getProgressReport = async () => {
    const response = await axios.get(`${API_URL}/progress`);
    return response.data;
};
const exportReport = async (format) => {
    const response = await axios.get(`${API_URL}/export?format=${format}`, {
        responseType: "blob",
    });
    return response.data;
};
export default { getIssueReport, getProgressReport, exportReport };