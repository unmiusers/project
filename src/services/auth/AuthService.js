// services/auth/authService.jsimport axios from 'axios';
const API_BASE_URL = "/api/auth";
const login = async (credentials) => {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data;
};
const register = async (userData) => {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
};
export default { login, register };