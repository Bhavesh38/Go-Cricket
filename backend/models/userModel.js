import mongoose from "mongoose";


const userSchema=mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
});

const UserModel=mongoose.model("User",userSchema);

export default UserModel;