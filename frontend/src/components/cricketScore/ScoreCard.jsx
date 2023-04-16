import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getScoreCard } from '../../actions/matchActions';
import Navbar from '../Navbar/Navbar';
import FullScore from './scorecard/FullScore';
import CricketOptions from './CricketOptions';
import MatchAbout from './MatchAbout';
import { useParams } from 'react-router-dom';

const ScoreCard = () => {
    const dispatch=useDispatch();
    const {matchId,fullMatchScoreCard}=useSelector((state)=>state.matchSlice);
    const {id} = useParams();
    console.log(id);
    useEffect(() => {
        dispatch(getScoreCard(id));
    },[id]);

    console.log(fullMatchScoreCard);
  return (
    <>
    <Navbar/>
    <div className='w-full'>
      <MatchAbout/>
      <CricketOptions/>
      <FullScore/>
    </div>
    </>
  )
}

export default ScoreCard
