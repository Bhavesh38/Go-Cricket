import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { getAllAuctions } from '../../actions/auctionActions';

const AllAuctions = () => {
    const dispatch=useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage?.getItem("goSportsProfile")));
    // console.log(user);
    useEffect(() => {
        dispatch(getAllAuctions({auctions:user?.result?.auctions}))
    },[user])
    return (
    <div>
      AllAuctions
    </div>
  )
}

export default AllAuctions
