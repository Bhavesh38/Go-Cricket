import mongoose from "mongoose";

const auctionSchema = mongoose.Schema({
    auctionName:{
        type: 'string',
        required: true,
        unique: true
    },
    auctionDescription:{
        type: 'string',
        required: true
    },
    playerList:{
        type: 'array',
        default: []
    },
    auctionStarted:{
        type: 'boolean',
        default: false
    },
    auctionEnded:{
        type: 'boolean',
        default: false
    }
})

const auctionModel = mongoose.model("Auction", auctionSchema);
export default auctionModel;