import React from 'react';

const SlotM = (props)=>{

    let x = props.x;
    let y = props.y;
    let z = props.z;

    if (x===y && y==z){
        return(<>
            <div className='slot_class'>
         <h1>{x} {y} {z}</h1> 
        <h1>this is matching</h1>

            <hr />
            </div>
            </>
           
        );
    }
    else {
        return(<>
            <div className='slot_class'>
         <h1>{x} {y} {z}</h1> 
        <h1>this is not matching</h1>
        <hr />
            </div>
           </>
        );
    }

}

const SlotMachin = ()=> {

return (
    <>
    <div  className=' container bg-gray-300'>
    <h1 className='heading text-3xl'>🎰Welcome to <span className='span_cls font-extrabold'>Slot Machine Game For fun 🎰 </span></h1>

    <div className='SlotMachine'>
        <SlotM  x="😊" y ="😊" z="😊" />
        <SlotM  x="😂" y ="😊" z="😂" />
        <SlotM  x="😁" y ="❤️" z="😊" />
        <SlotM  x="😎" y ="😎" z="😎" />
    </div>
    </div>
    </>
);
    

}

export default SlotMachin;