import React from 'react';

function MessageWindow() {
  function renderList() {
    return (
      <ul>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
        <li>First</li>
      </ul>
    );
  }

  return (
    <div
      className="ui container"
      style={{
        backgroundColor: 'red',
        position: 'absolute',
        zIndex: 10,
        height: '79.5vh',
        margin: 0,
        width: '100%',
        top: '5.5vh',
        right: 0,
        left: 0,
        overflow: 'auto',
      }}
    >
      <h1>MessageWindow</h1>
      {renderList()}
    </div>
  );
}

export default MessageWindow;
