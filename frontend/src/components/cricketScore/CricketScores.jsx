import React, { useEffect } from 'react'
import CricketScoreCard from './CricketScoreCard';
import {useDispatch, useSelector} from 'react-redux';
import { getCurrentMatches } from '../../actions/matchActions';
import Navbar from '../Navbar/Navbar';

const CricketScores = () => {
  const dispatch=useDispatch();

  const {currentMatches} = useSelector((state) => state.matchSlice);
  // console.log(currentMatches);
  useEffect( ()=>{
    // dispatch(getCurrentMatches());
    
  },[])
  return (
    <>
    <Navbar/>
    <div className='flex  w-[100%] overflow-x-scroll px-4 bg-[#596675] scrollbar-thin'>
      {
        currentMatches?.map((match,index)=>(
          <CricketScoreCard key={index} match={match} />
        ))
      }
    </div>
    </>
  )
}

export default CricketScores
