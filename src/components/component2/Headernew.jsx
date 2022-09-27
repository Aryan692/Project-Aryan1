import React from 'react';
import {RiFacebookCircleLine, RiAccountCircleFill} from "react-icons/Ri";



import {BsShop, BsSearch,BsCart3} from "react-icons/Bs";
import {FaInstagram} from "react-icons/fa";
// import {AiOutlineTwitter} from "react-icons/Ai";
import {AiOutlineTwitter, AiFillYoutube, AiFillLinkedin} from "react-icons/Ai";

 

 const Headernew = () => {


    return (<>

    <div className='navbar h-[100px] max-w-full border-[2px] border-gray-200 bg-gray-100 shadow-xl'>
            <div className='navdiv h-[30px] flex justify-between'>
                <ul className='list flex justify-start gap-4 items-center ml-[50px] mt-2 cursor-pointer'>
                    <li>About us</li>
                    <li>Privacy</li>
                    <li>FAQ</li>
                    <li>Career</li>
                </ul>

                <ul className='list2 flex gap-4 items-center mr-[50px] mt-0 cursor-pointer'>
                    <li>My Wishlist</li>
                    <hr/>
                    <li>Track your order</li>
                    <hr/>
                    <li><RiFacebookCircleLine /></li> 
                    <li><FaInstagram /></li>
                    <li><AiFillLinkedin /></li>
                    <li><AiOutlineTwitter /></li> 
                    <li><AiFillYoutube /></li>
                </ul>
            </div>
            <hr />
          <div  className='secdiv flex justify-start items-center ml-7'>
            <div className='home cursor-pointer flex justify-center items-center'>
            <div className='logo text-6xl mr-2 text-red-600'><BsShop/></div>
            <h1><span className='spani text-4xl font-bold'>Capital</span> <span className='spani2 text-2xl'>Shop</span> </h1>
            </div>
            
            <ul  className="list3 flex justify-start gap-4 items-center ml-[50px] mt-2 font-bold cursor-pointer">
                <li>Home</li>
                <li>Mens</li>
                <li>Womens</li>
                <li>Baby collections</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>

            <ul className='list4 flex justify-end gap-6 items-center mr-[50px] mt-2 ml-[400px] text-2xl font-thin cursor-pointer'>
                <li>< BsSearch /></li>
                <li>< RiAccountCircleFill/></li>
                <li><BsCart3/></li>
            </ul>

          </div>
    </div>

    </>);


 }

  export default Headernew;