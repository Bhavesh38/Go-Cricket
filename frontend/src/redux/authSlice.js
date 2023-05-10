import { createSlice } from "@reduxjs/toolkit";

export const authSlice=createSlice({
    name:"authSlice",
    initialState:{
        user:"",
    },
    reducers:{
        setUser:(state,action)=>{
            localStorage.setItem("goSportsProfile", JSON.stringify(action.payload ));
            state.user=action.payload;
        }
    }
});

export const {setUser}=authSlice.actions;
export default authSlice.reducer;