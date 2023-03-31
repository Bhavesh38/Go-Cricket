import * as api from "../api/api.js";
import { setCurrentMatches } from "../redux/matchSlice.js";

export const getCurrentMatches =  ()  => async (dispatch) => {
    try {
        const {data} =await api.getCurrentMatchesData();
        dispatch(setCurrentMatches(data?.data));
    } catch (error) {
        console.log(error);
    }
}

export const getSeriesInfo = (seriesId) => async (dispatch) => {
    try {
        const {data} =await api.getSeriesInfoData(seriesId);
        dispatch(setSeriesInformation)
        // console.log(data);
    } catch (error) {
        console.log(error);
    }
}
export const getScoreCard = (matchId) => async (dispatch) => {
    try {
        const {data} =await api.getScoreCardData(matchId);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}