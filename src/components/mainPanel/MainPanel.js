import React from 'react';

import AddPeople from './AddPeople';
import MessageWindow from './MessageWindow';
import Console from './Console';

function MainPanel() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        justifyContent: 'stretch',
        height: '100%',
      }}
    >
      <AddPeople />
      <MessageWindow />
      <Console />
    </div>
  );
}

export default MainPanel;
