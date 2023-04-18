import React from 'react'
import Navbar from '../../Navbar/Navbar'
import AuctionTypes from '../AuctionTypes'
import PlayerInAuction from './PlayerInAuction'
import AddPlayerInAuction from './AddPlayerInAuction'

const CreateAuction = () => {
  return (
    <div>
      <Navbar/>
      <AuctionTypes/>
      <div className='flex bg-[#bdbdbd]'>
        <PlayerInAuction/>
        <AddPlayerInAuction/>
      </div>
    </div>
  )
}

export default CreateAuction
