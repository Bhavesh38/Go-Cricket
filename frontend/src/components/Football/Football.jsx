import React, { useEffect } from 'react'
import axios from 'axios';
import { fetchFromFootballAPI } from '../../api/footballAPI';
import {useDispatch, useSelector} from 'react-redux';
import { setSerieA } from '../../redux/footballSlice';
import FootballTournamentCard from './FootballTournamentCard';
import Navbar from '../Navbar/Navbar';

const Football = () => {
  const dispatch=useDispatch();
  const {serieA} = useSelector((state) => state.footballSlice);
  console.log(serieA);
  // const options = {
  //   method: 'GET',
  //   url: 'https://footapi7.p.rapidapi.com/api/matches/live',
  //   headers: {
  //     'X-RapidAPI-Key': '32c062554dmshc19c4209fe934b9p1187d1jsn6849b81fed0f',
  //     'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
  //   }
  // };




  // import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://odds.p.rapidapi.com/v4/sports/americanfootball_nfl/scores',
//   params: {daysFrom: '3'},
//   headers: {
//     'X-RapidAPI-Key': '32c062554dmshc19c4209fe934b9p1187d1jsn6849b81fed0f',
//     'X-RapidAPI-Host': 'odds.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
  
  

  useEffect( () => {
    // axios.request(options).then(function (response) {
    //   dispatch(setSerieA(response.data));
      
    // }).catch(function (error) {
    //   console.error(error);
    // });
}, []);
  
  
  return (
    <>
    <Navbar/>
    <div className='flex  w-[100%] overflow-x-scroll px-4 bg-[#596675] scrollbar-thin'>
      <FootballTournamentCard/>
      <FootballTournamentCard/>
      <FootballTournamentCard/>
      <FootballTournamentCard/>
      <FootballTournamentCard/>
    </div>
    </>
  )
}

export default Football
