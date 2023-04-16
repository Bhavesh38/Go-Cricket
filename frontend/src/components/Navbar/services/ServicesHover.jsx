import React from 'react'
import { Link } from 'react-router-dom'

const ServicesHover = () => {
  return (
      <div className="z-10 w-72 absolute top-8 bg-[#fff] border-[2px] shadow-2xl shadow-[#757575] duration-1000 transition-all">
        <div className='flex border-y-[2px] p-2 hover:bg-[#e7e7e7] items-center'>
          <img className='w-20 rounded mr-2  shadow-lg shadow-[#797979]' src="https://tse4.mm.bing.net/th?id=OIP.PGRMBBL_bdz1Fou6sF4FFgHaFj&pid=Api&P=0" al="cricket.png"/>
          <Link to="/football">
            <h3>Football</h3>
            <p className='text-[#5e5e5e] text-[0.7rem]'>Watch Football live matches & scores, schedule matches and create auctions.</p>
          </Link>
        </div>
        <div className='flex items-center border-y-[2px] p-2 hover:bg-[#e7e7e7]'>
          <img className='w-20 rounded mr-2  shadow-lg shadow-[#797979]' src="https://tse2.mm.bing.net/th?id=OIP.s2s2eHdYaHlQQgUYCI3HywHaE6&pid=Api&P=0" al="cricket.png"/>
          <Link to="/cricket">
            <h3>Cricket</h3>
            <p className='text-[#5e5e5e] text-[0.7rem]'>Watch Cricket live matches & scores, schedule matches and create auctions.</p>
          
          </Link>
        </div>
        <div className='flex items-start border-y-[2px] p-2 hover:bg-[#e7e7e7]'>
          <img className='w-20 rounded mr-2 shadow-lg shadow-[#797979]' src="https://tse2.mm.bing.net/th?id=OIP.DFuciBqWMIri06scjTCsnQHaHa&pid=Api&P=0" al="cricket.png"/>
          <div>
            <h3>Watch Live</h3>
            <p className='text-[#5e5e5e] text-[0.7rem]'>Watch Live matches.</p>
          
          </div>
        </div>
        <Link to="/auction" className='flex items-start border-y-[2px] p-2 hover:bg-[#e7e7e7]'>
          <img className='w-20 rounded  mr-2 shadow-lg shadow-[#797979]' src="https://tse2.mm.bing.net/th?id=OIP.ava7MZX4spO9EEtNWhYv3AHaE8&pid=Api&P=0" al="cricket.png"/>
          <div>
            <h3>Auction</h3>
            <p className='text-[#5e5e5e] text-[0.7rem]'>Setup virtual Auction.</p>
          </div>
        </Link>
        <div className='flex items-start border-y-[2px] p-2 hover:bg-[#e7e7e7]'>
          <img className='w-20 rounded  mr-2 shadow-lg shadow-[#797979]' src="https://thumbs.dreamstime.com/z/cricket-match-schedule-participant-countries-second-round-golden-winning-trophy-names-stadium-background-66869270.jpg" al="cricket.png"/>
          <div>
            <h3>Schedule Match</h3>
            <p className='text-[#5e5e5e] text-[0.7rem]'>Schedule your matches.</p>
          </div>
        </div>
      </div>
  )
}

export default ServicesHover
