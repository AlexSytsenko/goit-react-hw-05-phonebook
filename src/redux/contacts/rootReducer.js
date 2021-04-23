import { combineReducers } from 'redux';

import contactsReducer from './reducer';


const rooReducer = combineReducers({
  contacts: contactsReducer,
});

export default rooReducer;