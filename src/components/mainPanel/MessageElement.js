import React from 'react';
import { useSelector } from 'react-redux';
import NOTIFICATION_TYPES from '../../store/NOTIFICATION_TYPES';

import { tsToDateTime1d1hSensitive, getSidePanelMessageContentAsPerMessageType } from '../../utils/conversationUtils';

function MessageElement({ userDetails, message }) {
  const usersState = useSelector((state) => state.users);
  const currentUserId = useSelector((state) => state.current.currentUserId);

  const renderMessageContent = (message) => {
    switch (message.messageType) {
      case NOTIFICATION_TYPES.MESSAGE:
        return message.message;
      case NOTIFICATION_TYPES.MEMBER_JOIN:
        return getSidePanelMessageContentAsPerMessageType(message, usersState);
      case NOTIFICATION_TYPES.MEMBER_LEAVE:
        return getSidePanelMessageContentAsPerMessageType(message, usersState);
      case NOTIFICATION_TYPES.IMAGE:
        return (
          <img
            src={message.imgUrl}
            alt={message.imgAltText}
            style={{ overflow: 'hidden', width: '100%', objectPosition: 'center', objectFit: 'cover' }}
          />
        );
      case NOTIFICATION_TYPES.CONVERSATION_CREATED:
        return getSidePanelMessageContentAsPerMessageType(message, usersState);
      default:
        return 'No conversation yet !';
    }
  };
  if (
    message.messageType === NOTIFICATION_TYPES.MEMBER_JOIN ||
    message.messageType === NOTIFICATION_TYPES.MEMBER_LEAVE ||
    message.messageType === NOTIFICATION_TYPES.CONVERSATION_CREATED
  ) {
    return (
      <div className="ui center aligned container" style={{ margin: '2rem' }}>
        <div className="content">
          <div className="description">
            <div className="ui label">
              {renderMessageContent(message)}
              <div className="detail">{tsToDateTime1d1hSensitive(message.timestamp)}</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`ui ${userDetails.userId === currentUserId ? 'right' : 'left'} aligned container`}
        style={{
          display: 'flex',
          direction: 'horizontal',
          justifyContent: `${userDetails.userId === currentUserId ? 'right' : 'left'}`,
          flexGrow: 'inherit',
          margin: '2rem',
        }}
      >
        <div className="ui visible message" style={{ width: '75%' }}>
          <div className="content">
            <div className="header" style={{ margin: '.5rem .5rem' }}>
              {renderImageAndName(userDetails, currentUserId)}
            </div>
            <div className="description">{renderMessageContent(message)}</div>
            <div className="ui label" style={{ margin: '1rem' }}>
              {tsToDateTime1d1hSensitive(message.timestamp)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function renderImageAndName(userDetails, currentUserId) {
  if (userDetails.userId !== currentUserId) {
    return (
      <React.Fragment>
        <img className="ui avatar image" src={userDetails.imgUrl} alt={`${userDetails.userName} profile`} />
        {userDetails.userName}
      </React.Fragment>
    );
  } else
    return (
      <React.Fragment>
        {userDetails.userName}{' '}
        <img className="ui avatar image" src={userDetails.imgUrl} alt={`${userDetails.userName} profile`} />
      </React.Fragment>
    );
}


export default MessageElement;
