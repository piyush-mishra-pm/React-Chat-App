import React from 'react';

import AddPeople from './AddPeople';
import MessageWindow from './MessageWindow';
import Console from './Console';

function MainPanel() {
  return (
    <div className="twelve wide column">
      <div className="three row divided grid">
        <AddPeople />
        <MessageWindow />
        <Console />
      </div>
    </div>
  );
}

export default MainPanel;
