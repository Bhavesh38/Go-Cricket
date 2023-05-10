import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import {AiFillCloseCircle} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { createNewAuction } from '../../../actions/auctionActions';
import { useDispatch } from 'react-redux';

const CreateAuctionPortal = ({setCreateAuctionActive}) => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage?.getItem("goSportsProfile")));
    
    if(!user) navigate("/signin");

    // console.log("user",user);
    const [formData,setFormData]=useState({
        auctionName:"",
        auctionDescription:"",
        auctionCreator:user?.result?.email
    });

    const handleClick=async (e) => {
        e.preventDefault();
        // console.log("formData",formData);
        const response=await dispatch(createNewAuction(formData));
        console.log(response);
        if(response?.status===200) {
            setCreateAuctionActive(false);
        }
    }
  return createPortal(
    <div className='fixed w-full top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.5)]'>
      <div className='mx-auto w-full md:w-[50%] mt-[10%] bg-[#fff] rounded'>
        <span className='w-full block  text-right'>
            <AiFillCloseCircle onClick={() => setCreateAuctionActive(false)} className='text-[#e76060] hover:text-[#fc4e4e] cursor-pointer block text-right text-[1.5rem] float-right'/>
        </span>
        <form className='my-2 p-2' onSubmit={handleClick}>
            <label className='block text-[#4565e4] font-semibold'>Auction Name*</label>
            <input required onChange={(e) => setFormData({...formData,auctionName:e.target.value})} className='w-full border-[1px] border-[#4565e4] rounded p-1 my-1 outline-none' type="text" placeholder='Enter Auction Name' />
            <label className='block text-[#4565e4] font-semibold'>Auction Description*</label>
            <textarea required onChange={(e) => setFormData({...formData,auctionDescription:e.target.value})} className='w-full border-[1px] border-[#4565e4] rounded p-2 outline-none' type="text" placeholder='Enter Auction Description' />
            <button type="submit" className='w-full bg-[#4565e4] text-[#fff] font-semibold p-2 rounded mt-2'>Create Auction</button>
        </form>
      </div>
    </div>,document.getElementById("portal")
  )
}

export default CreateAuctionPortal
