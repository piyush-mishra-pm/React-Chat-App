import { combineReducers } from 'redux';
import conversationReducer from './conversationReducer';
import userReducer from './userReducer';
import currentReducer from './currentReducer';

export default combineReducers({
  conversations: conversationReducer,
  users: userReducer,
  current: currentReducer,
});
