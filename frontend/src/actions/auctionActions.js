import * as api from '../api/auctionsAPI.js';
import { setAuctions, setCurrentUserAuctions } from '../redux/auctionSlice.js';

export const createNewAuction = (formData) => async (dispatch) => {
    try {
        const { data } = await api.createNewAuctionAPI( formData);
        console.log(data);
        // dispatch(setAuctions(data));
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getAllAuctions = (formData) => async (dispatch) => {
    try {
        const { data } = await api.getAllAuctionsAPI(formData);
        console.log(data);
        // dispatch(setAuctions(data));
        dispatch(setCurrentUserAuctions(data));
        // return data;
    } catch (error) {
        console.log(error);
    }
}