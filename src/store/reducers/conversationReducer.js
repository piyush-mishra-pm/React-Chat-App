import ACTION_TYPES from '../ACTION_TYPES';
import { SEED_CONVERSATIONS } from '../INITIAL_STATE';

export default function conversationReducer(state = SEED_CONVERSATIONS, { type, payload }) {
  switch (type) {
    case ACTION_TYPES.MESSAGE_TEXT:
      return helper(state, payload);

    case ACTION_TYPES.MESSAGE_IMG:
      return helper(state, payload);

    case ACTION_TYPES.CONVERSATION_JOIN:
      return {
        ...state,
      };
    case ACTION_TYPES.CONVERSATION_LEAVE:
      return {
        ...state,
      };

    default:
      return state;
  }
}

function helper(state, payload, type) {
  const currentConversationId = payload.currentConversationId;
  const messageObject = payload.messageObject;
  let newState = JSON.parse(JSON.stringify(state));
  for (let key in newState) {
    if (newState[key].conversationId !== currentConversationId) continue;
    newState[key].messages.push(messageObject);
  }
  return newState;
}