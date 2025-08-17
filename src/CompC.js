import React, { useState } from 'react';
import Counter from './Counter';
function CompC(props) {
    console.log("props",props)
  const{counter,increment}=props
    return (
        <div>
            <button onClick={increment}>increement</button>
            <p >{counter}</p>
        </div>
    );
}

export default Counter(CompC);