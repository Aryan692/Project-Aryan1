// import { Slideshow } from '@mui/icons-material';
import React from 'react';
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/Ai";
// import { ApiSlides } from '../../SliderApi/Apislides';
 

 const Body1 = () => {




    return (<>
    <div className='parent-slider h-[540px] flex justify-between items-center bg-white'>
      
            <div className='left-arrow text-6xl cursor-pointer shadow-sm rounded-full flex justify-center items-center'><AiFillCaretLeft/></div>

 {/* { Slider.map((slide , index) =>{
    if (index === activeslides) {
        return (<div className='slider w-[100%] h-[500px] flex justify-center items-center relative rounded-lg border-gray-100 border-[1px] shadow-2xl overflow-hidden bg-blue-200'>

        <div className='slideimg flex'>

            <img src="https://preview.colorlib.com/theme/estore/assets/img/hero/xhero_man.png.pagespeed.ic.cN86RxAvqq.webp" alt="img"  className='img h-[520px] '/>

        </div>
            <div className='slider  flex  flex-col flex-1 justify-center place-items-center text-center gap-3'>

            <p className='para font-sans text-3xl'>Fashion Sale</p>
            <h1 className='heading text-5xl font-semibold'>Minimal Menz Style</h1>
            <p className='para text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, minus ullam consectetur, odit voluptas mollitia, inventore error nulla commodi facere reiciendis enim aut. Omnis enim quos ducimus doloribus fugiat odit, possimus rem.</p>

            <button className='btn border-[2px] border-black rounded-md p-2 hover:bg-blue-300 text-1xl'>Shop Now</button>
            </div>

    </div>)
    }
 })
 } */}
 <div className='slider w-[100%] h-[500px] flex justify-center items-center relative rounded-lg border-gray-100 border-[1px] shadow-2xl overflow-hidden bg-blue-200'>

<div className='slideimg flex'>

    <img src="https://preview.colorlib.com/theme/estore/assets/img/hero/xhero_man.png.pagespeed.ic.cN86RxAvqq.webp" alt="img"  className='img h-[520px]'/>

</div>
    <div className='slider  flex  flex-col flex-1 justify-center place-items-center text-center gap-3'>

    <p className='para font-sans text-3xl'>Fashion Sale</p>
    <h1 className='heading text-5xl font-semibold'>Minimal Menz Style</h1>
    <p className='para text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, minus ullam consectetur, odit voluptas mollitia, inventore error nulla commodi facere reiciendis enim aut. Omnis enim quos ducimus doloribus fugiat odit, possimus rem.</p>

    <button className='btn border-[2px] border-black rounded-md p-2 hover:bg-blue-300 text-1xl'>Shop Now</button>
    </div>

</div>
        
        <div className='right-arrow text-6xl cursor-pointer shadow-sm rounded-full flex justify-center items-center' ><AiFillCaretRight/></div>
    </div>
    </>);


 }

  export default Body1;