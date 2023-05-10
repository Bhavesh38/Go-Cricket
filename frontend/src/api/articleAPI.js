
import axios from "axios"
// const articleAPI="c13fc3bce675099b099c044b7e18383c";
const API_KEY="d28f07c6d3184c29a61b73de23bdfa4f"

const API = axios.create({
    // https://dont-use-this.meredavai.com
    baseURL:"https://newsapi.org/v2",
    headers: {
        'Content-Type': 'application/json'
    }
});
// https://newsapi.org/v2/everything?q=ipl&sortBy=popularity&apiKey=d28f07c6d3184c29a61b73de23bdfa4f
export const getArticlesData = (query) => API.get(`/everything?q=${query}&sortBy=popularity&apiKey=${API_KEY}`);