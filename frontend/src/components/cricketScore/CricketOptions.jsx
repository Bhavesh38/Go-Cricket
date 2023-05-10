import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CricketOptions = () => {
  const {matchId,seriesId}=useSelector((state)=>state.matchSlice);
  return (
    <div className='flex border-b-[1px]'>
        <Link to={`/cricket/scorecard/${matchId}`} className='text-[#408edc] ml-2 cursor-pointer hover:text-[#666666] hover:border-b-[2px] hover:border-b-[#666666] border-b-[2px] border-b-[#1892dd] mx-4'>Scorecard</Link>
        <Link to={`/cricket/squad/${matchId}`}  className='text-[#54a2f0] ml-2 cursor-pointer hover:text-[#666666] hover:border-b-[2px] hover:border-b-[#666666] mx-4'>Squads</Link>
        <Link to={`/cricket/ball-by-ball/${matchId}`} className='text-[#408edc] ml-2 cursor-pointer hover:text-[#666666] hover:border-b-[2px] hover:border-b-[#666666] border-b-[2px] border-b-[#1892dd] mx-4'>Ball-by-Ball</Link>
        <span className='text-[#54a2f0] ml-2 cursor-pointer hover:text-[#666666] hover:border-b-[2px] hover:border-b-[#666666] mx-4'>Articles</span>
        <Link to={`/cricket/points-table/${seriesId}`} className='text-[#54a2f0] ml-2 cursor-pointer hover:text-[#666666] hover:border-b-[2px] hover:border-b-[#666666] mx-4'>Point Table</Link>
        <span className='text-[#54a2f0] ml-2 cursor-pointer hover:text-[#666666] hover:border-b-[2px] hover:border-b-[#666666] mx-4'>Stats</span>
    </div>
  )
}

export default CricketOptions
