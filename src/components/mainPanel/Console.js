import React from 'react';

function Console() {
  return (
    <div
      className="ui container"
      style={{ backgroundColor: 'blue', right: 0, left: 0, position: 'absolute', height: '7.5vh', bottom: 0 }}
    >
      <div
        className="ui icon large input"
        style={{ position: 'absolute', bottom: '1rem', top: '1rem', right: 0, left: 0 }}
      >
        <input type="text" placeholder="Type your message here..." />
        <i className="inverted circular envelope link icon"></i>
      </div>
    </div>
  );
  
}

export default Console;
