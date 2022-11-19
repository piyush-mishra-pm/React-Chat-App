import React from 'react';

import { tsToDateTime1d1hSensitive } from '../../utils/conversationUtils';

function MessageElement({ userDetails, message }) {
  const renderMessageContent = (message, userDetails) => {
    switch (message.messageType) {
      case 'text':
        return message.message;
      case 'join':
        return `${userDetails.userName} joined! `;
      case 'leave':
        return `${userDetails.userName} left! `;
      case 'img':
        return <img className="small image" src={message.imgUrl} alt={message.imgAltText} />;
      default:
        return 'No conversation yet !';
    }
  };
  return (
    <div className="item">
      <img className="ui avatar image" src={userDetails.imgUrl} alt={`${userDetails.userName} profile`} />
      <div className="content">
        <p className="header">{userDetails.userName}</p>
        <div className="description">
          {renderMessageContent(message, userDetails)}
          <div className="float right">
            <b>{tsToDateTime1d1hSensitive(message.timestamp)}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageElement;
