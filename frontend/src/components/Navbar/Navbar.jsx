import React, { useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ServicesHover from "./services/ServicesHover";
import MatchesHover from "./matches/MatchesHover";
import { Link } from "react-router-dom";
import Profile from "./Profile";

export default function Navbar() {

    const [navbarItemActiveness,setNavbarItemActiveness] = useState({
        services: false,
        matches: false,
    });
    const [user, setUser] = useState(JSON.parse(localStorage?.getItem("goSportsProfile")));
    // const user="";
    // console.log(user);

    const [showProfile,setShowProfile]=useState(false);

    const handleServicesClick = () => {
        setNavbarItemActiveness({
            matches:false,
            services: !navbarItemActiveness.services
        });
    }

    return (
        <div className=" w-full flex justify-between bg-[#335A7B] text-[#fff] p-2 items-center">
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
                <div className="relative flex bg-[#fff] text-[#113D59] font-bold px-2 py-1 cursor-pointer mr-2 rounded-sm items-center hover:bg-[#a2a2a2] duration-1000" onClick={handleServicesClick} onMouseEnter={() => {setNavbarItemActiveness({
            matches:false,
            services: true
        })}} onMouseLeave={() => {setNavbarItemActiveness({
            matches:false,
            services: false
        })}}>
                    <span  className="">Services</span>
                    <KeyboardArrowDownIcon/>
                    {
                        navbarItemActiveness.services && <ServicesHover/>
                    }
                   
                </div>
                <div className="relative flex bg-[#fff] text-[#113D59] font-bold px-2 py-1 cursor-pointer mr-2 rounded-sm items-center hover:bg-[#a2a2a2]" 
                onMouseEnter={() => {setNavbarItemActiveness({
                    matches:true,
                    services: false
                })}} onMouseLeave={() => {setNavbarItemActiveness({
                    matches:false,
                    services: false
                })}}
                >
                    <span  className="">Matches</span>
                    <KeyboardArrowDownIcon/>
                    {navbarItemActiveness.matches && <MatchesHover/>}
                </div>
                
                <span className="bg-[#fff] text-[#113D59] font-bold px-2 py-1 cursor-pointer  mr-2 rounded-sm hover:bg-[#a2a2a2]">Contact</span>
                <span className="bg-[#fff] text-[#113D59] font-bold px-2 py-1 cursor-pointer  mr-2 rounded-sm hover:bg-[#a2a2a2]">About</span>
                {
                    !user?.token ? <Link to="/signin" className="bg-[#fff] text-[#113D59] font-bold px-2 py-1 cursor-pointer  mr-2 rounded-sm hover:bg-[#a2a2a2]">SignUp</Link> :
                    <div onClick={() => setShowProfile(!showProfile)} className="relative">
                        <span className="bg-[#fff] text-[#e73c77] font-bold p-1 cursor-pointer  mr-2 rounded-full hover:bg-[#a2a2a2]">{user?.result?.name?.slice(0,2)?.toUpperCase()}</span>
                        {showProfile && <Profile/>}
                    </div>
                }

                
            </div>
        </div>
    )
}