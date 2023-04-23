import React from 'react'

const BatterCard = ({batterDetails}) => {
  return (
    <tr className='px-4 border-b-[1px] hover:bg-[#d8d8d8]'>
        <td>{batterDetails?.batsman?.name}</td>
        <td>{batterDetails?.dismissal}</td>
        <td>{batterDetails?.r}</td>
        <td>{batterDetails?.b}</td>
        <td>{0}</td>
        <td>{0}</td>
        <td>{batterDetails?.sr}</td>
    </tr>
  )
}

export default BatterCard;
