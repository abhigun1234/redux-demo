import React, { useState } from 'react';
import Counter from './Counter';
function CompA(props) {
const{count,increment}=props


    
    return (
        <div>
            CompA
            <button onClick={increment}>click</button>
            {count}
        </div>
    );
}

export default Counter(CompA);