
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import users from './Users';

export default combineReducers({
  users,
  form: formReducer
});
