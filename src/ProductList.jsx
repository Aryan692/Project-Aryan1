import React from 'react';
import Product from "./Product";



function ProductList({product}){

    return (
    <>

    <div className ="flex w-4 gap-3">

       { product.map(function(item){
            return (

            <Product 
            title ={item.title}
            category ={item.category}
            price = {item.price}
            imgUrl={item.imgUrl}
            />
            );

        }
        )
        }
        
        </div>
        
        </>
        );
}

export default ProductList;