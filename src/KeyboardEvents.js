import React, { useState } from 'react';

function KeyboardEvents() {
  const [message, setMessage] = useState('Type something in the input');

  const handleKeyDown = (event) => {
    setMessage(`Key down: ${event.key}`);
    console.log(" handleKeyDown event",event.target.value)
  };

  const handleKeyUp = (event) => {
    setMessage(`Key up: ${event.key}`);
    console.log("handleKeyUp event",event)
  };

  const handleChange = (event) => {
    setMessage(`Input value: ${event.target.value}`);
    console.log(" handleChangeevent",event)
  };

  return (
    <div>
      <h2>Keyboard Event Example</h2>
      <input
        type="text"
        placeholder="Type something..."
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onChange={handleChange}
        style={{ width: '300px', padding: '8px', fontSize: '16px' }}
      />
      <p>{message}</p>
    </div>
  );
}

export default KeyboardEvents;
