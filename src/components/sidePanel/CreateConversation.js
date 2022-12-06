import React, { useCallback, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

import Modal from '../Modal';
import ACTION_TYPES from '../../store/ACTION_TYPES';
import { getExistingConversationsContainingTheSameUsers } from '../../utils/conversationUtils';

function CreateConversation() {
  const state = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();
  const dispatchCreateConversationAddRemoveUser = useCallback(
    (actionType, userIDs = []) => {
      switch (actionType) {
        case ACTION_TYPES.CONVERSATION_TEMP_CREATE:
          dispatch({
            type: ACTION_TYPES.CONVERSATION_TEMP_CREATE,
            payload: {
              coversationId: uuidv4(),
              users: [state.current.currentUserId],
              messages: [],
            },
          });
          break;
        case ACTION_TYPES.CONVERSATION_TEMP_UPDATE:
          // Adding or removing users: only updating users[].
          dispatch({
            type: ACTION_TYPES.CONVERSATION_TEMP_UPDATE,
            payload: {
              ...state.current.tempCurrentConversation,
              users: userIDs,
            },
          });
          break;
        case ACTION_TYPES.CONVERSATION_TEMP_DELETE:
          dispatch({
            type: ACTION_TYPES.CONVERSATION_TEMP_DELETE,
          });
          break;
        case ACTION_TYPES.CONVERSATION_CREATE:
          // Creating conversation from temp conversation in currentState.
          // Make sure this is called before TEMP_CONVERSATION_DELETE, as depends on temp object state to create.
          dispatch({
            type: ACTION_TYPES.CONVERSATION_CREATE,
            payload: state.current.tempCurrentConversation,
          });
          break;
        default:
          console.error(`Dispatch function doesn't exist for ACTION_TYPE: ${actionType}.`);
          break;
      }
    },
    [dispatch, state]
  );

  useEffect(() => {
    // When Modal opened, check if atleast an empty temp conversation object exists:
    if (Object.keys(state.current.tempCurrentConversation).length === 0) {
      dispatchCreateConversationAddRemoveUser(ACTION_TYPES.CONVERSATION_TEMP_CREATE);
    }
  }, [dispatchCreateConversationAddRemoveUser, state]);

  function renderModalActions() {
    return (
      <div>
        <button className="ui button positive" onClick={() => onCreateConversationClick()}>
          Create Conversation
        </button>
        <button
          className="ui button negative"
          onClick={() => dispatchCreateConversationAddRemoveUser(ACTION_TYPES.CONVERSATION_TEMP_DELETE)}
        >
          Clear
        </button>
        <Link to="/" className="ui button">
          Close
        </Link>
      </div>
    );
  }

  function onCreateConversationClick() {
    // Create Conversation from Temp. Then Delete the temp.
    dispatchCreateConversationAddRemoveUser(ACTION_TYPES.CONVERSATION_CREATE);
    dispatchCreateConversationAddRemoveUser(ACTION_TYPES.CONVERSATION_TEMP_DELETE);
    closeModal();
  }

  function closeModal() {
    history.push('/');
  }

  function renderModalContent() {
    const currentTempConversation = state.current.tempCurrentConversation;

    return (
      <div className="ui container">
        <div>
          Coversations with same users:
          <div className="ui huge labels">{getConversationsWithSameUsers()}</div>
        </div>
        <hr />
        <div>
          Existing:
          <div className="ui huge labels">{renderExistingUsersInCurrentTempConversation(currentTempConversation)}</div>
        </div>
        <hr />
        <div>
          Add:
          <div className="ui huge labels">
            {renderUsersOutOfCurrentTempConversation(currentTempConversation, state.users)}
          </div>
        </div>
      </div>
    );
  }

  function getConversationsWithSameUsers() {
    const usersInThisConversation = state.current.tempCurrentConversation.users;
    const existingConversationsContainingTheSameUsers = getExistingConversationsContainingTheSameUsers(
      usersInThisConversation,
      state.conversations
    );
    return existingConversationsContainingTheSameUsers.map((conversation) => (
      <div key={conversation.conversationId} className="ui label">
        {/* todo: Add conversation Name */}
        ID:{conversation.conversationId}
      </div>
    ));
  }

  function renderExistingUsersInCurrentTempConversation(currentTempConversation) {
    if (!currentTempConversation || !currentTempConversation.users || currentTempConversation.users.length === 0)
      return <p>No one yet!</p>;
    return currentTempConversation.users.map((userId) => {
      const userObject = getUserObjectFromUserId(userId);
      return (
        <div className="ui image label" key={userId}>
          <img src={userObject.imgUrl} alt={`profile ${userObject.imgUrl}`} />
          {userObject.userName}
          <i
            className={`ui button negative ${userId === state.current.currentUserId ? 'disabled' : ''}`}
            onClick={() => onExistingUserClickedRemoveExistingUser(userId)}
          >
            -
          </i>
        </div>
      );
    });
  }

  function onExistingUserClickedRemoveExistingUser(userId) {
    dispatchCreateConversationAddRemoveUser(
      ACTION_TYPES.CONVERSATION_TEMP_UPDATE,
      _.cloneDeep(state.current.tempCurrentConversation.users).filter((uId) => uId !== userId)
    );
  }

  function renderUsersOutOfCurrentTempConversation(currentTempConversation) {
    const allUserIds = state.users.map((user) => user.userId);
    const usersOutOfCurrentConversation = _.difference(allUserIds, currentTempConversation.users);
    return usersOutOfCurrentConversation.map((userId) => {
      const userObject = getUserObjectFromUserId(userId);
      return (
        <div className="ui image label" key={userId}>
          <img src={userObject.imgUrl} alt={`profile ${userObject.imgUrl}`} />
          {userObject.userName}
          <i
            className={`ui positive button floated right ${userId === state.current.currentUserId ? 'disabled' : ''}`}
            onClick={() => onClickOutOfConversationUserAddAsAConversationUser(userId)}
          >
            +
          </i>
        </div>
      );
    });
  }

  function onClickOutOfConversationUserAddAsAConversationUser(userId) {
    let clonedState = _.cloneDeep(state.current.tempCurrentConversation.users);
    clonedState.push(userId);
    dispatchCreateConversationAddRemoveUser(ACTION_TYPES.CONVERSATION_TEMP_UPDATE, clonedState);
  }

  function getUserObjectFromUserId(userId) {
    return state.users.find((user) => user.userId === userId);
  }

  return (
    <div>
      <Modal
        header="Add users to this chat?"
        content={renderModalContent()}
        modalActions={renderModalActions()}
        onCloseModal={closeModal}
      />
    </div>
  );
}

export default CreateConversation;
