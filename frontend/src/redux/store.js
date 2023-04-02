import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice";
import matchSlice from "./matchSlice";
import footballSlice from "./footballSlice";

const store=configureStore({
    reducer:{
        // Add reducers here
        authSlice:authSlice,
        matchSlice:matchSlice,
        footballSlice:footballSlice
    }
})

export default store;
