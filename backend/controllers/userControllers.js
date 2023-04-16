import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel.js';
export const signup = async (req, res) => {
    try{
        const { userName,email, password } = req.body;
        const findUser=await UserModel.findOne({email:email});
        if(findUser){
            return res.status(400).json({message:"User already exists"});
            
        }
        const hashedPassword=await bycrypt.hash(password,10);

        const createdUser = await UserModel.create({email:email,userName:userName,password:hashedPassword});
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

