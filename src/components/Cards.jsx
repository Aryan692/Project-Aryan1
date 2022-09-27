import React from 'react';

function Cards(props){

    return (

        <> 
        <div className='container  w-[400px] h-[400px] flex'>
            <div  className='cards'>
                <img src={props.imgUrl} alt="Mypic" />
                <div>
                    <span className='card_category'>{props.title}</span>
                    <h3>{props.sname}</h3>
                    <a href=""></a>
                    <button className='btn bg-gray-400'>Watch Now</button>
                </div>

            </div>


        </div>
       
        </>
    );

}

export default Cards;