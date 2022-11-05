import React from 'react';

function SidePanel() {
  function renderConversations() {
    return (
      <ul>
        <li>First</li>
        <li>Second</li>
      </ul>
    );
  }

  return (
    <div className="four wide column">
      <h1>SidePanel</h1>
      {renderConversations()}
    </div>
  );
}

export default SidePanel;
