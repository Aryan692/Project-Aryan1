import React, {useState} from 'react';
// import { AiOutlineClose } from "react-icons/fa";





const EcomSite =()=>{

  const[announcement, setAnnouncement] = useState("font-bold flex justify-center items-center bg-purple-500 text-white");

    return (
       <>
   {/* <div className="navbar flex justify-between items-center bg-black">
    <div className='flex justify-center items-center md:order-2'>
        <div className="hamburger p-4 cursor-pointer md:hidden">
          <div className="line w-6 h-0.5 bg-black my-1"></div>
          <div className="line w-6 h-0.5 bg-black my-1"></div>
          <div className="line w-6 h-0.5 bg-black my-1"></div>
        </div>
     <div className='search md:hidden'>Search icon</div>
    </div>
      <div className='logo item-center md:order-1 flex'>

        <div className="features md:flex absolute md:static w-fit md:w-auto bg-gray-300 md:bg-white inset-0 md:mx-4 md:space-x-2 -translate-x-96 md:translate-x-0">
            <div className="items">Best seller</div>
            <div className="items">New Release</div>
            <div className="items">Mobiles</div>
            <div className="items">customer service</div>
            <div className="items">Today's deal</div>
            <div className="items">Fashion</div>
        </div>
        
         <div>Amazon</div>
         </div>
      <div className='cart item-center md:order-3 flex'>
      <div className='search hidden md:block'>Search icon</div>

        <div>
        Cart Account
        </div>
        </div>
   </div> */}

   <div className={announcement}>
    <h2>Hurry up 50% sale today</h2>
    {/* <AiOutlineClose /> */}

   </div>

        </>
    );

    
}
export default EcomSite;
