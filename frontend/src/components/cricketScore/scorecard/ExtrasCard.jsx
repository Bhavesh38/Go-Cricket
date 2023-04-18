import React from 'react'

const ExtrasCard = ({extras}) => {
  return (
    <div className='px-4 border-b-[1px]'>
      <strong className='mr-4'>Extras:</strong>
      <span>{extras?.r} (b {extras?.b}, lb {extras?.lb}, w {extras?.w}, nb {extras?.nb}, p {extras?.p}, )</span>
    </div>
  )
}

export default ExtrasCard
