import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import GoogleLoginSignup from './GoogleLoginSignup'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signIn } from '../../actions/authActions';
import { Button, notification, Space } from 'antd';

const Signin = () => {

  const dispatch=useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("goSportsProfile")));
  // console.log(user);
  if(user?.token){
    window.location.href='/';
  }
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value 
    });
  }

  const handleSubmit =async (e) => {
    e.preventDefault();
    // console.log(formData);
    const response=await dispatch(signIn(formData));
    console.log(response);
    if(response?.status===200){
      openNotificationWithIcon('success');
      window.location.href='/';
    }else{
      openNotificationWithIcon('error');
    }
    
  }


  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: type==='success'?'Login Successfull':'Login Failed please try again later'
  })};


  return (
    <div className='bg-[#e8e5e5] pb-8'>
      <Navbar/>
      {contextHolder}
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

        <form className='text-left' onSubmit={handleSubmit}>
            <div className='w-full my-2'>
                <label htmlFor="email" className='w-full font-semibold'> Email*</label>
                <input required id="email" type="email" placeholder='email eg. abc@gmail.com' name="email"  className='w-full outline-none border-[1px] my-1 py-1 px-2 focus-within:shadow-xl' value={formData.email} onChange={handleChange}/>
            </div>
            <div className='w-full my-2'>
                <label htmlFor="password" className='w-full font-semibold'> Password*</label>
                <input required id="password" type="password" placeholder='Password (must be atleast 6 char.)' name="password"  className='w-full outline-none border-[1px] my-1 py-1 px-2 focus-within:shadow-xl' value={formData.password} onChange={handleChange}/>
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
