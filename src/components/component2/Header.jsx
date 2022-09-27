import React from 'react';
import { SiGooglekeep} from "react-icons/Si";



const Header = () => {

    return (<>

    <div className='header-file h-[60px] max-w-full bg-purple-600 text-black flex justify-center items-center text-5xl'>

    <SiGooglekeep className='keep text-red-600 ml-4'/>
    <h1  className='heading text-5xl'>
        Aryan World
    </h1>


    </div>
    </>);
}

export default Header;