import ACTION_TYPES from '../ACTION_TYPES';
import { SEED_USERS } from '../INITIAL_STATE';

export default function useReducer(state = SEED_USERS, { type, payload }) {
  switch (type) {
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
