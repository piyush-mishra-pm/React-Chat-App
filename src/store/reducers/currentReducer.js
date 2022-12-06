import _ from 'lodash';

import ACTION_TYPES from '../ACTION_TYPES';
import { CURRENT_USER_STATE } from '../INITIAL_STATE';

const currentReducer = (state = CURRENT_USER_STATE, { type, payload }) => {
  state = _.cloneDeep(state);
  switch (type) {
    case ACTION_TYPES.CONVERSATION_CHANGE_CURRENT:
      state.currentConversationId = payload;
      return state;
    case ACTION_TYPES.SEARCH_USER_IN_CONVERSATIONS:
      state.searchUserConversationQuery = payload;
      return state;

    case ACTION_TYPES.CONVERSATION_TEMP_CREATE:
    case ACTION_TYPES.CONVERSATION_TEMP_UPDATE:
      state.tempCurrentConversation = payload;
      return state;
    case ACTION_TYPES.CONVERSATION_TEMP_DELETE:
      state.tempCurrentConversation = {};
      return state;

    default:
      return state;
  }
};

export default currentReducer;
