import {createSlice} from "@reduxjs/toolkit";

export const matchSlice=createSlice({
    name:"match",
    initialState:{
        currentMatches:[],
        seriesInformation:null,
        matchId:""
    },
    reducers:{
        setCurrentMatches:(state,action)=>{
            state.currentMatches=action.payload;
        },
        setSeriesInformation:(state,action)=>{
            state.seriesInformation=action.payload;
        },
        setMatchId:(state,action)=>{
            state.matchId=action.payload;
        }
    }
})

export const {setCurrentMatches,setSeriesInformation,setMatchId}=matchSlice.actions;
export default matchSlice.reducer;