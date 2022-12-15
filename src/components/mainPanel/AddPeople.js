import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getConversationUsingConversationId } from '../../utils/conversationUtils';
import { getUserDetailObjectsFromUserIDsArray } from '../../utils/userUtils';
import COLORS from '../../utils/COLORS';

function AddPeople() {
  const state = useSelector((state) => state);
  return (
    <div
      className="ui"
      style={{
        backgroundColor: COLORS.PRIMARY_DARK,
        display: 'flex',
        justifyContent: 'space-between',
        right: 0,
        left: 0,
        zIndex: 10,
        position: 'absolute',
        height: '5vh',
        top: 0,
        padding: '.25rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div>
          <h1 style={{ color: COLORS.ACCENT_LIGHT }}>{getCurrentConversationName(state)}</h1>
        </div>
      </div>
      <div
        className="ui small horizontal list"
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
      >
        {getUserImages(state).map((user) => (
          <div className="item" key={user.userId}>
            <img className="ui avatar image" alt="profile pic" src={user.imgUrl} />
            <div className="content">
              <div className="header" style={{ color: COLORS.ACCENT_LIGHT }}>
                {user.userName}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Link className="ui yellow labeled icon button mini" to="/addUsersToExistingConversation">
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
