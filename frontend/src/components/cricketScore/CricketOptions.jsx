import React from 'react'

const CricketOptions = () => {
  return (
    <div className='flex border-b-[1px]'>
        <span className='text-[#408edc] ml-2 cursor-pointer hover:text-[#666666] hover:border-b-[2px] hover:border-b-[#666666] border-b-[2px] border-b-[#1892dd] mx-4'>Scorecard</span>
        <span className='text-[#54a2f0] ml-2 cursor-pointer hover:text-[#666666] hover:border-b-[2px] hover:border-b-[#666666] mx-4'>Squads</span>
        <span className='text-[#408edc] ml-2 cursor-pointer hover:text-[#666666] hover:border-b-[2px] hover:border-b-[#666666] border-b-[2px] border-b-[#1892dd] mx-4'>Ball-by-Ball</span>
        <span className='text-[#54a2f0] ml-2 cursor-pointer hover:text-[#666666] hover:border-b-[2px] hover:border-b-[#666666] mx-4'>Articles</span>
        <span className='text-[#54a2f0] ml-2 cursor-pointer hover:text-[#666666] hover:border-b-[2px] hover:border-b-[#666666] mx-4'>Point Table</span>
        <span className='text-[#54a2f0] ml-2 cursor-pointer hover:text-[#666666] hover:border-b-[2px] hover:border-b-[#666666] mx-4'>Stats</span>
    </div>
  )
}

export default CricketOptions
