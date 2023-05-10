import axios from "axios";
const user=(JSON.parse(localStorage?.getItem("goSportsProfile")?.trim()));
const API= axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        'Content-Type': 'application/json',
        accesstoken: user?.token
        
    }
});

export const createNewAuctionAPI = (formData) => API.post("/auction/create-auction", formData);
export const getAllAuctionsAPI = (formData) => API.get("/auction/allAuctions", formData);