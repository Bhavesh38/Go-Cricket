import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { setMatchId } from '../../redux/matchSlice';
// e49e70f2-437b-4395-b267-bf81546b740d
const CricketScoreCard = ({match}) => {
    // console.log(match);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const handleClick = () => {
        // () => dispatch(setMatchId(match?.id))
        navigate(`/cricket/scorecard/${match.id}`,{replace:true});
    }
  return (
    <div className='relative flex-shrink-0 h-[150px] sm:w-1/3 md:w-1/4 bg-[#fdfdfd] m-2 my-4 rounded-sm shadow-xl shadow-[#686868]'>
        <div className='p-2' onClick={handleClick}>
            <div className='flex justify-between items-center my-auto'>
                {/* <span>3rd T20</span>
                <span>WI Tour of RSA</span> */}
                <span></span>
                <strong className={`${match?.matchType==="odi" && "bg-[#5065ef]"} ${match?.matchType==="t20" && "bg-[#ed36cb]"} ${match?.matchType==="test" && "bg-[#272727]"} text-[#fff] rounded-2xl px-2 text-[12px] float-right`}>{match?.matchType?.toUpperCase()}</strong>
            </div>
            <div className='my-auto'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src={match?.teamInfo[0]?.img} alt="" className='w-5 h-5' />
                        <span>{match?.teamInfo[0].name}</span>
                    </div>
                    <strong>{match.score[0]?.inning?.includes(match?.teamInfo[0]?.name) && `${match.score[0].r}-${match?.score[0]?.w}(${match?.score[0]?.o})`} {match?.score[1]?.inning.includes(match?.teamInfo[0]?.name) && `${match?.score[1]?.r}-${match?.score[1]?.w}(${match?.score[1]?.o})`}</strong>
                 
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src={match?.teamInfo[1]?.img} alt="" className='w-5 h-5' />
                        <span>{match?.teamInfo[1]?.name}</span>
                    </div>
                    <strong>{match?.score[0]?.inning?.includes(match?.teamInfo[1]?.name) && `${match.score[0].r}-${match?.score[0]?.w}(${match?.score[0]?.o})`} {match?.score[1]?.inning.includes(match?.teamInfo[1]?.name) && `${match?.score[1]?.r}-${match?.score[1]?.w}(${match?.score[1]?.o})`}</strong>
                </div>
            </div>
            <span className='my-auto text-[#ea9595]'>{match?.status}.</span>
        </div>
        <div className='absolute flex justify-between bg-[#327ab6] px-2 w-full text-end float-right bottom-0'>
            <span></span>
            <span className='float-right text-end text-[#ffffff] cursor-pointer hover:text-[#d8d8d8]'>More Matches</span>
        </div>
    </div>
  )
}

export default CricketScoreCard
