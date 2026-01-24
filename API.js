import axios from "axios";

const API_URL = "https://localhost:5001/api"; // Replace with your backend URL

export const getJobs = async () => {
    const response = await axios.get(`${API_URL}/Jobs`);
    return response.data;
};

export const addJob = async (job) => {
    const response = await axios.post(`${API_URL}/Jobs`, job);
    return response.data;
};

export const registerUser = async (user) => {
    const response = await axios.post(`${API_URL}/Users`, user);
    return response.data;
};
