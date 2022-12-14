import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getConversationUsingConversationId } from '../../utils/conversationUtils';
import { getUserDetailObjectsFromUserIDsArray } from '../../utils/userUtils';

function AddPeople() {
  const state = useSelector((state) => state);
  return (
    <div
      className="ui"
      style={{
        backgroundColor: 'grey',
        display: 'flex',
        justifyContent: 'space-between',
        right: 0,
        left: 0,
        zIndex: 10,
        position: 'absolute',
        height: '5vh',
        top: 0,
      }}
    >
      <div className="ui label big">{getCurrentConversationName(state)}</div>
      {/** todo: Enter Participant list */}
      <div className="ui small horizontal list">
        {getUserImages(state).map((user) => (
          <div className="item" key={user.userId}>
            <img className="ui avatar image" alt="profile pic" src={user.imgUrl} />
            <div className="content">
              <div className="header">{user.userName}</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link className="ui labeled icon button mini" to="/addUsersToExistingConversation">
          <i className="user plus icon"></i>
          Modify User List
        </Link>
      </div>
    </div>
  );
}

function getUserImages(state) {
  const currentConversationId = state.current.currentConversationId;
  const currentConversation = getConversationUsingConversationId(state.conversations, currentConversationId);
  const userDetails = getUserDetailObjectsFromUserIDsArray(currentConversation.users, state.users);
  return userDetails;
}

function getCurrentConversationName(state) {
  const currentConversationId = state.current.currentConversationId;
  const currentConversation = getConversationUsingConversationId(state.conversations, currentConversationId);
  return currentConversation.conversationName;
}

export default AddPeople;
