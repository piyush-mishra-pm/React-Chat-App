import { combineReducers } from 'redux';
import conversationReducer from './conversationReducer';
import userReducer from './userReducer';

export default combineReducers({
  conversations: conversationReducer,
  users: userReducer,
});
