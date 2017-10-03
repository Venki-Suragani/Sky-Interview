import { combineReducers } from 'redux';
import reducer from '../logic/reducer';
import MessagesReducer from '../logic/MessagesReducer';

export default function createReducer() {
  return combineReducers({
    todos: reducer,
    MessagesReducer

  });
}
