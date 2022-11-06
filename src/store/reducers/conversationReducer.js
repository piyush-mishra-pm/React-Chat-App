import ACTION_TYPES from '../ACTION_TYPES';
import { SEED_CONVERSATIONS } from '../INITIAL_STATE';

export default (state = SEED_CONVERSATIONS, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.MESSAGE_TEXT:
      return {
        ...state,
      };

    case ACTION_TYPES.MESSAGE_IMG:
      return {
        ...state,
      };

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
};
