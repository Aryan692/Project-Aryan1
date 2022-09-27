import React from 'react';
import { AiOutlineCopyright} from "react-icons/Ai";


const Footercontent = () => { 

    const year  =  new Date().getFullYear();

    return (<>

<div className='divi flex gap-2 justify-center items-center p-3  '>
          <div className='box border-[2px] border-gray-200 p-2 hover:bg-gray-300' >1</div>
          <div className='box border-[2px] border-gray-200 p-2 hover:bg-gray-300'>2</div>
          <div className='box border-[2px] border-gray-200 p-2 hover:bg-gray-300'>3</div>
          <div>....</div>
          <div className='box border-[2px] border-gray-200 p-2 hover:bg-gray-300'>Next</div>
          </div>


    <div className='footer bg-purple-500 text-2xl h-[70px] max-w-full'> 
   <h1 className='hading flex justify-center items-center'>
    All rights reserved copyright <AiOutlineCopyright className='copy ml-[10px] mr-[10px]'/> {year}
    </h1>
    </div>
    </>);
}
export default Footercontent;
