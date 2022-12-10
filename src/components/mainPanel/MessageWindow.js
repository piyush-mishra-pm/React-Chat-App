import React from 'react';
import { useSelector } from 'react-redux';

import { getUserFromUserId } from '../../utils/userUtils';
import MessageElement from './MessageElement';
import { getConversationUsingConversationId } from '../../utils/conversationUtils';

function MessageWindow() {
  const currentConversationId = useSelector((state) => state.current.currentConversationId);
  const conversations = useSelector((state) => state.conversations);
  const users = useSelector((state) => state.users);
  const state = useSelector((state) => state);

  function renderCurrentConversation() {
    const currentConversation = conversations.find(
      (conversation) => conversation.conversationId === currentConversationId
    );
    return (
      <div className="ui very relaxed list">
        {currentConversation.messages.map((message, index) => {
          let userId = message.sender;
          let userDetails = getUserFromUserId(userId, users);
          return <MessageElement userDetails={userDetails} message={message} key={index} />;
        })}
      </div>
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
      <h1>{getCurrentConversationName(state)}</h1>

      {renderCurrentConversation()}
    </div>
  );
}

function getCurrentConversationName(state) {
  const currentConversationId = state.current.currentConversationId;
  const currentConversation = getConversationUsingConversationId(state.conversations, currentConversationId);
  return currentConversation.conversationName;
}

export default MessageWindow;
