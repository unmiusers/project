import axios from "axios";
const API_URL = "/api/version";
const getCommits = async () => {
    const response = await axios.get(`${API_URL}/commits`);
    return response.data;
};
const getCommitDiff = async (commitId) => {
    const response = await axios.get(`${API_URL}/commits/${commitId}/diff`);
    return response.data;
};
const getBranches = async () => {
    const response = await axios.get(`${API_URL}/branches`);
    return response.data;
};
export default { getCommits, getCommitDiff, getBranches };