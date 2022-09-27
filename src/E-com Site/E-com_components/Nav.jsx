import React from 'react';
import { BsCart2 } from "react-icons/Bs";

import { NavLink } from 'react-router-dom';

const Nav = ()=> {

    return (<>

<div className=' flex'>

    <ul className='list hidden md:flex items-center gap-9 backdrop-blur-lg z-10 bg-[#ffffff14] md:static fixed top-0 right-0 h-screen md:h-auto'>
        <li><NavLink className=" hover:text-blue-700 md:inline-block hover:underline border-transparent duration-300" to="/">Home</NavLink></li>
   
        <li><NavLink className=" hover:text-blue-700 md:inline-block hover:underline border-transparent duration-300" to="/About">About</NavLink></li>




        <li><NavLink className=" hover:text-blue-700 md:inline-block hover:underline border-transparent duration-300" to="/Products">Product</NavLink></li>
   
    
        <li><NavLink className=" hover:text-blue-700 md:inline-block hover:underline border-transparent duration-300" to="/Contact">Contact</NavLink></li>
    
    
        <li className='list mr-[17px] hover:text-blue-700 md:inline-block'><NavLink to="/Cart"><BsCart2 /></NavLink></li>
    </ul>
   

</div>


    </>);

} 
export default Nav;
