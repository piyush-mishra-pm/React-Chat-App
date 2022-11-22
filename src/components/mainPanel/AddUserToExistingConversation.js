import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Modal from '../Modal';

function AddUserToExistingConversation() {
  const history = useHistory();
  const state = useSelector((state) => state);
  function onCancelClick() {
    console.log('clicked cancel');
    history.push('/');
  }
  function renderModalActions() {
    return (
      <div>
        <button className="ui button negative" onClick={onCancelClick}>
          Cancel
        </button>
        <Link to="/" className="ui button">
          Confirm
        </Link>
      </div>
    );
  }
  function renderModalContent() {
    const usersAlreadyInConversation = state.users;
    const restUsersInContact = state.users;
    return (
      <div className="ui container">
        <div>Existing:</div>
        <div class="ui middle aligned animated list">
          {renderExistingUsersInConversation(usersAlreadyInConversation)}
        </div>
        <div>Add:</div>
        <div class="ui middle aligned animated list">{renderRestOfTheUsersInContact(restUsersInContact)}</div>
      </div>
    );
  }

  function renderExistingUsersInConversation(usersAlreadyInConversation) {
    return usersAlreadyInConversation.map((user) => (
      <div className="item">
        <img className="ui avatar image" src={user.imgUrl} alt="user profile" />
        <div className="content">
          <div className="header">{user.userName}</div>
          <button className="ui button negative">-</button>
        </div>
      </div>
    ));
  }

  function renderRestOfTheUsersInContact(usersInContact) {
    return usersInContact.map((user) => (
      <div className="item">
        <img className="ui avatar image" src={user.imgUrl} alt="user profile" />
        <div className="content">
          <div className="header">{user.userName}</div>
        </div>
      </div>
    ));
  }
  return (
    <Modal
      header="Add users to this chat ?"
      content={renderModalContent()}
      modalActions={renderModalActions()}
      onCloseModal={onCancelClick}
    />
  );
}

export default AddUserToExistingConversation;
