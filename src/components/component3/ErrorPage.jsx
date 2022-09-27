import React from 'react';
import {NavLink} from 'react-router-dom'


const ErrorPage = () => {
 return (<>
 
 <div>
    <h1 className='heading text-6xl  font-extrabold'>404 Error Page</h1>
    <p className='para text-4xl font-semibold'>Sorry , this page dosn't exist</p>
    <NavLink to="/" > Go back</NavLink>
 </div>
 </>)
}
export default ErrorPage;