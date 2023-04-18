import React from 'react'
import { useSelector } from 'react-redux';

const MatchAbout = () => {
    const {matchId,fullMatchScoreCard}=useSelector((state)=>state.matchSlice);
  return (
    <div className='w-full'>
      <div className='w-full'>
        <p className='font-bold'>{fullMatchScoreCard?.name}</p>
        <div className='flex justify-between '>
          <span><strong >Series:</strong>IPL, 2023</span>
          <span><strong>Venue:</strong>{fullMatchScoreCard?.venue}</span>
          <span><strong>Date & Time:</strong>{fullMatchScoreCard?.dateTimeGMT}</span>
        </div>
      </div>
      <p><strong>{fullMatchScoreCard?.tossWinner}</strong> won the toss and elected to <strong>{fullMatchScoreCard?.tossChoice}</strong> first.</p>
      <p className='font-semibold text-[#f17f7f]'>{fullMatchScoreCard?.status}.</p>
    </div>
  )
}

export default MatchAbout
