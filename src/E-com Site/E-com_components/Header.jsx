import React from 'react';

import { NavLink } from 'react-router-dom';

import Nav from './Nav';


const Header = () => {

    return (<>

  <NavLink  to ="/">
<div className='header  h-[70px] bg-blue-50 shadow-lg flex justify-between items-center'>
  

    <img  className='image w-[120px] h-[70px] items-center ml-[30px]' src="https://www.ranklogos.com/wp-content/uploads/2014/10/Amazon.in_.jpg" alt="amazon" />

    <Nav />
    </div>

    </NavLink>
    </>)
}
export default Header;