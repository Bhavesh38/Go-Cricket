import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllAuctions } from '../../actions/auctionActions';
import AuctionCard from './AuctionCard';
import {GrFormAdd} from 'react-icons/gr';

const AllAuctions = () => {
    const dispatch=useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage?.getItem("goSportsProfile")));

    const {currentUserAuctions}=useSelector(state => state.auctionSlice);
    // console.log(currentUserAuctions);
    useEffect(() => {
        dispatch(getAllAuctions({auctions:user?.result?.auctions}))
    },[user])
    return (
    <div className='p-4'>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {
          currentUserAuctions?.map((auction)=>(
            <AuctionCard key={auction._id} auction={auction}/>
          ))
        }
      </div>
      
      <button className='fixed bottom-0 right-0 mr-8 mb-8 text-[#fff] bg-[#3cc147] rounded-2xl py-1 px-4 shadow-md hover:shadow-lg flex items-center text-xl'><GrFormAdd className='text-[#fff] font-bold mx-1 text-xl bg-[#fff] rounded-full'/> New Auction</button>
    </div>
  )
}

export default AllAuctions
