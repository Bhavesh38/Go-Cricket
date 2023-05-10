import * as api from "../api/api.js";
import { setBallPerBallCommentry, setCurrentMatches, setFullMatchScoreCard, setIPLMatches,setPointsTable,setSquad } from "../redux/matchSlice.js";

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

export const getSquad=(matchId) => async (dispatch) => {
    try {
        const {data} =await api.getSquadData(matchId);
        // console.log(data);
        dispatch(setSquad(data));
    } catch (error) {
        console.log(error);
    }
}

export const getBallByBall=(matchId) => async (dispatch) => {
    try {
        const {data} =await api.getBallByBallData(matchId);
        // console.log(data);
        dispatch(setBallPerBallCommentry(data?.data));
    } catch (error) {
        console.log(error);
    }
}

export const getPointsTable = (seriesId) => async (dispatch) => {
    try {
        const {data} =await api.getPointsTableData(seriesId);
        // console.log(data);
        const arr=data?.data;
        arr.sort((a, b) => (parseFloat(b?.wins*2 + b?.nr + b?.ties) - parseFloat(a?.wins*2 + a?.nr + a?.ties)) );
        dispatch(setPointsTable(arr));
    } catch (error) {
        console.log(error);
    }
}