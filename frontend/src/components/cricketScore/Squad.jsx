import React from 'react'
import Navbar from '../Navbar/Navbar'
import CricketOptions from './CricketOptions'
import MatchAbout from './MatchAbout'

const Squad = () => {
  return (
    <>
      <Navbar/>
      <MatchAbout/>
      <CricketOptions/>
      <div className='w-[80%] mx-auto shadow-xl shadow-[#b0afaf] my-4 border-[1px]'>
        <div className='flex justify-between px-4 py-2 m-2 rounded-[5px] bg-[#cae8f2]'>
            <strong>LSG</strong>
            <strong>KXIP</strong>
        </div>
        <div className='w-full'>
            <p className='w-full text-center font-bold my-2'>Playing XI</p>
            <div className='flex justify-between items-center text-left border-[1px]'>
                <div className='flex-[0.5] flex items-center border-[1px]'>
                    <img src="https://www.cricbuzz.com/a/img/v1/40x40/i1/c244975/player_face.jpg" alt="png" className='w-14 h-14 rounded-full p-2'/>
                    <div className='ml-2'>
                        <span className='block'>KL Rahul (C)</span>
                        <span className='block'>WK-Batter</span>
                    </div>
                </div>
                <div className='flex-[0.5] flex items-center border-[1px]'>
                    <img src="https://www.cricbuzz.com/a/img/v1/40x40/i1/c244975/player_face.jpg" alt="png" className='w-14 h-14 rounded-full p-2'/>
                    <div className='ml-2'>
                        <span className='block'>KL Rahul (C)</span>
                        <span className='block'>WK-Batter</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Squad
