import axios from "axios";

// console.log(token)
const API = axios.create({
    // https://dont-use-this.meredavai.com
    baseURL: "http://localhost:3001",
    headers: {
        'Content-Type': 'application/json'
    }
});

export const signinAPI= (formData) => API.post("/user/signin",formData);
export const signupAPI= (formData) => API.post("/user/signup",formData);
export const resetPasswordAPI= (formData) => API.post("/user/reset-password",formData);
export const verifyOTPAPI= (formData) => API.post("/user/verify-otp",formData);