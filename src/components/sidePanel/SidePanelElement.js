import React, { useEffect } from 'react';

const SidePanelElement = (props) => {
  function renderUserImages() {
    return (
      <div>
        {props.users &&
          props.users.map((user) => <img src={user.imgUrl} key={user.userId} alt={`profile of ${user.userName}`} />)}
      </div>
    );
  }

  const renderLastMessage = () => {
    return <div>{props.message}</div>;
  };

  return (
    <React.Fragment>
      {renderUserImages()}
      {renderLastMessage()}
    </React.Fragment>
  );
};

export default SidePanelElement;
