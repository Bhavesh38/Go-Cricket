import React, { useEffect } from 'react'
import CricketScoreCard from './CricketScoreCard';
import {useDispatch, useSelector} from 'react-redux';
import { getCurrentMatches } from '../../actions/matchActions';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import Article from '../home/articles/Article';

const CricketScores = () => {
  const dispatch=useDispatch();

  const {currentMatches,IPLMatches} = useSelector((state) => state.matchSlice);
  // console.log(currentMatches);
  // console.log(IPLMatches);
  useEffect( ()=>{
    dispatch(getCurrentMatches());
    
  },[])
  const {articles}=useSelector(state=>state.articleSlice);
  return (
    <>
    <Navbar/>
    <div className='flex  w-[100%] overflow-x-scroll px-4 bg-[#596675] scrollbar-thin'>
      {
        IPLMatches?.map((match,index)=>(
          <CricketScoreCard key={index} match={match} />
        ))
      }
      {
        currentMatches?.map((match,index)=>(
          <CricketScoreCard key={index} match={match} />
        ))
      }
    </div>
    {
          articles?.map((article,index)=>(
            <Article key={index} article={article}/>
          ))
        }
    </>
  )
}

export default CricketScores
