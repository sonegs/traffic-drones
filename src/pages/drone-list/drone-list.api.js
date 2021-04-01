import Axios from 'axios';

// Adds the URL Drones List with Axios

const dronesUrl = `${process.env.BASE_API_URL}/drones/`;

// Exports the JSON Server Endpoint URL and get the data
export const getDroneList = () =>
    Axios.get(`${dronesUrl}`).then(response => {
        return response.data;
    });

export const getDrone = id =>
    Axios.get(`${dronesUrl}${id}`).then(response => {
        return response.data;
    });