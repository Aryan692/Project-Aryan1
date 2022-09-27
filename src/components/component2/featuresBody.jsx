import React from 'react';


const FeaturesBody=() => {



    return(
<>
       <div className='divi flex gap-5 items-center justify-center  max-w-full h-[500px]'>


        <span> <img  className="img-one w-[350px] h-[300px]" src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xitems1.jpg.pagespeed.ic.oEs2Is3V_r.webp" alt="pic1"/>
        <h2>Men's fashion</h2>
         <button>shop now</button> </span>
         <span><img  className="img-one w-[350px] h-[300px]" src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xitems2.jpg.pagespeed.ic.rorSvQkHIK.webp" alt="pic2" />
        <h2>Women's Accesories</h2>
        <button>shop now</button></span> 
        <span><img  className="img-one w-[350px] h-[300px]" src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xitems3.jpg.pagespeed.ic.oIlAW2CB1j.webp" alt="pic3" />
       <h2>Women's fashion</h2>
       <button>shop now</button>
       </span>
   

   </div>

   <div className='divi  flex items-center justify-between '>
    <h1 className='heading text-5xl font-semibold justify-start ml-3 pb-4'> Trending this Week</h1>
 
    <ul className='list flex text-2xl font-bold gap-3  items-center justify-center pb-4'>
        <li>Men</li>
        <li>Women</li>
        <li>Baby</li>
        <li>Fashion</li>
    </ul>
    </div>
  
   <hr />
   
    
   </> );
}

export default FeaturesBody;
