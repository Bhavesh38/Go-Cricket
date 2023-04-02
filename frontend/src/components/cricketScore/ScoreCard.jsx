import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getScoreCard } from '../../actions/matchActions';
import Navbar from '../Navbar/Navbar';

const ScoreCard = () => {
    const dispatch=useDispatch();
    const {matchId}=useSelector((state)=>state.matchSlice);
    useEffect(() => {
        // dispatch(getScoreCard(matchId));
    },[]);
  return (
    <>
    <Navbar/>
      scorecard
    </>
  )
}

export default ScoreCard
