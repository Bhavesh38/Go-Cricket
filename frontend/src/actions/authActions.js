import * as api from "../api/authApi";

export const signIn = (formData) =>async (dispatch) => {
    try {
        const {data}=await api.signinAPI(formData);
        // dispatch({type:"AUTH",data});
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}

export const signUp = (formData) =>async (dispatch) => {
    try {
        const {data}=await api.signupAPI(formData);
        // dispatch({type:"AUTH",data});
        console.log(data);
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