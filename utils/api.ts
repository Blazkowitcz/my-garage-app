import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://192.168.1.86:3000/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;