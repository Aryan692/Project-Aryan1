import React from 'react';


let curDate = new Date(2022,2,9,14);
 curDate = curDate.getHours();
let greeting = '';

const cssStyle ={};

if(curDate > 1 && curDate <12){
    greeting= "Good Morning";
   cssStyle.color = "green";

}
else if (curDate >=12 && curDate < 16){
    greeting ="Good afternoon"
    cssStyle.color ="yellow"

}
else{
    greeting ="good evening"
    cssStyle.color ="black"
}

function Greeting() {
return(
<>


<h1 className='text-3xl'>  hello sir, <span  style={cssStyle}>  {greeting} </span> </h1>
 



{/* <ProductListPage/> */}

</>
);
}

export default Greeting;
