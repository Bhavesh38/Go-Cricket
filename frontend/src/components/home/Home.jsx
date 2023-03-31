import React, { useState } from 'react'
import CricketScores from '../cricketScore/CricketScores'
import Football from '../Football/Football'

const Home = () => {
    const [scoreCardTypeActiveness,setScoreCardTypeActiveness]=useState({
        cricket:true,
        football:false
    })
  return (
    <>
      <div className='border-b-[2px] p-2'>
        <span className={`rounded-xl py-[2px] px-[20px]  font-bold mr-2 border-[#568fe4]  border-[1px] ${scoreCardTypeActiveness.cricket ?  "bg-[#3974ce] text-[#fff]" : "text-[#568fe4] bg-[#fff]"} cursor-pointer`} onClick={() => {setScoreCardTypeActiveness({
            cricket:true,
            football:false
        })}}>Cricket</span>
        <span className={`rounded-xl py-[2px] px-[20px] text-[#568fe4] font-bold mr-2 border-[#568fe4] bg-[#fff] border-[1px] ${scoreCardTypeActiveness.football ?  "bg-[#3974ce] text-[#fff]" : "text-[#568fe4] bg-[#fff]"} cursor-pointer`} onClick={() => {setScoreCardTypeActiveness({
            cricket:false,
            football:true
        })}}>Football</span>
      </div>
      {scoreCardTypeActiveness.cricket && <CricketScores/>}
      {scoreCardTypeActiveness.football && <Football/>}
    </>
  )
}

export default Home
