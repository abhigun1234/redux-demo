// import React from 'react';

// function Counter(props) {
//     const [count,setCount]=useState(0)
//         function increment(){
//             setCount(count+1)
//         }
//     return (
//         <div>
            
//         </div>
//     );
// }


import React, { useState } from 'react';
const Counter=(WrappedComponent)=>{
function Counter(props) {
    const [count,setCount]=useState(0)
    function increment(){
        setCount(count+1)
    }
    return (
        <div>
            <WrappedComponent count={count} increment={increment}></WrappedComponent>
        </div>
    );
}
return Counter
}


export default Counter;

// import React, { useState } from 'react';
// const Counter=(WrappedComponent)=>{

//     function Counter(props) {

//           const[counter,setCounter]=useState(0)
//     const increment=()=>{
//         setCounter(counter+1)
//     }
//     return (
//         <div>
//              <WrappedComponent counter={counter} increment={increment}></WrappedComponent>
//         </div>
//     );

    
// }
// return Counter
// }

