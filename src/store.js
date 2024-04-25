import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

// Define your initial state if needed
const initialState = {};

// Create the store
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, logger)
);

// Optionally, you can subscribe to the store to log state changes
store.subscribe(() => {
  console.log('State updated:', store.getState());
});

export default store;
