import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice";
import matchSlice from "./matchSlice";
import footballSlice from "./footballSlice";
import auctionSlice from "./auctionSlice";
import articleSlice from "./articleSlice";

const store=configureStore({
    reducer:{
        // Add reducers here
        authSlice:authSlice,
        matchSlice:matchSlice,
        footballSlice:footballSlice,
        auctionSlice:auctionSlice,
        articleSlice:articleSlice,
    }
})

export default store;
