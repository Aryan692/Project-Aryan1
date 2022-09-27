import React from 'react';

 const Sresult = (props) => {

    const img = `http://source.unsplash.com/400×400/?${props.name}`

return(<>

          <div>

             <img src={img} alt="image" />
          </div>
</>);
 }


 export default Sresult;
