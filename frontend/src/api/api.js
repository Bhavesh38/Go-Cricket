import axios from "axios";
const APIKEY="e49e70f2-437b-4395-b267-bf81546b740d"
const football="89f1dc6aep10c59ajsn572f3a79ca64";
const API = axios.create({
    // https://dont-use-this.meredavai.com
    baseURL: 'https://api.cricapi.com/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});
// https://api.cricapi.com/v1/currentMatches?apikey=e49e70f2-437b-4395-b267-bf81546b740d&offset=0
export const getCurrentMatchesData = () => API.get(`/currentMatches?apikey=${APIKEY}&offset=0`);
export const getSeriesInfoData= (seriesId) => API.get(`/series_info?apikey=${APIKEY}&id=${seriesId}`);
export const getScoreCardData=(matchId) => API.get(`/match_scorecard?apikey=${APIKEY}&id=${matchId}`);
// https://api.cricapi.com/v1/match_scorecard?apikey=e49e70f2-437b-4395-b267-bf81546b740d&id=28004108-5cdd-43f7-82f3-f530bf8b2ce9