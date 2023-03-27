import React from 'react'

const MatchesHover = () => {
  return (
    <div className="w-36  absolute top-8 bg-[#fff] border-[2px] shadow-2xl shadow-[#757575] duration-1000 transition-all">
        <span className='block border-b-[1px] p-1 hover:bg-[#e7e7e7]'>Ongoing</span>
        <span className='block border-b-[1px] p-1 hover:bg-[#e7e7e7]'>Upcoming</span>
        <span className='block border-b-[1px] p-1 hover:bg-[#e7e7e7]'>Recently Ended</span>
    </div>
  )
}

export default MatchesHover
