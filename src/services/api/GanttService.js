import axios from "axios";
const API_URL = "/api/gantt";
const getTasks = async () => {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data;
};
export default { getTasks };