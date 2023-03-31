import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/home/Home';
import Error404 from './components/error/Error404';
import ScoreCard from './components/cricketScore/ScoreCard';

export default function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cricket/scorecard" element={<ScoreCard/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  )
}