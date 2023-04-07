import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getScoreCard } from '../../actions/matchActions';
import Navbar from '../Navbar/Navbar';

const ScoreCard = () => {
    const dispatch=useDispatch();
    const {matchId,fullMatchScoreCard}=useSelector((state)=>state.matchSlice);
    useEffect(() => {
        // dispatch(getScoreCard(matchId));
    },[matchId]);

    console.log(fullMatchScoreCard);
  return (
    <>
    <Navbar/>
    <div>
      <div className='w-full'>
        <p className='font-bold'>{fullMatchScoreCard?.name}</p>
        <div className='flex justify-between '>
          <span><strong >Series:</strong>IPL, 2023</span>
          <span><strong>Venue:</strong>{fullMatchScoreCard?.venue}</span>
          <span><strong>Date & Time:</strong>{fullMatchScoreCard?.date} - {fullMatchScoreCard?.dateTimeGMT}</span>
        </div>
      </div>
      <p>{fullMatchScoreCard?.tossWinner} won the toss and elected to {fullMatchScoreCard?.tossChoice} first.</p>
      <p>{fullMatchScoreCard?.status}.</p>
      <div className='flex border-b-[1px]'>
        <span className='text-[#408edc] ml-2 cursor-pointer hover:text-[#666666] hover:border-b-[2px] hover:border-b-[#666666]'>Scorecard</span>
        <span className='text-[#408edc] ml-2 cursor-pointer hover:text-[#666666] hover:border-b-[2px] hover:border-b-[#666666]'>Squads</span>
      </div>
    </div>
    </>
  )
}

export default ScoreCard
