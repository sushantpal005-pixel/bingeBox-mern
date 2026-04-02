// import React from 'react'
// import logo from "../assets/logo.svg"
// import { IoIosArrowDropdown } from "react-icons/io";
// import {useDispatch, useSelector} from "react-redux"
// import store from '../redux/store';
// import axios from 'axios';
// import { setUser } from '../redux/userSlice';
// import { useNavigate } from 'react-router-dom';
// import { API_END_POINT } from '../utils/constant';
// import toast from 'react-hot-toast';
// import { setToggle } from '../redux/movieSlice';

// const Header = () => {
//   const user = useSelector((store)=>store.app.user)
//   const toggle = useSelector(store=>store.movie.toggle)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const logoutHandler = async ()=>{
//     try {
//       const res = await axios.get(`${API_END_POINT}/api/v1/user/logout`)
//       if(res.data.success){
//         toast.success(res.data.message)
//       }
//       dispatch(setUser(null))
//       navigate("/")
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const toggleHandler = ()=>{
//     dispatch(setToggle())
//   }

//   return (
//     <div className=" absolute z-10 flex w-[100%]  items-center px-6 justify-between bg-gradient-to-b from-black">
//       <img src={logo} className="w-56" />
//       {
//         user && (
//           <div className='flex items-center'>
//             <IoIosArrowDropdown size="24px" color='white' />
//             <h1 className='text-lg font-medium text-white'>{user.fullName}</h1>
//             <div className='ml-4'>
//               <button onClick={logoutHandler} className='bg-red-800 text-white px-4 py-2'>Logout</button>
//               <button onClick={toggleHandler} className='bg-red-800 text-white px-4 py-2 ml-2'>{toggle?"Home":"Search Movie"}</button>
//             </div>
//           </div>
//         )
//       }

//     </div>
//   )
// }

// export default Header


import React from "react";
import logo from "../assets/logo.svg";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { setToggle } from "../redux/movieSlice";

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);
  console.log(user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/api/v1/user/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
  };

  return (
  <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 bg-black/70 backdrop-blur-md">
    
    {/* Logo */}
    <img
      src={logo}
      className="w-28 sm:w-36 md:w-44 lg:w-52"
      alt="logo"
    />

    {/* Right Section */}
    {user && (
      <div className="flex items-center gap-2 sm:gap-4">
        
        {/* Username (VISIBLE on all screens now) */}
        <div className="flex items-center gap-1">
          <IoIosArrowDropdown size={18} color="white" />
          <h1 className="text-white text-xs sm:text-sm md:text-base font-medium">
            {user.fullName}
          </h1>
        </div>

        {/* Search Toggle */}
        <button
          onClick={toggleHandler}
          className="bg-red-600 hover:bg-red-700 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded transition"
        >
          {toggle ? "Home" : "Search"}
        </button>

        {/* Logout */}
        <button
          onClick={logoutHandler}
          className="bg-gray-700 hover:bg-gray-800 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded transition"
        >
          Logout
        </button>

      </div>
    )}
  </div>
);
};

export default Header;