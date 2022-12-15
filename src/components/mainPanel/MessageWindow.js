import React from 'react';
import { useSelector } from 'react-redux';
import COLORS from '../../utils/COLORS';

import { getUserFromUserId } from '../../utils/userUtils';
import MessageElement from './MessageElement';

function MessageWindow() {
  const currentConversationId = useSelector((state) => state.current.currentConversationId);
  const conversations = useSelector((state) => state.conversations);
  const users = useSelector((state) => state.users);

  function renderCurrentConversation() {
    const currentConversation = conversations.find(
      (conversation) => conversation.conversationId === currentConversationId
    );
    return (
      <div className="ui very relaxed container" style={{ padding: '1rem' }}>
        {currentConversation.messages.map((message, index) => {
          let userId = message.sender;
          let userDetails = getUserFromUserId(userId, users);
          return (
            <MessageElement userDetails={userDetails} message={message} key={index} style={{ overflow: 'hidden' }} />
          );
        })}
      </div>
    );
  }

  return (
    <div
      className="ui container"
      style={{
        backgroundColor: COLORS.PRIMARY_LIGHT,
        height: '90%',
        margin: 0,
        width: '100%',
        overflow: 'auto',
      }}
    >
      {renderCurrentConversation()}
    </div>
  );
}

export default MessageWindow;
