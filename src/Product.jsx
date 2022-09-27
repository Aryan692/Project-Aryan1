import React from 'react';

function Product({title, price, category, imgUrl}){

    return (
    <div  className='p-3'>
        <img  className="w-20" src={imgUrl} alt="img"/>
        <div>{category}</div>
        <div>{title}</div>
        <div>${price}</div>
    </div>
        
    );
}
export default Product;