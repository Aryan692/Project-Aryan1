import React from 'react';
import { AiOutlineCopyright} from "react-icons/Ai";


const Footer = () => {

    const year  =  new Date().getFullYear();

    return (<>
    <div className='footer bg-purple-500 text-2xl h-[70px] max-w-full'> 
   <h1 className='hading flex justify-center items-center'>
    copyright <AiOutlineCopyright className='copy ml-[10px] mr-[10px]'/> {year}
    </h1>
    </div>
    </>);
}
export default Footer;
