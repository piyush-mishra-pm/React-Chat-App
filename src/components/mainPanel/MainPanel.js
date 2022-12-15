import React from 'react';

import AddPeople from './AddPeople';
import MessageWindow from './MessageWindow';
import Console from './Console';

function MainPanel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <AddPeople />
      <MessageWindow />
      <Console />
    </div>
  );
}

export default MainPanel;
