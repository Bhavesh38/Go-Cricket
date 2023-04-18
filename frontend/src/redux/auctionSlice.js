import { createSlice } from "@reduxjs/toolkit";

export const auctionSlice= createSlice({
    name: "auctionSlice",
    initialState: {
        batters:[],
        bowlers:[],
        allrounders:[],
        wicketkeepers:[],
    },
    reducers: {
        setBatters: (state, action) => {
            state.batters = [state.batters,action.payload];
        },
        setBowlers: (state, action) => {
            state.bowlers = [state.bowlers,action.payload];
        },
        setAllrounders: (state, action) => {
            state.allrounders = [...state.allrounders,action.payload];
        },
        setWicketkeepers: (state, action) => {
            state.wicketkeepers = [...state.wicketkeepers,action.payload];
        },
    }
});

export const { setBatters ,setBowlers,setAllrounders,setWicketkeepers} = auctionSlice.actions;
export default auctionSlice.reducer;