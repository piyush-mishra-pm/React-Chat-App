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

  // <div class="ui celled list">
  //   <div class="item">
  //     <img class="ui avatar image" src="/images/avatar/small/helen.jpg">
  //     <div class="content">
  //       <div class="header">Snickerdoodle</div>
  //       An excellent companion
  //     </div>
  //   </div>
  //   <div class="item">
  //     <img class="ui avatar image" src="/images/avatar/small/daniel.jpg">
  //     <div class="content">
  //       <div class="header">Poodle</div>
  //       A poodle, its pretty basic
  //     </div>
  //   </div>
  //   <div class="item">
  //     <img class="ui avatar image" src="/images/avatar/small/daniel.jpg">
  //     <div class="content">
  //       <div class="header">Paulo</div>
  //       He's also a dog
  //     </div>
  //   </div>
  // </div>

  const renderUserNames = () => {
    const concatenatedUserNames = props.users
      .reduce((previousValue, currentValue) => previousValue + ', ' + currentValue.userName, '')
      .slice(2);
    console.log(concatenatedUserNames);
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
