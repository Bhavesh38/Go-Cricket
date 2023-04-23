import React from 'react'
import Navbar from '../Navbar/Navbar'
import GoogleLoginSignup from './GoogleLoginSignup'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className='bg-[#e8e5e5] pb-8'>
      <Navbar/>
      <div className='w-full sm:w-1/2 mx-auto bg-[#fff] p-1 sm:p-4 sm:shadow-lg sm:shadow-[#d7d4d4] sm:mt-[7%] border-[1px] border-[#cae8f2] text-center'>
      <h2 className='font-bold  text-[1.5rem] border-b-[1px]'>Sign In.</h2>
        <h2 className='font-bold  text-[1.2rem] my-2'>Welcome, Guest!</h2>
        <p>Continue With Google or enter Details to Signin.</p>
        <GoogleLoginSignup/>
        <div className='flex justify-between items-center'>
            <hr />
            <span>or</span>
            <hr/>
        </div>

        <form className='text-left'>
            <div className='w-full my-2'>
                <label htmlFor="email" className='w-full font-semibold'> Email*</label>
                <input required id="email" type="email" placeholder='email eg. abc@gmail.com' name="email"  className='w-full outline-none border-[1px] my-1 py-1 px-2 focus-within:shadow-xl' />
            </div>
            <div className='w-full my-2'>
                <label htmlFor="password" className='w-full font-semibold'> Password*</label>
                <input required id="password" type="password" placeholder='Password (must be atleast 6 char.)' name="password"  className='w-full outline-none border-[1px] my-1 py-1 px-2 focus-within:shadow-xl' />
            </div>
            <div className='w-full my-2 block lg:flex lg:justify-between'>
                <div>
                    <input type="checkbox" name="remember" id="remember" className='mr-2'/>
                    <label htmlFor="remember" className='font-semibold'>Remember Me</label>
                </div>
                <Link to="/reset-password" className='text-[#0d6efd] hover:text-[#1371ff] hover:underline'>Forgot Password?</Link>
            </div>
            <button type='submit' className='w-full bg-[#0d6efd] hover:bg-[#3a80e8] text-[#fff] py-1 rounded my-2'>Sign In</button>
            <p className='text-[#202020]'>Don't have an account? <Link to="/signup" className='font-semibold text-[#0d6efd] hover:underline'>Sign Up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signin
