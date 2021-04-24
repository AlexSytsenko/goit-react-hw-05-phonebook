
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import contactsReducer from './contacts/reducer';

// import rootReducer from './contacts/rootReducer';

// const store = createStore(rootReducer, composeWithDevTools());
const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;








//Redux
// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'; для подключения devTools

// import rootReducer from './contacts/rootReducer';

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;