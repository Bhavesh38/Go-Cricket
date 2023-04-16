
import express from "express";
import { signin, signup } from "../controllers/userControllers.js";

const userRouter=express.Router();

userRouter.post('/signin',signin);
userRouter.post('/signup',signup);

export default userRouter;