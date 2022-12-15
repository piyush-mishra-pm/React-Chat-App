import React from 'react';
import { useSelector } from 'react-redux';

import SidePanelElement from './SidePanelElement';
import {
  getSidepanelConversationList,
  getSidepanelConversationsContainingMatchingUser,
} from '../../utils/conversationUtils';
import SearchUserConversations from './SearchUserConversations';
import COLORS from '../../utils/COLORS';

function SidePanel() {
  const conversations = useSelector((state) => state.conversations);
  const queryUserInConversation = useSelector((state) => state.current.searchUserConversationQuery);
  const users = useSelector((state) => state.users);

  function renderConversations() {
    let sidePanelConversations = {};
    if (queryUserInConversation) {
      sidePanelConversations = getSidepanelConversationsContainingMatchingUser(
        conversations,
        users,
        queryUserInConversation
      );

      // If no user matches, or conversations matches for queried user, then inform.
      if (!sidePanelConversations.found) {
        return (
          <div className="ui relaxed animated celled list">
            <h3>{sidePanelConversations.message}</h3>
          </div>
        );
      }
    } else {
      sidePanelConversations.matchedResult = getSidepanelConversationList(conversations, users);
    }

    // Either matching conversation for user found or user was not being queried.
    return (
      <div className="ui animated celled list">
        {sidePanelConversations.matchedResult.map((item) => (
          <SidePanelElement message={item.message} users={item.users} item={item} key={item.index} index={item.index} />
        ))}
      </div>
    );
  }

  return (
    <div className="four wide column">
      <div>
        <SearchUserConversations />
      </div>

      {/*  Render conversations :*/}
      <div
        style={{
          position: 'absolute',
          top: '9vh',
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: COLORS.PRIMARY_MEDIUM,
          overflow: 'auto',
        }}
      >
        {renderConversations()}
      </div>
    </div>
  );
}

export default SidePanel;
