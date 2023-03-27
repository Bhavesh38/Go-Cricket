import React, { useState } from 'react'

const Home = () => {
    const [scoreCardTypeActiveness,setScoreCardTypeActiveness]=useState({
        cricket:true,
        football:false
    })
  return (
    <div className='border-b-[2px] p-2'>
      <span className={`rounded-xl py-[2px] px-[20px]  font-bold mr-2 border-[#568fe4] bg-[#fff] border-[1px] ${scoreCardTypeActiveness.cricket ?  "bg-[#5876a3] text-[#fff]" : "text-[#568fe4]"}`}>Cricket</span>
      <span className={`rounded-xl py-[2px] px-[20px] text-[#568fe4] font-bold mr-2 border-[#568fe4] bg-[#fff] border-[1px] ${scoreCardTypeActiveness.football && "bg-[#5876a3] text-[#fff]"}`}>Football</span>
    </div>
  )
}

export default Home
