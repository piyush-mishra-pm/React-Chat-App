import React from 'react';

const MAX_PROFILE_IMAGES_IN_1_ROW = 2;

const SidePanelElement = (props) => {
  const renderUserImages = () => {
    return (
      <React.Fragment>
        {props.users &&
          props.users.map((user, index) => {
            return index < MAX_PROFILE_IMAGES_IN_1_ROW ? (
              <img
                className="ui avatar image tiny"
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
    const concatenatedUserNames = props.users
      .reduce((previousValue, currentValue) => previousValue + ', ' + currentValue.userName, '')
      .slice(2);
    return <p>{concatenatedUserNames}</p>;
  };

  return (
    <div className="item relaxed">
      {renderUserImages()}
      <div className="left floated content">
        <div className="header">{renderUserNames()}</div>
        {/* Last Message in the conversation: */ props.message}
      </div>
    </div>
  );
};;;;;;;;;

export default SidePanelElement;
