import React, { useCallback, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import { toast } from 'react-toastify';

import Modal from '../Modal';
import ACTION_TYPES from '../../store/ACTION_TYPES';
import { getExistingConversationsContainingTheSameUsers } from '../../utils/conversationUtils';
import NOTIFICATION_TYPES from '../../store/NOTIFICATION_TYPES';

function CreateConversation() {
  const state = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();
  const dispatchCreateConversationAddRemoveUser = useCallback(
    (actionType, updatedState = { ...state.current.tempCurrentConversation }) => {
      switch (actionType) {
        case ACTION_TYPES.CONVERSATION_TEMP_CREATE:
          dispatch({
            type: ACTION_TYPES.CONVERSATION_TEMP_CREATE,
            payload: {
              conversationId: uuidv4(),
              users: [state.current.currentUserId],
              messages: [],
              conversationName: '',
            },
          });
          break;
        case ACTION_TYPES.CONVERSATION_TEMP_UPDATE:
          // Adding or removing users: only updating users[].
          dispatch({
            type: ACTION_TYPES.CONVERSATION_TEMP_UPDATE,
            payload: {
              ...updatedState,
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

  const dispatchMessage = useCallback(() => {
    dispatch({
      type: ACTION_TYPES.CONVERSATION_NOTIFICATION,
      payload: {
        currentConversationId: state.current.tempCurrentConversation.conversationId,
        messageObject: {
          messageType: NOTIFICATION_TYPES.CONVERSATION_CREATED,
          creator: state.current.currentUserId,
          conversationName: state.current.tempCurrentConversation.conversationName,
          timestamp: Date.now(),
        },
      },
    });
  }, [dispatch, state]);

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
    dispatchMessage();
    toast.success(`You created conversation: ${state.current.tempCurrentConversation.conversationName}!`);
    dispatchCreateConversationAddRemoveUser(ACTION_TYPES.CONVERSATION_TEMP_DELETE);
    closeModal();
  }

  function closeModal() {
    history.push('/');
  }

  function renderModalContent() {
    const currentTempConversation = state.current.tempCurrentConversation;
    const conversationsWithSameUsers = getConversationsWithSameUsers();
    const existingUsersInCurrentTempConversation =
      renderExistingUsersInCurrentTempConversation(currentTempConversation);
    const usersOutOfCurrentTempConversation = renderUsersOutOfCurrentTempConversation(
      currentTempConversation,
      state.users
    );
    return (
      <div className="ui container">
        <div className="ui fluid action input">
          <input
            type="text"
            placeholder="Name this new conversation ..."
            value={state.current.tempCurrentConversation.conversationName || ''}
            onChange={(e) => onNameConversationClick(e.target.value)}
          />
        </div>
        <div>
          {conversationsWithSameUsers.length ? <h3>Conversations with same users:</h3> : ''}
          <div className="ui huge labels">{conversationsWithSameUsers}</div>
        </div>
        {
          /* Horizontal divider only appears when some matching conversations exist */
          conversationsWithSameUsers.length ? <hr /> : ''
        }
        <div>
          {existingUsersInCurrentTempConversation.length ? <h3>Existing:</h3> : ''}
          <div className="ui huge labels">{existingUsersInCurrentTempConversation}</div>
        </div>
        {
          /* Horizontal divider only appears when some users remaining and added */
          existingUsersInCurrentTempConversation.length && usersOutOfCurrentTempConversation.length ? <hr /> : ''
        }
        <div>
          {usersOutOfCurrentTempConversation.length ? <h3>Add:</h3> : ''}
          <div className="ui huge labels">{usersOutOfCurrentTempConversation}</div>
        </div>
      </div>
    );
  }

  function onNameConversationClick(inputtedConversationName) {
    const newTempCurrentConversationState = _.cloneDeep(state.current.tempCurrentConversation);
    newTempCurrentConversationState.conversationName = inputtedConversationName;
    dispatchCreateConversationAddRemoveUser(ACTION_TYPES.CONVERSATION_TEMP_UPDATE, newTempCurrentConversationState);
  }

  function getConversationsWithSameUsers() {
    const usersInThisConversation = state.current.tempCurrentConversation.users;
    const existingConversationsContainingTheSameUsers = getExistingConversationsContainingTheSameUsers(
      usersInThisConversation,
      state.conversations
    );
    return existingConversationsContainingTheSameUsers.map((conversation) => (
      <div key={conversation.conversationId} className="ui label">
        {conversation.conversationName}
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
    const newTempConversationState = _.cloneDeep(state.current.tempCurrentConversation);
    newTempConversationState.users = newTempConversationState.users.filter((uId) => uId !== userId);
    dispatchCreateConversationAddRemoveUser(ACTION_TYPES.CONVERSATION_TEMP_UPDATE, newTempConversationState);
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
    let newTempCurrentConversationState = _.cloneDeep(state.current.tempCurrentConversation);
    newTempCurrentConversationState.users.push(userId);
    dispatchCreateConversationAddRemoveUser(ACTION_TYPES.CONVERSATION_TEMP_UPDATE, newTempCurrentConversationState);
  }

  function getUserObjectFromUserId(userId) {
    return state.users.find((user) => user.userId === userId);
  }

  return (
    <div>
      <Modal
        header="Create new Conversation?"
        content={renderModalContent()}
        modalActions={renderModalActions()}
        onCloseModal={closeModal}
      />
    </div>
  );
}

export default CreateConversation;
