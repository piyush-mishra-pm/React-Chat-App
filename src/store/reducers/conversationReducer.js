import ACTION_TYPES from '../ACTION_TYPES';
import { SEED_CONVERSATIONS } from '../INITIAL_STATE';
import _ from 'lodash';

export default function conversationReducer(state = SEED_CONVERSATIONS, { type, payload }) {
  switch (type) {
    case ACTION_TYPES.MESSAGE_TEXT:
      return messageHelper(state, payload);

    case ACTION_TYPES.MESSAGE_IMG:
      return messageHelper(state, payload);

    case ACTION_TYPES.CONVERSATION_JOIN:
      return userHelper(messageHelper(state, payload), payload);
    case ACTION_TYPES.CONVERSATION_LEAVE:
      return userHelper(messageHelper(state, payload), payload);

    default:
      return state;
  }
}

function messageHelper(state, payload) {
  const currentConversationId = payload.currentConversationId;
  const messageObject = payload.messageObject;
  let newState = _.cloneDeep(state); // Deep cloning state.
  for (let key in newState) {
    if (newState[key].conversationId !== currentConversationId) continue;
    newState[key].messages.push(messageObject);
  }
  return newState;
}

function userHelper(stateWithMessage, payload) {
  const currentConversationId = payload.currentConversationId;
  const userId = payload.messageObject.sender;
  const isLeaving = payload.messageObject.messageType === 'leave';
  let newState = _.cloneDeep(stateWithMessage); // Deep cloning state.
  for (let key in newState) {
    if (newState[key].conversationId !== currentConversationId) continue;
    if (isLeaving) {
      newState[key].users = newState[key].users.filter((id) => id !== userId);
    } else {
      // Add to user list, only if not already there.
      if (newState[key].users.findIndex((id) => id === userId) === -1) newState[key].users.push(userId);
    }
  }
  return newState;
}