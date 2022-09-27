import React from 'react';
import {Route,Routes} from "react-router-dom";
import About from './About';
import Contact from './Contact';

import Newnavbar from './Newnavbar';

import ErrorPage from './ErrorPage';

 const Linkpage = () => {

    return ( <>

 <Routes>
             <Route exact path="/" element={<About />} />
             <Route exact path="/Contact" element={<Contact />} />
             <Route exact path="/ErrorPage" element={<ErrorPage />} />
 </Routes>
 


 <Newnavbar/>
    

    </>);
 }

 export default Linkpage;