import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getConversationUsingConversationId } from '../../utils/conversationUtils';

function AddPeople() {
  const state = useSelector((state) => state);
  return (
    <div
      className="ui"
      style={{ backgroundColor: 'grey', right: 0, left: 0, zIndex: 10, position: 'absolute', height: '5vh', top: 0 }}
    >
      <div className="ui label big">{getCurrentConversationName(state)}</div>
      {/** todo: Enter Participant list */}

      <Link className="ui labeled icon button mini" to="/addUsersToExistingConversation">
        <i className="user plus icon"></i>
        Modify User List
      </Link>
    </div>
  );
}

function getCurrentConversationName(state) {
  const currentConversationId = state.current.currentConversationId;
  const currentConversation = getConversationUsingConversationId(state.conversations, currentConversationId);
  return currentConversation.conversationName;
}

export default AddPeople;
