import * as api from "../api/authApi";
import { setAuctions } from "../redux/auctionSlice";
import { setUser } from "../redux/authSlice";

export const signIn = (formData) =>async (dispatch) => {
    try {
        const data=await api.signinAPI(formData);
        // dispatch({type:"AUTH",data});
        // console.log(data);
        dispatch(setUser(data?.data));
        dispatch(setAuctions(data?.data?.result?.auctions));
        return data;
    } catch (error) {
        console.log(error);
    }

}

export const signUp = (formData) =>async (dispatch) => {
    try {
        const data =await api.signupAPI(formData);
        // dispatch({type:"AUTH",data});
        console.log(data);
        dispatch(setUser(data?.data));
        dispatch(setAuctions(data?.data?.result?.auctions));
        return data;
    } catch (error) {
        console.log(error);
    }

}

export const resetPassword = (formData) =>async (dispatch) => {
    try {
        const {data}=await api.resetPasswordAPI(formData);
        // dispatch({type:"AUTH",data});
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}

export const verifyOTP = (formData) =>async (dispatch) => {
    try {
        const {data}=await api.verifyOTPAPI(formData);
        // dispatch({type:"AUTH",data});
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}