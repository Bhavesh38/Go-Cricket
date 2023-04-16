import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRouter from './routes/userRoutes.js';


const app = express();
dotenv.config();

app.use(bodyParser.json({  extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/',(req,res) => {
    res.send('Hello');
});

app.use('/user',userRouter)

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(process.env.PORT, () => console.log("Server is running on port ",process.env.PORT))).catch(error => console.log(error.message));
