import React from 'react'
import BatterCard from './BatterCard'
import ExtrasCard from './ExtrasCard'
import BowlingDetails from './BowlingDetails'

const FullScore = () => {
  return (
    <div className='w-full'>
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
            <BatterCard/>
            <BatterCard/>
            <BatterCard/>
            <BatterCard/>
            <BatterCard/>
            <BatterCard/>
            <BatterCard/>
            <BatterCard/>
        </table>
        <div className='pl-4 border-b-[1px]'>
            <span>Did not bat:</span>
            <span className='mx-2'>Awesh Khan, Mark Wood</span>
        </div>
        <ExtrasCard/>
        <div>
            <span className='pl-4'>Total:</span>
            <span className='mx-2'>200/8(20)</span>
        </div>
        <BowlingDetails/>
    </div>
  )
}

export default FullScore
