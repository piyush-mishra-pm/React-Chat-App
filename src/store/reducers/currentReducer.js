import ACTION_TYPES from '../ACTION_TYPES';
import { CURRENT_USER_STATE } from '../INITIAL_STATE';

const currentReducer = (state = CURRENT_USER_STATE, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.CONVERSATION_CHANGE_CURRENT:
      return {
        ...state,
        currentConversationId: payload,
      };
    case ACTION_TYPES.SEARCH_USER_IN_CONVERSATIONS:
      return {
        ...state,
        searchUserConversationQuery: payload,
      };

    default:
      return state;
  }
};

export default currentReducer;
