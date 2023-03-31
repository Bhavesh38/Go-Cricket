import { createSlice } from "@reduxjs/toolkit";

export const authSlice=createSlice({
    name:"authSlice",
    initialState:{
        APIKEY:""
    },
    reducers:{
        setAPIKEY:(state,action)=>{
            state.APIKEY=action.payload
        }
    }
});

export const {setAPIKEY}=authSlice.actions;
export default authSlice.reducer;