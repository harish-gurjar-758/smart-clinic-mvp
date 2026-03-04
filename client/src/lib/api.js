import axios from 'axios';

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
    withCredentials: true, // Crucial for HTTP-only cookies
});

// Add token to headers if needed (though cookies handle auth)
API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Handle redirect to login
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default API;