import * as api from '../api/auctionsAPI.js';
import { setAuctions } from '../redux/auctionSlice.js';

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