import Axios from 'axios';

// Adds the URL Drones List with Axios

const url = `${process.env.BASE_API_URL}/drones`;

// Exports the JSON Server Endpoint URL and get the data
export const getDroneList = () =>
    Axios.get(`${url}`).then(response => {
        return response.data;
    });