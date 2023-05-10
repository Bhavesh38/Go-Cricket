import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import CricketOptions from './CricketOptions'
import MatchAbout from './MatchAbout'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSquad } from '../../actions/matchActions'

const Squad = () => {
  const dispatch=useDispatch();
  const {id}=useParams();
  const {squad}=useSelector(state=>state.matchSlice);
  console.log(squad);
  useEffect(()=>{
    dispatch(getSquad(id));
  },[id]);

  if(squad.length===0 ){
    return (
      <div>
        <Navbar/>
        <MatchAbout/>
        <CricketOptions/>
        <span>No Squad Found</span>
      </div>
    )
  }

  return (
    <>
      <Navbar/>
      <MatchAbout/>
      <CricketOptions/>
      <div className='w-[80%] mx-auto shadow-xl shadow-[#b0afaf] my-4 border-[1px]'>
        <div className='flex justify-between px-4 py-2 m-2 rounded-[5px] bg-[#cae8f2]'>
            <strong>{squad?.data[0]?.teamName}</strong>
            <strong>{squad?.data[1]?.teamName}</strong>
        </div>
        <div className='w-full'>
            <p className='w-full text-center font-bold my-2'>Playing XI</p>
            <div className='flex justify-between items-center text-left border-[1px]'>
                <div className='flex-[0.5] flex flex-col items-center border-[1px] text-left'>
                {
                  squad?.data[0]?.players?.map((player,index)=>(
                    <div className='text-left border-b-[1px] w-full flex gap-4'>
                      <img src={player?.playerImg} alt="png" className='w-14 h-14 rounded-full p-2'/>
                      <div className='ml-2'>
                          <span className='block font-semibold'>{player?.name}</span>
                          <span className='block'>{player?.role}</span>
                      </div>
                    </div>
                  ))
                }
                </div>
                <div className='flex-[0.5] flex flex-col items-center border-[1px] text-left'>
                {
                  squad?.data[1]?.players?.map((player,index)=>(
                    <div className='text-left border-b-[1px] w-full flex gap-4'>
                      <img src={player?.playerImg} alt="png" className='w-14 h-14 rounded-full p-2'/>
                      <div className='ml-2'>
                          <span className='block font-semibold'>{player?.name} </span>
                          <span className='block'>{player?.role}</span>
                      </div>
                    </div>
                  ))
                }
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Squad
