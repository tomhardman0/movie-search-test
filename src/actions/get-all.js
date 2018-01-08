import { Api } from '../clients/api';

export const getAllActionTypes = {
  MAKE_REQUEST: 'MAKE_REQUEST',
  RECEIVE_ALL_MOVIES: 'RECEIVE_ALL_MOVIES',
  REQUEST_ERROR: 'REQUEST_ERROR'
};

export const requestAllMovies = () => async (dispatch) => {
  dispatch({ type: getAllActionTypes.MAKE_REQUEST });
  try {
    const movies = await Api.getAllMovies();
    dispatch({ type: getAllActionTypes.RECEIVE_ALL_MOVIES, all: JSON.parse(movies) });
  } catch (e) {
    dispatch({ type: getAllActionTypes.REQUEST_ERROR, error: e.stack });
  }
};
