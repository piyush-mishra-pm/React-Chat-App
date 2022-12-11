import ACTION_TYPES from '../ACTION_TYPES';
import { SEED_CONVERSATIONS } from '../INITIAL_STATE';
import _ from 'lodash';
import NOTIFICATION_TYPES from '../NOTIFICATION_TYPES';

export default function conversationReducer(state = SEED_CONVERSATIONS, { type, payload }) {
  // Cloning the state regardless of action type:
  state = _.cloneDeep(state);

  switch (type) {
    case ACTION_TYPES.MESSAGE_TEXT:
      return messageHelper(state, payload);

    case ACTION_TYPES.MESSAGE_IMG:
      return messageHelper(state, payload);

    case ACTION_TYPES.CONVERSATION_NOTIFICATION:
      if (
        payload.messageObject.messageType === NOTIFICATION_TYPES.MEMBER_JOIN ||
        payload.messageObject.messageType === NOTIFICATION_TYPES.MEMBER_LEAVE
      )
        return userHelper(messageHelper(state, payload), payload);
      else if (payload.messageObject.messageType === NOTIFICATION_TYPES.CONVERSATION_CREATED)
        return messageHelper(state, payload);
      else return state;

    case ACTION_TYPES.CONVERSATION_CREATE:
      state.push(payload);
      return state;

    default:
      return state;
  }
}

function messageHelper(newState, payload) {
  const currentConversationId = payload.currentConversationId;
  const messageObject = payload.messageObject;
  for (let key in newState) {
    if (newState[key].conversationId !== currentConversationId) continue;
    newState[key].messages.push(messageObject);
  }
  return newState;
}

function userHelper(newState, payload) {
  const currentConversationId = payload.currentConversationId;
  const userId = payload.messageObject.modifiedUser;
  for (let key in newState) {
    if (newState[key].conversationId !== currentConversationId) continue;

    if (payload.messageObject.messageType === NOTIFICATION_TYPES.MEMBER_LEAVE) {
      newState[key].users = newState[key].users.filter((id) => id !== userId);
    } else if (payload.messageObject.messageType === NOTIFICATION_TYPES.MEMBER_JOIN) {
      // Add to user list, only if not already there.
      if (newState[key].users.findIndex((id) => id === userId) === -1) newState[key].users.push(userId);
    } else return newState;
  }
  return newState;
}