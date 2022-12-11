import React from 'react';
import { useSelector } from 'react-redux';
import NOTIFICATION_TYPES from '../../store/NOTIFICATION_TYPES';

import { tsToDateTime1d1hSensitive, getSidePanelMessageContentAsPerMessageType } from '../../utils/conversationUtils';

function MessageElement({ userDetails, message }) {
  const usersState = useSelector((state) => state.users);

  const renderMessageContent = (message) => {
    switch (message.messageType) {
      case NOTIFICATION_TYPES.MESSAGE:
        return message.message;
      case NOTIFICATION_TYPES.MEMBER_JOIN:
        return getSidePanelMessageContentAsPerMessageType(message, usersState);
      case NOTIFICATION_TYPES.MEMBER_LEAVE:
        return getSidePanelMessageContentAsPerMessageType(message, usersState);
      case NOTIFICATION_TYPES.IMAGE:
        return <img className="small image" src={message.imgUrl} alt={message.imgAltText} />;
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
      <div className="item">
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
      <div className="item">
        <img className="ui avatar image" src={userDetails.imgUrl} alt={`${userDetails.userName} profile`} />
        <div className="content">
          <p className="header">{userDetails.userName}</p>
          <div className="description">
            {renderMessageContent(message)}
            <div className="float right">
              <b>{tsToDateTime1d1hSensitive(message.timestamp)}</b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageElement;
