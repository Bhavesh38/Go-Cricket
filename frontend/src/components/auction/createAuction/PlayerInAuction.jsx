import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const PlayerInAuction = () => {

  const {batters,bowlers,allrounders,wicketkeepers} = useSelector(state => state.auctionSlice);

  const [typeOfPlayer,setTypeOfPlayer] = useState('batter');
  const [playersArray,setPlayersArray] = useState([]);
  useEffect(() => {
    if(typeOfPlayer==='batter'){
      setPlayersArray(batters);
    }else if(typeOfPlayer==='bowler'){
      setPlayersArray(bowlers);
    }else if(typeOfPlayer==='all-rounder'){
      setPlayersArray(allrounders);
    }else if(typeOfPlayer==='wicket-keeper'){
       setPlayersArray(wicketkeepers);
    }
  },[typeOfPlayer])
  const handleChange = (e) => {
    setTypeOfPlayer(e.target.value);
  }
  return (
    <div className='flex-[0.4] border-r-[2px] max-h-[90vh] overflow-y-scroll'>
        <h1 className='font-bold text-center my-2'>Registered Players</h1>
        <select className='w-full outline-none border-[1px] my-1 py-1 px-2 focus-within:shadow-xl' name="typeOfPlayer" value={typeOfPlayer} onChange={handleChange}>
          <option value="batter">Batter</option>
          <option value="bowler">Bowler</option>
          <option value="all-rounder">All-Rounder</option>
          <option value="wicket-keeper">Wicket-Keeper</option>
        </select>
        <div className='w-full'>
          <table className='w-full text-center'>
            <tr className='w-full bg-[#fff]'>
              <th>Player Name(AFG)</th>
              <th>Country</th>
              <th>Player Price</th>
            </tr>
            {
              playersArray?.length>0 && playersArray?.map((item,index) => (
                <tr className='w-full bg-[#81c5e2] hover:bg-[#2da4df] border-b-[1px]' key={index}>
                  <td>{item?.playerName}</td>
                  <td>{item?.playerCountry}</td>
                  <td>{item?.playerBasePrize}</td>
                </tr>
              ))
            }
            
            
          </table>

        </div>
    </div>
  )
}

export default PlayerInAuction
