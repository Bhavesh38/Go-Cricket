import mongoose from "mongoose";

const userOTPVerificationSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    expiresAt:{
        type:Date,
        default:Date.now()+5*60*1000,
    },
});

const UserOTPVerificationModel=mongoose.model("UserOTPVerification",userOTPVerificationSchema);

export default UserOTPVerificationModel;