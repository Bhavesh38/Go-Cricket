import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar';
import AuctionTypes from './AuctionTypes';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AllAuctions from './AllAuctions';

const Auction = () => {
  const navigate=useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("goSportsProfile")));
  useEffect(() => {
    if(!user) navigate("/signin")
  },[user])
  
  const {auctions}=useSelector((state)=>state.auctionSlice)
  console.log(auctions);
  // console.log(user?.result?.auctions);

  return (
    <div>
      <Navbar />
      {/* <AuctionTypes/> */}
      <AllAuctions/>
    </div>
  )
}

export default Auction
