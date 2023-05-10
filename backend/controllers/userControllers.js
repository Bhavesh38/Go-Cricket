import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel.js';
import UserOTPVerificationModel from '../models/userOTPVerification.js';
import nodemailer from 'nodemailer';


export const signup = async (req, res) => {
    try{
        const { name,email, password } = req.body;
        const findUser=await UserModel.findOne({email:email});
        if(findUser){
            return res.status(400).json({message:"User already exists"});
            
        }
        const hashedPassword=await bycrypt.hash(password,10);

        const createdUser = await UserModel.create({email:email,name:name,password:hashedPassword});
        createdUser.save();

        const token=jwt.sign({email:createdUser.email,id:createdUser._id},process.env.JWT_SECRET,{expiresIn:"24h"});
        res.status(200).json({result:createdUser,token:token});

    }catch(err){
        res.status(500).json({message:err.message});
    }
}

export const signin = async (req, res) => {
    try{
        const { email, password } = req.body;

        const findUser=await UserModel.findOne({ email: email });
        if(!findUser){
            return res.status(400).json({message:"User doesn't exist"});
        }
        const isPasswordCorrect=await bycrypt.compare(password,findUser.password);
        if(!isPasswordCorrect){
            return res.status(400).json({message:"Invalid credentials"});
        }

        const token=jwt.sign({email:findUser.email,id:findUser._id},process.env.JWT_SECRET,{expiresIn:"24h"});
        res.status(200).json({result:findUser,token:token});

    }catch(err){
        res.status(500).json({message:err.message});
    }
}

export const resetPassword =async (req, res) => {
    try {
        const {email} = req.body;

        const findUser=await UserModel.findOne({ email: email });
        if(!findUser){
            return res.status(400).json({message:"User doesn't exist"});
        }

        sendOTPViaEmail(findUser,res);


    } catch (error) {
        res.json({
            stats: 500,
            message: error.message
        })
    }

    
}


const sendOTPViaEmail = async ({_id,email},res) => {
    try {

        const otp=`${Math.floor(1000 + Math.random() * 9000)}`;
        // const {email} = req.body;
        // const findUser=await UserModel.findOne({ email: email });
        // if(!findUser){
        //     return res.status(400).json({message:"User doesn't exist"});
        // }
        // const otp=generateOTP();
        let transporter = nodemailer.createTransport({
            host: process.env.SMPT_HOST,
            port: process.env.SMPT_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
              user: process.env.SMPT_MAIL, // generated ethereal user
              pass: process.env.SMPT_PASSWORD, // generated ethereal password
            },
          });
        // const transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: process.env.EMAIL,
        //         pass: process.env.PASSWORD
        //     }
        // });
        const mailOptions = {
            from: process.env.SMPT_MAIL,
            to: email,
            subject: 'reset password.',
            html: `<p>Your OTP for reset password  is <b>${otp}</b>. This will expire int 1h.</p>`
        };

        const saltRounds=10;
        const hashedOTP =await bycrypt.hash(otp,saltRounds);

        const newOTPVerification=await UserOTPVerificationModel.create({
            userId:_id,
            otp:hashedOTP,
            createdAt:Date.now(),
            expiresAt:Date.now()+3600000,
        })

        await newOTPVerification.save();


        await transporter.sendMail(mailOptions);
        res.status(200).json({userId:_id,email:email,message:"OTP sent to your email"});
    } catch (error) {
        res.json({
            stats: 500,
            message: error.message
        })
    }
}


export const  verifyOTP = async (req,res) => {
    try {
        const {userId,otp} = req.body;
        const findUser=await UserModel.findOne({ _id: userId });
        if(!findUser){
            return res.status(400).json({message:"User doesn't exist"});
        }

        const findOTPVerification=await UserOTPVerificationModel.findOne({ userId: userId });
        if(!findOTPVerification){
            return res.status(400).json({message:"OTP doesn't exist"});
        }

        const isOTPValid=await bycrypt.compare(otp,findOTPVerification.otp);
        if(!isOTPValid){
            return res.status(400).json({message:"Invalid OTP"});
        }

        const isOTPExpired=Date.now()>findOTPVerification.expiresAt;
        if(isOTPExpired){
            await UserOTPVerificationModel.deleteOne({userId:userId});
            return res.status(400).json({message:"OTP expired"});
        }

        res.status(200).json({userId:userId,email:findUser.email,message:"OTP verified"});

    } catch (error) {
        res.json({
            stats: 500,
            message: error.message
        })
    }
}
