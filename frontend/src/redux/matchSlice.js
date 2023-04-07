import {createSlice} from "@reduxjs/toolkit";

export const matchSlice=createSlice({
    name:"matchSlice",
    initialState:{
        currentMatches:[],
        IPLMatches:[],
        CricketseriesInformation:"",
        matchId:"",
        fullMatchScoreCard:""
    },
    reducers:{
        setCurrentMatches:(state,action)=>{
            // console.log(action.payload)
            state.currentMatches=action.payload;
        },
        setSeriesInformation:(state,action)=>{
            state.CricketseriesInformation=action.payload;
        },
        setMatchId:(state,action)=>{
            state.matchId=action.payload;
        },
        setIPLMatches:(state,action)=>{
            state.IPLMatches=action.payload?.filter((match) => match?.name?.toLowerCase()?.includes('gujarat titans') || match?.name?.toLowerCase()?.includes('rajasthan royals') || match?.name?.toLowerCase()?.includes('mumbai indians') || match?.name?.toLowerCase()?.includes('chennai super kings') || match?.name?.toLowerCase()?.includes('kolkata knight riders') || match?.name?.toLowerCase()?.includes('delhi capitals') || match?.name?.toLowerCase()?.includes('sunrisers hyderabad') || match?.name?.toLowerCase()?.includes('punjab kings'));
        },
        setFullMatchScoreCard:(state,action)=>{
            state.fullMatchScoreCard=action.payload?.data;
        }
    }
})

export const {setCurrentMatches,setSeriesInformation,setMatchId,setIPLMatches,setFullMatchScoreCard}=matchSlice.actions;
export default matchSlice.reducer;