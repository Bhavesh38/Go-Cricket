import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/home/Home';
import Error404 from './components/error/Error404';
import ScoreCard from './components/cricketScore/ScoreCard';
import Football from './components/Football/Football';
import CricketScores from './components/cricketScore/CricketScores';
import Squad from './components/cricketScore/Squad';
import BallPerBallCommentry from './components/cricketScore/scorecard/BallPerBallCommentry';
import PointsTable from './components/cricketScore/PointsTable';
import Auction from './components/auction/Auction';
import CreateAuction from './components/auction/createAuction/CreateAuction';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import ResetPassword from './components/auth/ResetPassword';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>
        <Route path="/football" element={<Football/>}/>
        <Route path="/cricket" element={<CricketScores/>}/>
        <Route path="/cricket/scorecard/:id" element={<ScoreCard/>}/>
        <Route path="/cricket/squad/:id" element={<Squad/>}/>s
        <Route path="/cricket/ball-by-ball/:id" element={<BallPerBallCommentry/>}/>
        <Route path="/cricket/points-table/:id" element={<PointsTable/>}/>
        <Route path="/auction" element={<Auction/>}/>
        <Route path="/auction/create-auction" element={<CreateAuction/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  )
}