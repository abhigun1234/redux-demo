import React, { useState } from 'react';

function CompD(props) {
   console.log("props",props)
   const[counter,increment]=props
    return (
        <div>
            
            <button onMouseOver={increment}>Mouse over</button>
            <p>{counter}</p>
        </div>
    );
}

export default CompD;