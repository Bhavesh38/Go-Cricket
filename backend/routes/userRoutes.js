
import express from "express";
import { resetPassword, signin, signup, verifyOTP } from "../controllers/userControllers.js";

const userRouter=express.Router();

userRouter.post('/signin',signin);
userRouter.post('/signup',signup);
userRouter.post('/reset-password',resetPassword);
userRouter.post('/verify-otp',verifyOTP);

export default userRouter;