import React from 'react';
import {Link} from 'react-router-dom';


const Newnavbar = () => {


    return (<>
    <div className='divi gap-3 flex text-blue-600 underline'>

    <Link to="/" >About us</Link>
    <Link to="/contact" >contact us</Link>

    </div>

    </>);

} 
export default Newnavbar;