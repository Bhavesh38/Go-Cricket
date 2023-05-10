import React from 'react'

const Profile = () => {
  return (
    <div className='absolute top-7 right-0 bg-[#b4b2b2] text-[#2e2d2d] p-2'>
      <span className='font-medium cursor-pointer hover:text-[#020202]' onClick={() => {
        localStorage.setItem("goSportsProfile", JSON.stringify(""));
        window.location.reload();
        }}>Logout</span>
    </div>
  )
}

export default Profile
