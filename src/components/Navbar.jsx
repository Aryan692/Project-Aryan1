
import React from 'react';
import {BsCart} from "react-icons/Bs";
import {FaAmazon} from "react-icons/Fa";



const Navbar = () =>{
    return (
        <>
        <div className='navi h-[60px] shadow-md relative z-10 bg-purple-400 mb-[15px]'>
            <div className='wrapper pl-[20px] pr-[20px] pb-[10px] pt-[10px] flex justify-between items-center'>
            <div className='lefty flex flex-1 items-center'>
                <div className='language cursor-pointer text-3xl flex items-center gap-2'> <FaAmazon />Amazon.in</div>

                <div className='searchInput flex border-[2px] rounded-md border-solid border-gray-300 p-[5px] ml-[4px] focus-within:border-black transition-all'>
              
                    <input className="input outline-none" type="text" />
                    
                </div>
                
            </div>
            <div className='center flex-1 items-center'>
                <div className='logo font-bold text-lg'></div>
            </div>
            <div className='logo flex flex-1 justify-end items-center'>
                <div className='div pr-2 ml-[25px] cursor-pointer'>Register</div>
                <div className='div pr-2 ml-[25px] cursor-pointer'>Sign in</div>
                <div className='div pr-2 ml-[25px] cursor-pointer'><BsCart/></div>
              
            </div>
            </div>
        </div>
        
        
        </>
    );
} 
export default Navbar;