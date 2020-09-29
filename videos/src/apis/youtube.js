import axios from 'axios';

const KEY = 'AIzaSyCmULWlUu2SK4ppmR5waguEa6JDz9b4_iY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})