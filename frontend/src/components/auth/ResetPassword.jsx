import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'

const ResetPassword = () => {
    const [otpSentSuccefully,setOtpSentSuccefully]=useState(false)
  return (
    <div className='bg-[#e8e5e5] pb-8'>
      <Navbar/>
      <div className='w-full sm:w-1/2 mx-auto bg-[#fff] p-1 sm:p-4 sm:shadow-lg sm:shadow-[#d7d4d4] sm:mt-[7%] border-[1px] border-[#cae8f2] text-center'>
        <h2 className='font-bold  text-[1.5rem] border-b-[1px]'>Reset Password</h2>
        <form className='text-left'>
            <div className='w-full my-2'>
                <label htmlFor="email" className='w-full font-semibold'> Email*</label>
                <input required id="email" type="email" placeholder='email eg. abc@gmail.com' name="email"  className='w-full outline-none border-[1px] my-1 py-1 px-2 focus-within:shadow-xl' />
            </div>
            {
                otpSentSuccefully && (
                    <>
                    <div className='w-full my-2'>
                        <label htmlFor="otp" className='w-full font-semibold'>OTP*</label>
                        <input required id="otp" type="number" placeholder='OTP (must be of len. 6)' name="password"  className='w-full outline-none border-[1px] my-1 py-1 px-2 focus-within:shadow-xl' />
                    </div>
                    <div className='w-full my-2'>
                        <label htmlFor="password" className='w-full font-semibold'> Password*</label>
                        <input required id="password" type="password" placeholder='Password (must be atleast 6 char.)' name="password"  className='w-full outline-none border-[1px] my-1 py-1 px-2 focus-within:shadow-xl' />
                    </div>
                    <div className='w-full my-2'>
                        <label htmlFor="confirmPassword" className='w-full font-semibold'>Confirm Password*</label>
                        <input required id="confirmPassword" type="password" placeholder='Password (must be atleast 6 char.)' name="password"  className='w-full outline-none border-[1px] my-1 py-1 px-2 focus-within:shadow-xl' />
                    </div>
                    </>
                )
            }
            
            {otpSentSuccefully ? <button type='submit' className='w-full bg-[#0d6efd] hover:bg-[#3a80e8] text-[#fff] py-1 rounded my-2'>Sign In</button> : <button type='submit' className='w-full bg-[#0d6efd] hover:bg-[#3a80e8] text-[#fff] py-1 rounded my-2'>Sent OTP</button> }
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
