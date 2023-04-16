import React from 'react'
import Navbar from '../../Navbar/Navbar'
import MatchAbout from '../MatchAbout'
import CricketOptions from '../CricketOptions'

const BallPerBallCommentry = () => {
  return (
    <div>
      <Navbar/>
      <MatchAbout />
      <CricketOptions/>
      <div className='w-full md:w-[50%] mx-auto shadow-2xl shadow-[#949090] border-[1px] md:my-4 p-2'>
        <div className='flex items-center my-2'>
            <span className='rounded-full bg-[#454545] text-[#fff] p-1 mr-2'>0.1</span>
            <span>Renuka Thakur Singh to Alyssa Healy <span className='bg-[#3c8ce1] shadow-lg shadow-[#585858] rounded-full text-[#fff] px-1 font-semibold'>4</span>.</span>
        </div>
        <div className='flex items-center my-2'>
            <span className='rounded-full bg-[#454545] text-[#fff] p-1 mr-2'>0.1</span>
            <p>Renuka Thakur Singh to Alyssa Healy <span className='bg-[#3c8ce1] shadow-lg shadow-[#585858] rounded-full text-[#fff] px-1 font-semibold'>4</span>.</p>
        </div>
      </div>
    </div>
  )
}

export default BallPerBallCommentry
