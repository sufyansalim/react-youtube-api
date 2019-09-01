import axios from 'axios';

const KEY="AIzaSyAZX0ztZ6OE5fdd8EYHusdKFyv8YypJwHA";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key: KEY
    }
});