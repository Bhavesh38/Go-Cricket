import React, { useEffect, useState } from 'react'
import CricketScores from '../cricketScore/CricketScores'
import Football from '../Football/Football'
import Navbar from '../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getArticles } from '../../actions/articlesActions'
import Article from './articles/Article'

const Home = () => {
  const dispatch=useDispatch();
  const {articles}=useSelector(state=>state.articleSlice);
  // console.log(articles);
    const [scoreCardTypeActiveness,setScoreCardTypeActiveness]=useState({
        cricket:true,
        football:false
    })

    useEffect(() => {
      dispatch(getArticles('ipl'));
    },[]);
  return (
    <>
      <Navbar/>
      <div className='px-4'>
        {
          articles?.map((article,index)=>(
            <Article key={index} article={article}/>
          ))
        }
        {/* <Article/> */}
      </div>
    </>
  )
}

export default Home
