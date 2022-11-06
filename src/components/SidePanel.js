import React from 'react';

function SidePanel() {
  function renderConversations() {
    return (
      <ul>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
        <li>First</li>
        <li>Second</li>
      </ul>
    );
  }

  return (
    <div className="four wide column">
      <h1>SidePanel</h1>
      <div
        style={{
          position: 'absolute',
          top: '5vh',
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'green',
          overflow: 'auto',
        }}
      >
        {renderConversations()}
      </div>
    </div>
  );
}

export default SidePanel;
