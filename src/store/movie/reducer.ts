import { Reducer } from 'react';
import { MovieActions, MovieActionTypes, MoviesState } from './types';

const initialState: MoviesState = {
  loading: false,
  error: false,
  message: '',
  movies: [],
  movie: undefined,
  favouriteMovies: [],
  pagination: {
    total: 0,
    page: 1
  }
};

const movies: Reducer<MoviesState, MovieActions> = (state = initialState, action) => {
  let favouriteMovies;

  switch (action.type) {
    case MovieActionTypes.FETCH_MOVIES:
    case MovieActionTypes.FETCH_MOVIE:
      return {
        ...state,
        loading: true
      };
    case MovieActionTypes.FETCH_MOVIES_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload,
        movies: []
      };
    case MovieActionTypes.FETCH_MOVIE_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload,
        movie: undefined
      };
    case MovieActionTypes.SET_MOVIES:
      return {
        ...state,
        loading: false,
        error: false,
        movies: action.payload.movies,
        pagination: action.payload.pagination
      };
    case MovieActionTypes.SET_MOVIE:
      return {
        ...state,
        loading: false,
        error: false,
        movie: action.payload
      };
    case MovieActionTypes.SET_FAVOURITE_MOVIES:
      favouriteMovies = localStorage.getItem('favouriteMovies');
      return {
        ...state,
        favouriteMovies: favouriteMovies ? JSON.parse(favouriteMovies) : []
      };
    case MovieActionTypes.ADD_FAVOURITE_MOVIE:
      favouriteMovies = [...state.favouriteMovies, action.payload];
      localStorage.setItem('favouriteMovies', JSON.stringify(favouriteMovies));
      return {
        ...state,
        favouriteMovies
      };
    case MovieActionTypes.REMOVE_FAVOURITE_MOVIE:
      favouriteMovies = state.favouriteMovies.filter((movie) => movie.id !== action.payload);
      localStorage.setItem('favouriteMovies', JSON.stringify(favouriteMovies));
      return {
        ...state,
        favouriteMovies
      };
    default:
      return state;
  }
};

export default movies;
