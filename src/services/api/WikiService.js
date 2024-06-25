import axios from "axios";
const API_URL = "/api/wiki";
const getPages = async () => {
    const response = await axios.get(`${API_URL}/pages`);
    return response.data;
};
const getPage = async (id) => {
    const response = await axios.get(`${API_URL}/pages/${id}`);
    return response.data;
};
const createPage = async (page) => {
    const response = await axios.post(`${API_URL}/pages`, page);
    return response.data;
};
const updatePage = async (id, page) => {
    const response = await axios.put(`${API_URL}/pages/${id}`, page);
    return response.data;
};
const deletePage = async (id) => {
    const response = await axios.delete(`${API_URL}/pages/${id}`);
    return response.data;
};
export default { getPages, getPage, createPage, updatePage, deletePage };