import * as api from "../api/api.js";
import { setCurrentMatches, setFullMatchScoreCard, setIPLMatches } from "../redux/matchSlice.js";

export const getCurrentMatches =  ()  => async (dispatch) => {
    try {
        const {data} =await api.getCurrentMatchesData();
        dispatch(setCurrentMatches(data?.data));
        dispatch(setIPLMatches(data?.data));
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
        // console.log(data);
        dispatch(setFullMatchScoreCard(data));
    } catch (error) {
        console.log(error);
    }
}