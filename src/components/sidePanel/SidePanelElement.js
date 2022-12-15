import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ACTION_TYPES from '../../store/ACTION_TYPES';
import COLORS from '../../utils/COLORS';
import { getConversationUsingConversationId } from '../../utils/conversationUtils';

export default function SidePanelElement(props) {
  const conversations = useSelector((state) => state.conversations);
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  const conversationChangeAction = useCallback(
    (conversationIndexClicked) =>
      dispatch({
        type: ACTION_TYPES.CONVERSATION_CHANGE_CURRENT,
        payload: getConversationUsingConversationId(conversations, conversationIndexClicked).conversationId,
      }),
    [dispatch, conversations]
  );

  const renderUsersWithImages = () => {
    return (
      <div className="ui mini horizontal list">
        {props.users.map((user) => (
          <div className="item" key={user.userId}>
            <img className="ui avatar image" alt="profile pic" src={user.imgUrl} />
            <div className="content">
              <div className="header">{user.userName}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderConversationName = () => {
    const conversation = getConversationUsingConversationId(conversations, props.index);
    return conversation.conversationName;
  };

  return (
    <div className="item" onClick={() => conversationChangeAction(props.index)}>
      <div
        className={`ui card`}
        style={{
          backgroundColor:
            state.current.currentConversationId === props.index ? COLORS.ACCENT_LIGHT : COLORS.PRIMARY_LIGHT,
          minHeight: '10rem',
          maxHeight: '15rem',
          padding: '.25rem',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <div className="content">
          <div className="header">{renderConversationName()}</div>
          <div className="meta">{renderUsersWithImages()}</div>
          <div className="description">
            <div>{/* Last Message in the conversation: */ props.message}</div>
          </div>
        </div>
      </div>
    </div>
  );
}