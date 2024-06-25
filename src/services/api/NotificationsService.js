import axios from "axios";
const API_URL = "/api/notifications";
const getNotifications = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
const getNotificationSettings = async () => {
    const response = await axios.get(`${API_URL}/settings`);
    return response.data;
};
const toggleNotificationSetting = async (settingId) => {
    const response = await axios.put(`${API_URL}/settings/${settingId}/toggle`);
    return response.data;
};
export default {
    getNotifications,
    getNotificationSettings,
    toggleNotificationSetting,
};