import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 163JCyJ2oZQI1pl5VMsznSeELGRcT9pHbRxRmZx6qjU' 
    }
});

