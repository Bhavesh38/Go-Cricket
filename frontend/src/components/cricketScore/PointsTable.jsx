import React from 'react'
import Navbar from '../Navbar/Navbar'
import CricketOptions from './CricketOptions'
import MatchAbout from './MatchAbout'
import PointsTableColumn from './PointsTableColumn'

const PointsTable = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex justify-between mx-auto bg-[#c2eef6] py-2 px-8'>
        <p className='font-semibold'>Indian Premier League 2023</p>
        <PointsTableColumn/>
      </div>
      <table className='w-full text-left px-2'>
        <tr className='w-full px-2'>
            <th className='border-b-[1px] border-[#d9d9d9]'>Team</th>
            <th className='border-b-[1px] border-[#d9d9d9]'>Matches</th>
            <th className='border-b-[1px] border-[#d9d9d9]'>Won</th>
            <th className='border-b-[1px] border-[#d9d9d9]'>Lost</th>
            <th className='border-b-[1px] border-[#d9d9d9]'>Tied</th>
            <th className='border-b-[1px] border-[#d9d9d9]'>No Result</th>
            <th className='border-b-[1px] border-[#d9d9d9]'>Points</th>
            <th className='border-b-[1px] border-[#d9d9d9]'>NRR</th>

        </tr>
        <tr className='w-full px-2'>
            <td className='border-b-[1px] border-[#d9d9d9]'>Mumbai Indians</td>
            <td className='border-b-[1px] border-[#d9d9d9]'>14</td>
            <td className='border-b-[1px] border-[#d9d9d9]'>10</td>
            <td className='border-b-[1px] border-[#d9d9d9]'>4</td>
            <td className='border-b-[1px] border-[#d9d9d9]'>0</td>
            <td className='border-b-[1px] border-[#d9d9d9]'>0</td>
            <td className='border-b-[1px] border-[#d9d9d9]'>20</td>
            <td className='border-b-[1px] border-[#d9d9d9]'>+0.500</td>
        </tr>
      </table>
      
    </div>
  )
}

export default PointsTable
