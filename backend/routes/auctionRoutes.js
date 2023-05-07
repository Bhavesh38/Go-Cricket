import express from "express";
import { addPlayerInAuction, createNewAuction, getAllAuction, removePlayerFromAuction } from "../controllers/auctionControllers.js";
import auth from "../middlewares/auth.js";

const auctionRouter=express.Router();

auctionRouter.post("/create-auction",createNewAuction);
auctionRouter.get("/allAuctions",getAllAuction);
auctionRouter.post("/:id/addPlayer",addPlayerInAuction);
auctionRouter.post("/:id/removePlayer",removePlayerFromAuction);

export default auctionRouter;