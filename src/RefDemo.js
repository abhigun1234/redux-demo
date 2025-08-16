// import React, { useEffect, useState } from 'react';

// function RefDemo(props) {
//     const[inputRrf,setRef]=useState(React.createRef())
//     useEffect(()=>{
//         console.log("ref",inputRrf)
//         inputRrf.current.focus()
//     }
//     )
//     return (
//         <div>
//             <input ref={inputRrf} type='text'></input>
//         </div>
//     );
// }

// export default RefDemo;

import React, { useEffect, useState } from 'react';

function RefDemo(props) {
    const [inputRef,setRef]=useState(React.createRef())
    useEffect(()=>{
        inputRef.current.focus()
    })
    return (
        <div>
            <input type='text' ref={inputRef} placeholder='Enter name'></input>
        </div>
    );
}

export default RefDemo;