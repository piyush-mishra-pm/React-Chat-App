import React from 'react';
import { useSelector } from 'react-redux';
import SidePanelElement from './SidePanelElement';
import { getSidepanelConversationList } from '../../utils/conversationUtils';

function SidePanel() {
  const conversations = useSelector((state) => state.conversations);
  const users = useSelector((state) => state.users);

  function renderConversations() {
    const sidePanelConversations = getSidepanelConversationList(conversations, users);
    return (
      <div className="ui relaxed animated celled list">
        {sidePanelConversations.map((item, index) => (
          <SidePanelElement message={item.message} users={item.users} key={index} index={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="four wide column">
      <h1>SidePanel {conversations.length}</h1>
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
