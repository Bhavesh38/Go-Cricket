import React from 'react'

const BowlingDetails = () => {
  return (
    <div className='w-full '>
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
        <tr className='hover:bg-[#dcdbdb] px-4 border-b-[1px]'>
            <td >Arshdeep Singh</td>
            <td>4</td>
            <td>0</td>
            <td>32</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>8.00</td>
        </tr>
      </table>
    </div>
  )
}

export default BowlingDetails
