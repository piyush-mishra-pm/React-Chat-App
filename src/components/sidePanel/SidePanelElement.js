import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ACTION_TYPES from '../../store/ACTION_TYPES';
import { getConversationUsingConversationId } from '../../utils/conversationUtils';

const MAX_PROFILE_IMAGES_IN_1_ROW = 2;
const MAX_USERNAMES_IN_1_ROW = 2;

export default function SidePanelElement(props) {
  const conversations = useSelector((state) => state.conversations);

  const dispatch = useDispatch();
  const conversationChangeAction = useCallback(
    (conversationIndexClicked) =>
      dispatch({
        type: ACTION_TYPES.CONVERSATION_CHANGE_CURRENT,
        payload: getConversationUsingConversationId(conversations, conversationIndexClicked).conversationId,
      }),
    [dispatch, conversations]
  );

  const renderUserImages = () => {
    return (
      <React.Fragment>
        {props.users &&
          props.users.map((user, index) => {
            return index < MAX_PROFILE_IMAGES_IN_1_ROW ? (
              <img
                className="ui avatar image mini"
                src={user.imgUrl}
                key={user.userId}
                alt={`profile of ${user.userName}`}
              />
            ) : null;
          })}
      </React.Fragment>
    );
  };

  const renderUserNames = () => {
    let concatenatedUserNames = props.users[0].userName;
    for (let i = 1; i < props.users.length; i++) {
      if (i >= MAX_USERNAMES_IN_1_ROW) {
        concatenatedUserNames += ' ...';
      } else {
        concatenatedUserNames += ', ' + props.users[i].userName;
      }
    }
    return <div className="left floated">{concatenatedUserNames}</div>;
  };

  const renderConversationName = () => {
    const conversation = getConversationUsingConversationId(conversations, props.index);
    return conversation.conversationName;
  };

  return (
    <div className="item relaxed" onClick={() => conversationChangeAction(props.index)}>
      <div>{renderUserImages()}</div>
      <div>{renderConversationName()}</div>
      <div className="header right floated">{renderUserNames()}</div>
      <div>{/* Last Message in the conversation: */ props.message}</div>
    </div>
  );
}
