import React from 'react';







const ProductL = (data) => {

    return (


        <>
        <div className='main-first max-w-full h-[100vh]'></div>
    
    <div className='main  border-[2px] bg-gray-300 rounded-md flex shadow-2xl gap-3 h-[550px]'>
          <div className="m-[30px]  p-[20px] w-[350%] shadow-2xl">
    
            <div className="w-[300px]">
              <img className=" w-full  object-cover" src={data.photo} />
            </div>
   
            <div className="text-m mt-[15px] font-semibold text-gray-500" >  {data.title}
            </div>
            <div className="text-xl mt-[5px] font-bold text-gray-500 "> {data.category} </div>
            <div ><i className="fa fa-star text-red-500"></i>  <i className="fa fa-star text-red-500"></i> <i className="fa fa-star text-red-500"></i> <i className="fa fa-star-0 text-red-500"></i> <i className="fa fa-star-o text-red-500"></i>  </div>
            <div className=" text-m mt-[7px] font-semibold text-gray-500 " > $ {data.Price}</div>
        
   
    
            {/* <Link className="px-[5px] ml-[190px] py-[10px] rounded-xl bg-red-200" to="/components/ProductDetail"> View Detail</Link>
     */}
            
    
    
          </div>
          </div>
         
         

          </>);

}
export default ProductL;