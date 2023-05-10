import axios from "axios";
const APIKEY="e49e70f2-437b-4395-b267-bf81546b740d"
// const APIKEY="f53e507b-f534-428f-a528-8ac986d7c3fd"
// const APIKEY="fb633a90-7467-4d94-a082-409f77d0ae78"
// const APIKEY="1f3e6155-ae76-461c-813d-381593850bf8"
// const APIKEY="f64ee0a2-ea66-4ecd-b89f-a7cc75d41a21"
// const APIKEY="6084c29f-9852-4d82-91d5-20ad94e386a1"

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
export const getSquadData=(matchId) => API.get(`/match_squad?apikey=${APIKEY}&id=${matchId}`);
export const getBallByBallData= (matchId) => API.get(`/match_bbb?apikey=${APIKEY}&id=${matchId}`);
export const getPointsTableData= (seriesId) => API.get(`/series_points?apikey=${APIKEY}&id=${seriesId}`);