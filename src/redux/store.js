import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import movieReducer from './reducers/movieReducers';

const store = createStore(movieReducer, applyMiddleware(thunk));

export default store;