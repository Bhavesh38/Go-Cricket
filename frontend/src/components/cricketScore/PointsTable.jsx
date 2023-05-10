import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import CricketOptions from './CricketOptions'
import MatchAbout from './MatchAbout'
import PointsTableColumn from './PointsTableColumn'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPointsTable } from '../../actions/matchActions'

const PointsTable = () => {
  const dispatch=useDispatch();
  const {id}=useParams();
  useEffect(() => {
    dispatch(getPointsTable(id))
  },[id]);

  const {pointsTable}=useSelector(state => state.matchSlice);
  // console.log(pointsTable);

  return (
    <div>
      <Navbar/>
      <CricketOptions/>
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
        {
          pointsTable?.map((item,index) => (
            <tr className='w-full px-2'>
              <td className='border-b-[1px] border-[#d9d9d9]'>{item?.teamname}</td>
              <td className='border-b-[1px] border-[#d9d9d9]'>{item?.matches}</td>
              <td className='border-b-[1px] border-[#d9d9d9]'>{item?.wins}</td>
              <td className='border-b-[1px] border-[#d9d9d9]'>{item?.loss}</td>
              <td className='border-b-[1px] border-[#d9d9d9]'>{item?.ties}</td>
              <td className='border-b-[1px] border-[#d9d9d9]'>{item?.nr}</td>
              <td className='border-b-[1px] border-[#d9d9d9]'>{item?.wins*2 + item?.ties*1 + item?.nr*1}</td>
              <td className='border-b-[1px] border-[#d9d9d9]'>NA</td>
          </tr>
          ))
        }
        
      </table>
      
    </div>
  )
}

export default PointsTable
