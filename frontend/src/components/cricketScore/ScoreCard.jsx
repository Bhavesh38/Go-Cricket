import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getScoreCard } from '../../actions/matchActions';

const ScoreCard = () => {
    const dispatch=useDispatch();
    const {matchId}=useSelector((state)=>state.matchSlice);
    useEffect(() => {
        dispatch(getScoreCard(matchId));
    },[]);
  return (
    <div>
      scorecard
    </div>
  )
}

export default ScoreCard
