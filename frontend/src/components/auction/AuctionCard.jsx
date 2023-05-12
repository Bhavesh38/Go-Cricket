import React from 'react';
import {FaDotCircle} from 'react-icons/fa';

const AuctionCard = ({auction}) => {
    // console.log(auction);
  return (
    <div className='border-[1px] rounded-xl py-2 px-4 w-fit bg-[#335A7B] text-[#fff]'>
        <div className='flex justify-between'>
            <div>
                <h3 className='font-bold'>{auction?.auctionName}</h3>
                <p>{auction?.auctionDescription}</p>
            </div>
            <FaDotCircle className='inline-block text-[#4ee93f] bg-[#fff] rounded-full animate-pulse text-xl'/>
        </div>
        <div className='flex justify-between gap-2 mt-2 '>
            <span className='bg-[#fff] rounded-xl border-[1px] text-[#335A7B] px-2 font-semibold cursor-pointer hover:bg-[#e4e4e4]'>Start Auction</span>
            <span className='bg-[#fff] rounded-xl border-[1px] text-[#335A7B] px-2 font-semibold cursor-pointer hover:bg-[#e4e4e4]'>Add Players</span>
        </div>
      
    </div>
  )
}

export default AuctionCard
