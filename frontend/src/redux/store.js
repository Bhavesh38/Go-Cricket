import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice";
import matchSlice from "./matchSlice";

const store=configureStore({
    reducer:{
        // Add reducers here
        authSlice:authSlice,
        matchSlice:matchSlice,
    }
})

export default store;
