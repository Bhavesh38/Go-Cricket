import React from 'react'
import { Link } from 'react-router-dom'

const AuctionTypes = () => {
  return (
    <div className='flex bg-[#d2e5ed] font-semibold'>
        <span className='p-2 border-b-[2px] border-b-[#4565e4] bg-[#fff] cursor-pointer hover:bg-[#cecdcd]'>Participate In Auction</span>
        <Link to="/auction/create-auction" className='p-2 border-b-[2px] border-b-[#4565e4] cursor-pointer bg-[#fff] hover:bg-[#cecdcd]'>Create Auction</Link>
    </div>
  )
}

export default AuctionTypes
