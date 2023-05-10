import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CreateAuctionPortal from './createAuction/CreateAuctionPortal';

const AuctionTypes = () => {
  const [createAuctionActive, setCreateAuctionActive] = useState(true);
  const [participateAuctionActive, setParticipateAuctionActive] = useState(false);
  return (
    <div className='flex bg-[#d2e5ed] font-semibold'>
        <span className='p-2 border-b-[2px] border-b-[#4565e4] bg-[#fff] cursor-pointer hover:bg-[#cecdcd]'>Participate In Auction</span>
        <span onClick={() => setCreateAuctionActive(true)} className='p-2 border-b-[2px] border-b-[#4565e4] cursor-pointer bg-[#fff] hover:bg-[#cecdcd]'>Create Auction</span>
        {
          createAuctionActive && (<CreateAuctionPortal setCreateAuctionActive={setCreateAuctionActive}/>)
        }
    </div>
  )
}

export default AuctionTypes
