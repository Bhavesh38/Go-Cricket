import React, { useState } from 'react'
import Navbar from '../navbar/Navbar';
import AuctionTypes from './AuctionTypes';
import { useNavigate } from 'react-router-dom';

const Auction = () => {
  const navigate=useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("goSportsProfile")));

  if(!user) navigate("/signin")

  return (
    <div>
      <Navbar />
      <AuctionTypes/>
    </div>
  )
}

export default Auction
