import axios from "axios";
const API_URL = "/api/users";
const getUsers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
const getUser = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};
const createUser = async (user) => {
    const response = await axios.post(API_URL, user);
    return response.data;
};
const updateUser = async (id, user) => {
    const response = await axios.put(`${API_URL}/${id}`, user);
    return response.data;
};
const deleteUser = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
const getUserLoginHistory = async (id) => {
    const response = await axios.get(`${API_URL}/${id}/login-history`);
    return response.data;
};
export default {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getUserLoginHistory,
};