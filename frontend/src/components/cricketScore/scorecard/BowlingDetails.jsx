import React from 'react'

const BowlingDetails = ({bowling}) => {
  return (
    <div className='w-full px-4 mb-4'>
      <table className='w-full text-left px-4'>
        <tr className='bg-[#ebeaea] px-4 w-full border-b-[1px]'>
            <th>Bowler</th>
            <th>O</th>
            <th>M</th>
            <th>R</th>
            <th>W</th>
            <th>Wd</th>
            <th>Nb</th>
            <th>Econ</th>
        </tr>
        {
            bowling?.map((bowler,bowlerIndex) => (
                <tr className='hover:bg-[#dcdbdb] px-4 border-b-[1px]' key={bowlerIndex}>
                    <td >{bowler?.bowler?.name}</td>
                    <td>{bowler?.o}</td>
                    <td>{bowler?.m}</td>
                    <td>{bowler?.r}</td>
                    <td>{bowler?.w}</td>
                    <td>{bowler?.wd}</td>
                    <td>{bowler?.nb}</td>
                    <td>{bowler?.eco}</td>
                </tr>
            ))
        }
      </table>
    </div>
  )
}

export default BowlingDetails
