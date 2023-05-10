import express from "express";
import { addPlayerInAuction, createNewAuction, getAllAuction, removePlayerFromAuction } from "../controllers/auctionControllers.js";
import auth from "../middlewares/auth.js";

const auctionRouter=express.Router();

auctionRouter.post("/create-auction",auth,createNewAuction);
auctionRouter.get("/allAuctions",auth,getAllAuction);
auctionRouter.post("/:id/addPlayer",auth,addPlayerInAuction);
auctionRouter.post("/:id/removePlayer",auth,removePlayerFromAuction);

export default auctionRouter;