import React from 'react';
import AllData from './AllData';
import ProductL from './ProductL';
import Navbar from './Navbar';
import Footercontent from './components2/Footercontent';


// import EcomSite from './EcomSite';




const Allcontent = () => {
const data= AllData;

    return (<>
    <Navbar />
   
    <div className="flex flex-wrap justify-center  ">
        {data.map(function(item) {
          return (
            <ProductL title={item.title}
              key={item.title}
              {...item}

            />

            );
        })}



      </div>
   
        
    <Footercontent />
    </>
    );
} 
export default Allcontent;