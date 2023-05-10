import { createSlice } from "@reduxjs/toolkit";

export const auctionSlice= createSlice({
    name: "auctionSlice",
    initialState: {
        auctions:[],
        batters:[],
        bowlers:[],
        allrounders:[],
        wicketkeepers:[],
        currentUserAuctions:[],
    },
    reducers: {
        setAuctions: (state, action) => {
            state.auctions = (action.payload);
        },
        setBatters: (state, action) => {
            state.batters = [...state.batters,action.payload];
        },
        setBowlers: (state, action) => {
            state.bowlers = [...state.bowlers,action.payload];
        },
        setAllrounders: (state, action) => {
            state.allrounders = [...state.allrounders,action.payload];
        },
        setWicketkeepers: (state, action) => {
            state.wicketkeepers = [...state.wicketkeepers,action.payload];
        },
        setCurrentUserAuctions: (state, action) => {
            state.currentUserAuctions = action.payload;
        }
    }
});

export const { setBatters ,setBowlers,setAllrounders,setWicketkeepers,setAuctions,setCurrentUserAuctions} = auctionSlice.actions;
export default auctionSlice.reducer;