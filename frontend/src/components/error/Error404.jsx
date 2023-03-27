import React from 'react'
import {Link} from "react-router-dom"
const Error404 = () => {
  return (
    <div className='mt-[20%] mx-auto text-center'>
        <span className='block mb-2'>Page Doesn't exist. Error 404!</span>
        <Link to="/" className='bg-[#349bcf] px-2 py-1 shadow-2xl mt-2 shadow-[#5b5b5b] rounded-sm hover:bg-[#1bb3ff]'>Home</Link>
    </div>
  )
}

export default Error404
