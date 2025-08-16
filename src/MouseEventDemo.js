

import React, { useState } from 'react';

function MouseEventDemo() {
  const [message, setMessage] = useState('Hover over the box');

  const handleMouseEnter = () => {
    console.log("handleMouseEnter")
    setMessage('Mouse entered!');
  };

  const handleMouseLeave = () => {
     console.log("handleMouseLeave")
    setMessage('Mouse left!');
  };

  const handleMouseDown = () => {
    console.log("handleMouseDown")
    setMessage('Mouse button down!');
  };

  const handleMouseUp = () => {
    console.log("handleMouseUp")
    setMessage('Mouse button released!');
  };

  return (
    <div>
      <h2>Mouse Event Example</h2>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'lightblue',
          lineHeight: '200px',
          textAlign: 'center',
          margin: '20px auto',
          userSelect: 'none',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {message}
      </div>
    </div>
  );
}

export default MouseEventDemo;
