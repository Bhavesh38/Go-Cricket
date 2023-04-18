import React from 'react'
import BatterCard from './BatterCard'
import ExtrasCard from './ExtrasCard'
import BowlingDetails from './BowlingDetails'
import { useSelector } from 'react-redux'

const FullScore = () => {
    const {matchId,fullMatchScoreCard}=useSelector((state)=>state.matchSlice);
  return (
    <>
    {
        fullMatchScoreCard?.scorecard?.map((item,index) => (
            <div className='w-full' key={index}>
                <div className='flex justify-between px-4 py-1 bg-[#969494] font-semibold'>
                    <span className='pl-4'>{item?.inning}</span>
                    <span>{item?.totals?.R}-{item?.totals?.W}({item?.totals?.O})</span>
                </div>
                <table className='w-full text-center'>
                    <tr className='px-4 border-b-[1px] bg-[#ebeaea]'>
                        <th>Batter</th>
                        <th>Dissmisal</th>
                        <th>R</th>
                        <th>B</th>
                        <th>4's</th>
                        <th>6's</th>
                        <th>SR's</th>
                    </tr>
                    {
                        item?.batting?.map((batter,batterIndex) =>
                            <BatterCard batterDetails={batter} key={batterIndex}/>
                        )
                    }
                </table>
                <div className='pl-4 border-b-[1px]'>
                    <span>Did not bat:</span>
                    <span className='mx-2'>Awesh Khan, Mark Wood</span>
                </div>
                <ExtrasCard extras={item?.extras}/>
                <div>
                    <span className='pl-4'>Total:</span>
                    <span className='mx-2'>200/8(20)</span>
                </div>
                <BowlingDetails bowling={item?.bowling}/>
            </div>
        ))
    
    }
    </>
  )
}

export default FullScore
