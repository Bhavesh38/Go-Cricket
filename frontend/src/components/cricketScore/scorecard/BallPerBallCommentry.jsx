import React, { useEffect } from 'react'
import Navbar from '../../Navbar/Navbar'
import MatchAbout from '../MatchAbout'
import CricketOptions from '../CricketOptions'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBallByBall } from '../../../actions/matchActions'

const BallPerBallCommentry = () => {
  const dispatch=useDispatch();
  const {id}=useParams();
  useEffect(()=>{
    dispatch(getBallByBall(id));
  },[id]);

  const {ballPerBallCommentry}=useSelector((state)=>state.matchSlice);
  // console.log(ballPerBallCommentry);


  return (
    <div>
      <Navbar/>
      <MatchAbout />
      <CricketOptions/>
      <div className='w-full md:w-[50%] mx-auto shadow-2xl shadow-[#949090] border-[1px] md:my-4 p-2 max-h-screen overflow-auto'>
        {
          ballPerBallCommentry?.bbb?.map((item,index)=>(
            <div className='flex items-center my-2'>
              <span className='rounded-full bg-[#454545] text-[#fff] p-1 mr-2'>{item?.over}.{item?.ball}</span>
              <span>{item?.bowler?.name} to {item?.batsman?.name} 
                <span className={`${item?.runs!==4 && item?.runs!==6 && "bg-[#696c6f]"} ${item?.runs===4 && "bg-[#3c8ce1]"} ${item?.runs===6 && "bg-[#ed39a5]"} ${item?.extras>0 && "bg-[#f05757]"} shadow mx-1 shadow-[#585858] rounded-full text-[#fff] px-1 font-semibold `}>{item?.runs}
                 </span>
                 {item?.extras>0 && <span className='bg-[#d7e44c]'> {item?.penalty}</span>}
              </span>
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default BallPerBallCommentry
