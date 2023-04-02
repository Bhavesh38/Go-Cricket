import axios from "axios";
const BASE_URL = "https://api-football-v1.p.rapidapi.com";
const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '32c062554dmshc19c4209fe934b9p1187d1jsn6849b81fed0f',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
};

export const fetchFromFootballAPI = async (url) => {
    const { data } = await axios.get(`https://api-football-v1.p.rapidapi.com/v3/odds/live`, options)
    return data;
}