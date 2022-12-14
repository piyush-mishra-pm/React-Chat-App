import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ACTION_TYPES from '../../store/ACTION_TYPES';
import { getConversationUsingConversationId } from '../../utils/conversationUtils';



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

  // const renderUserImages = () => {
  //   return (
  //     <React.Fragment>
  //       {props.users &&
  //         props.users.map((user, index) => {
  //           return index < MAX_PROFILE_IMAGES_IN_1_ROW ? (
  //             <img
  //               className="ui avatar image mini"
  //               src={user.imgUrl}
  //               key={user.userId}
  //               alt={`profile of ${user.userName}`}
  //             />
  //           ) : null;
  //         })}
  //     </React.Fragment>
  //   );
  // };

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

  // const renderUserNames = () => {
  //   let concatenatedUserNames = props.users[0].userName;
  //   for (let i = 1; i < props.users.length; i++) {
  //     if (i >= MAX_USERNAMES_IN_1_ROW) {
  //       concatenatedUserNames += ' ...';
  //     } else {
  //       concatenatedUserNames += ', ' + props.users[i].userName;
  //     }
  //   }
  //   return <div className="left floated">{concatenatedUserNames}</div>;
  // };

  const renderConversationName = () => {
    const conversation = getConversationUsingConversationId(conversations, props.index);
    return conversation.conversationName;
  };

  return (
    <div className="item" onClick={() => conversationChangeAction(props.index)}>
      <div
        className="ui card"
        style={{ minHeight: '10rem', maxHeight: '15rem', padding: '.25rem', overflow: 'hidden' }}
      >
        <div class="content">
          <div class="header">{renderConversationName()}</div>
          <div class="meta">
            {/*renderUserImages()}
            {renderUserNames()*/}
            {renderUsersWithImages()}
          </div>
          <div class="description">
            <div>{/* Last Message in the conversation: */ props.message}</div>
          </div>
        </div>
      </div>
    </div>
  );
}