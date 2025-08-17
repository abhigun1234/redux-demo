import React, { useState } from 'react';
import Counter from './Counter';
function CompB(props) {
   
const{count,increment}=props

    return (
        <div>
            CompB
            <button onMouseOver={increment}>mouse hover</button>
            {count}
        </div>
    );
}

export default Counter(CompB);