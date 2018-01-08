import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerReducer } from 'react-router-redux';

import { actions } from './actions/actions';
const getAllActionTypes = actions.getAllActionTypes;
const searchActionTypes = actions.searchActionTypes;

const initialState = {
  movies: null,
  isLoading: true,
  error: null
};

// REDUCER
export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
  case getAllActionTypes.MAKE_REQUEST:
    return {...state, isLoading: true };
  case getAllActionTypes.RECEIVE_ALL_MOVIES:
    return {...state, isLoading: false, all: action.all };
  case getAllActionTypes.REQUEST_ERROR:
    return {...state, isLoading: false, error: action.error };
  default:
    return state;
  }
};

const reducers = combineReducers({
  movies: moviesReducer,
  routing: routerReducer
});
export const initStore = (historyMiddleware, initialState = initialState) => {
  return createStore(reducers, initialState, applyMiddleware(historyMiddleware, thunkMiddleware));
};
