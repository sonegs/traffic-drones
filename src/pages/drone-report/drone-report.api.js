import Axios from 'axios';

// Adds the URL Reports with Axios
const droneReportsUrl = `${process.env.BASE_API_URL}/reports`;

// Exports the URL and get the data
export const getDronesReports = id =>
    Axios.get(`${droneReportsUrl}?drone_id=${id}`).then(response => {
        return response.data;
    });