import React, { useState } from 'react';

function ClipBoard() {
  const [clipboardData, setClipboardData] = useState('');

  const handleCopy = () => {
    alert('Content copied to clipboard!');
  };

  const handlePaste = (event) => {
    const pasteData = event.clipboardData.getData('Text');
    setClipboardData(pasteData);
  };

  const handleCut = () => {
    alert('Content cut to clipboard!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Clipboard Event Example</h2>
      <textarea
        placeholder="Try copying, cutting, or pasting..."
        rows={5}
        cols={50}
        onCopy={handleCopy}
        onCut={handleCut}
        onPaste={handlePaste}
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      {clipboardData && (
        <p>
          Pasted Content: <strong>{clipboardData}</strong>
        </p>
      )}
    </div>
  );
}

export default ClipBoard;
