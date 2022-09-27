import React, {useState} from 'react';


import ProductList from './ProductList';



function ProductListPage() {

      const [query, setQuery] = useState("");

      const[sort , setSort] = useState("default");

  const allData = [
    {
      title:"Black coffe mug",
      price:"15",
      category :"mug",
      imgUrl:"https://images.unsplash.com/photo-1520031473529-2c06dea61853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",

    },
    {
      title:"father's day coffe mug",
      price:"20",
      category :"mug",
      imgUrl:"https://rukminim1.flixcart.com/image/416/416/k4rcmfk0/mug/f/8/8/coffee-mug-563-1-lakdas-original-imafh6bs86zsm8fw.jpeg?q=70",

    },
    
{
  title:"green rounded t-shirt",
  price:"18",
  category :"t-shirt",
  imgUrl:"https://5.imimg.com/data5/SELLER/Default/2021/6/XY/XA/GH/691100/green-round-neck-t-shirt-1000x1000.jpg",

},

{
  title:"red rounded t-shirt",
  price:"26",
  category :"t-shirt",
  imgUrl:"https://www.leatherclue.com/image/cache/catalog/AB_TEES/Plain%20T/red-men-s-tshirt-550x550.jpg",

}
  ];

 const [data, setData] = useState(allData);

  function handleQuerychange(event){
    const newQuery = event.target.value;

    const newdata = allData.filter(function(item){
    return item.title.toLowerCase().indexOf(newQuery.toLowerCase()) != -1

    });
 console.log("the data is ", data);
 setQuery(newQuery);
 setData(newdata);
  }

  function handleSortchange(event){
    setSort(event.target.value);

  }

  if (sort == "lowtohigh"){
    data.sort(function (x,y){
      return x.price- y.price;
    });
  }
  else if(sort=="name"){
    data.sort(function (x,y){
      return x.title <y.title ? -1: 1;
    })

  }
  if (sort == "hightolow"){
    data.sort(function (x,y){
      return y.price - x.price;
    });
  }


  
return(
<>

<input placeholder="search"
value={query}
className ="border border-grey-700 rounded-md"
onChange={handleQuerychange} />


<select className='rounded-md border border-grey-700 ml-2'  value={sort} onChange={handleSortchange}>
  <option value="default">sort by default</option> 
  <option value="name">sort by name</option>
  <option value="lowtohigh">price low-to-high</option>
  <option value="hightolow">price high-to-low</option>
  
</select>
<ProductList product={data}/>
</>
);
}

export default ProductListPage;
