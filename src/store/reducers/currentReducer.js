import ACTION_TYPES from '../ACTION_TYPES';
import { CURRENT_USER_STATE } from '../INITIAL_STATE';

const currentReducer = (state = CURRENT_USER_STATE, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.CONVERSATION_CHANGE_CURRENT:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default currentReducer;