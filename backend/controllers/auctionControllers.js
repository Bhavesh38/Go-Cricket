import auctionModel from "../models/auctionModel.js";
import UserModel from "../models/userModel.js";


export const createNewAuction = async (req, res) => {
    try {
        const { auctionName, auctionDescription,auctionCreator } = req.body;
        const findAuction=await auctionModel.findOne({auctionName});
        if(findAuction) {
            return res.json({
                status: 400,
                message: "Auction already exists"
            });
        }
        const newAuction = new auctionModel({ auctionName, auctionDescription });
        await newAuction.save();

        const auctionId=newAuction._id;
        const result=await UserModel.updateOne({email:auctionCreator},{$push:{auctions:auctionId}});
        res.status(200).json({newAuction:newAuction,result:result});
    } catch (error) {
        res.json({
            stats: 500,
            message: error.message
        })
    }
}

export const getAllAuction =async (req, res) =>{
    try {
        const {auctions}=req.body;
        console.log(auctions);
        let tempArray=[];
        auctions?.forEach(async (auction)=>{
            const foundAuction = await auctionModel.findOne({_id:auction});
            if(foundAuction){
                tempArray.push(foundAuction);
            }
            // tempArray.push(foundAuction);
        })
        
        res.status(200).json(tempArray);
    } catch (error) {
        res.json({
            stats: 500,
            message: error.message
        })
    }
}

export const deleteAuction=async (req,res) => {
    try {
        const {id}=req.params;
        const findAuction   = await auctionModel.findById({_id:id});
        if(!findAuction) {
            return res.json({
                status: 400,
                message: "Auction does not exists"
            });
        }
        await findAuction.remove();
        res.status(200).json({
            status: 200,
            message: "Auction deleted successfully"
        });
        
    } catch (error) {
        res.json({
            stats: 500,
            message: error.message
        })
    }
}

export const addPlayerInAuction = async (req,res) => {
    try {
        const {id}=req.params;
        const {player}=req.body;
        const findAuction=await auctionModel.updateOne({_id:id},{$push:{playerList:player}});
        if(!findAuction) {
            return res.json({
                status: 400,
                message: "Auction does not exists"
            });
        }
        // findAuction.playerList.push(player);
        // await findAuction.save();
        res.status(200).json(findAuction);
    } catch (error) {
        res.json({
            stats: 500,
            message: error.message
        })
    }
}

export const removePlayerFromAuction =async (req,res) => {
    try {
        const {id}=req.params;
        const findAuction = await auctionModel.findById({_id:id});
        if(!findAuction) {
            return res.json({
                status: 400,
                message: "Auction does not exists"
            });
        }
        findAuction.playerList = findAuction.playerList.filter(player => player._id !== req.userId);
        await findAuction.save();
        res.status(200).json(findAuction);
    } catch (error) {
        res.json({
            stats: 500,
            message: error.message
        })
    }
}