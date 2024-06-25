import axios from "axios";
const API_URL = "/api/queries";
const getQueries = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
const getQuery = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};
const createQuery = async (query) => {
    const response = await axios.post(API_URL, query);
    return response.data;
};
const updateQuery = async (id, query) => {
    const response = await axios.put(`${API_URL}/${id}`, query);
    return response.data;
};
const deleteQuery = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
export default { getQueries, getQuery, createQuery, updateQuery, deleteQuery };