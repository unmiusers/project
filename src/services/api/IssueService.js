import axios from "axios";
const API_URL = "/api/issues";
const getIssues = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
const getIssue = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};
const createIssue = async (issue) => {
    const response = await axios.post(API_URL, issue);
    return response.data;
};
const updateIssue = async (id, issue) => {
    const response = await axios.put(`${API_URL}/${id}`, issue);
    return response.data;
};
const deleteIssue = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
export default { getIssues, getIssue, createIssue, updateIssue, deleteIssue };