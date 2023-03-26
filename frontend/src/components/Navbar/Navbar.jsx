import React from "react"
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Navbar() {

    return (
        <div className="flex justify-between bg-[#335A7B] text-[#fff] p-2 items-center">
            <div className="flex">
                <div>
                    logo
                </div>
                {/* search box */}
                <div className="bg-[#fff] rounded-2xl px-4 py-1 ml-4">
                    <input placeholder="Search..." type='text' className="outline-none border-0 text-[#113D59]"/>
                    <SearchIcon className="text-[#113D59] "/>
                </div>
               
            </div>
            <div className="flex items-center">
                <span className="bg-[#fff] text-[#113D59] font-bold px-2 py-1 cursor-pointer hover:shadow-2xl mr-2 rounded-sm hover:bg-[#a2a2a2] hover:shadow-[#fff]">Home</span>
                <div className="flex bg-[#fff] text-[#113D59] font-bold px-2 py-1 cursor-pointer mr-2 rounded-sm items-center hover:bg-[#a2a2a2]">
                    <span  className="">Services</span>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="flex bg-[#fff] text-[#113D59] font-bold px-2 py-1 cursor-pointer mr-2 rounded-sm items-center hover:bg-[#a2a2a2]">
                    <span  className="">Matches</span>
                    <KeyboardArrowDownIcon/>
                </div>
                
                <span className="bg-[#fff] text-[#113D59] font-bold px-2 py-1 cursor-pointer  mr-2 rounded-sm hover:bg-[#a2a2a2]">Contact</span>
                <span className="bg-[#fff] text-[#113D59] font-bold px-2 py-1 cursor-pointer  mr-2 rounded-sm hover:bg-[#a2a2a2]">About</span>
                <span className="bg-[#fff] text-[#113D59] font-bold px-2 py-1 cursor-pointer  mr-2 rounded-sm hover:bg-[#a2a2a2]">SignUp</span>

            </div>
        </div>
    )
}