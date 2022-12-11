import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Modal from '../Modal';
import ACTION_TYPES from '../../store/ACTION_TYPES';
import {
  getUsersInAndOutOfCurrentConversation,
  getConversationUsingConversationId,
} from '../../utils/conversationUtils';
import NOTIFICATION_TYPES from '../../store/NOTIFICATION_TYPES';

function AddUserToExistingConversation() {
  const history = useHistory();

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const dispatchAddRemoveUserInConversation = useCallback(
    (userId, currentConversationId, notifType) => {
      const notifMessage = notifType === NOTIFICATION_TYPES.MEMBER_JOIN ? `member added` : `member removed`;
      toast.warning(notifMessage);
      dispatch({
        type: ACTION_TYPES.CONVERSATION_NOTIFICATION,
        payload: {
          currentConversationId,
          messageObject: {
            messageType: notifType,
            modifyingUser: state.current.currentUserId, // This user performed addition or removal action.
            modifiedUser: userId, // This user got added or removed.
            timestamp: Date.now(),
          },
        },
      });
    },
    [dispatch, state]
  );

  function onCancelClick() {
    history.push('/');
  }
  function renderModalActions() {
    return (
      <div>
        <Link to="/" className="ui button">
          Close
        </Link>
      </div>
    );
  }
  function renderModalContent() {
    const [usersInCurrentConversation, usersOutOfCurrentConversation] = getUsersInAndOutOfCurrentConversation(
      state.users,
      state.current.currentConversationId,
      state.conversations
    );

    return (
      <div className="ui container">
        <h1>
          {
            getConversationUsingConversationId(state.conversations, state.current.currentConversationId)
              .conversationName
          }
        </h1>
        {
          /* Horizontal divider, only if users in the current conversation exist. */
          usersInCurrentConversation.length ? <hr /> : ''
        }
        <div>Existing:</div>
        <div className="ui middle aligned animated horizontal list">
          {renderExistingUsersInConversation(usersInCurrentConversation)}
        </div>
        {
          /* Horizontal divider, only if users out of the current conversation exist. */
          usersOutOfCurrentConversation.length ? <hr /> : ''
        }
        <div>{usersOutOfCurrentConversation.length ? 'Add:' : ''}</div>
        <div className="ui middle aligned animated list">
          {renderRestOfTheUsersInContact(usersOutOfCurrentConversation)}
        </div>
      </div>
    );
  }

  function renderExistingUsersInConversation(usersAlreadyInConversation) {
    return usersAlreadyInConversation.map((user) => (
      <div className="item" key={user.userId}>
        <img className="ui avatar image" src={user.imgUrl} alt="user profile" />
        <div className="content">
          <div className="header">{user.userName}</div>
          <button
            className={`ui button negative ${usersAlreadyInConversation.length <= 1 && 'disabled'}`}
            onClick={() =>
              dispatchAddRemoveUserInConversation(
                user.userId,
                state.current.currentConversationId,
                NOTIFICATION_TYPES.MEMBER_LEAVE
              )
            }
          >
            -
          </button>
        </div>
      </div>
    ));
  }

  function renderRestOfTheUsersInContact(usersInContact) {
    return usersInContact.map((user) => (
      <div className="item" key={user.userId}>
        <img className="ui avatar image" src={user.imgUrl} alt="user profile" />
        <div className="content">
          <div className="header">{user.userName}</div>
          <button
            className="ui button positive"
            onClick={() =>
              dispatchAddRemoveUserInConversation(
                user.userId,
                state.current.currentConversationId,
                NOTIFICATION_TYPES.MEMBER_JOIN
              )
            }
          >
            +
          </button>
        </div>
      </div>
    ));
  }
  return (
    <Modal
      header="Modify users in this coversation?"
      content={renderModalContent()}
      modalActions={renderModalActions()}
      onCloseModal={onCancelClick}
    />
  );
}

export default AddUserToExistingConversation;
