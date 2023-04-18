import React from 'react'

const PlayerInAuction = () => {
  return (
    <div className='flex-[0.4] border-r-[2px] max-h-[90vh] overflow-y-scroll'>
        <h1 className='font-bold text-center my-2'>Registered Players</h1>
      <select className='w-full outline-none border-[1px] my-1 py-1 px-2 focus-within:shadow-xl'>
        <option value="batter">Batter</option>
        <option value="bowler">Bowler</option>
        <option value="all-rounder">All-Rounder</option>
        <option value="wicket-keeper">Wicket-Keeper</option>
        </select>
    </div>
  )
}

export default PlayerInAuction
