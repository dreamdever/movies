import { Movie } from './model';

export enum MovieActionTypes {
  FETCH_MOVIES = '@movies/FETCH_MOVIES',
  FETCH_MOVIE = '@movies/FETCH_MOVIE',
  FETCH_MOVIES_FAILED = '@movies/FETCH_MOVIES_FAILED',
  FETCH_MOVIE_FAILED = '@movies/FETCH_MOVIE_FAILED',
  SET_MOVIES = '@movies/SET_MOVIES',
  SET_MOVIE = '@movies/SET_MOVIE',
  SET_FAVOURITE_MOVIES = '@movies/SET_FAVOURITE_MOVIES',
  ADD_FAVOURITE_MOVIE = '@movies/ADD_FAVOURITE_MOVIE',
  REMOVE_FAVOURITE_MOVIE = '@movies/REMOVE_FAVOURITE_MOVIE',
  SET_LAST_SEARCH = '@movies/SET_LAST_SEARCH'
}

export interface MoviesState {
  loading: boolean;
  error: boolean;
  message: string;
  movies: Movie[];
  movie?: Movie;
  lastSearch: string;
  favouriteMovies: Movie[];
  pagination: Pagination;
}

export interface Pagination {
  total: number;
  page: number;
}

type FetchMoviesActionType = {
  type: MovieActionTypes.FETCH_MOVIES;
  payload: {
    search: string;
    page: number;
  };
};
type FetchMovieActionType = {
  type: MovieActionTypes.FETCH_MOVIE;
  payload: string;
};

type FetchMoviesFailedActionType = {
  type: MovieActionTypes.FETCH_MOVIES_FAILED;
  payload: string;
};

type FetchMovieFailedActionType = {
  type: MovieActionTypes.FETCH_MOVIE_FAILED;
  payload: string;
};

type SetMoviesActionType = {
  type: MovieActionTypes.SET_MOVIES;
  payload: {
    movies: Movie[];
    pagination: Pagination;
  };
};

type SetMovieActionType = {
  type: MovieActionTypes.SET_MOVIE;
  payload: Movie;
};

type SetFavouriteMoviesActionType = {
  type: MovieActionTypes.SET_FAVOURITE_MOVIES;
};

type AddFavouriteMovieActionType = {
  type: MovieActionTypes.ADD_FAVOURITE_MOVIE;
  payload: Movie;
};

type RemoveFavouriteMovieActionType = {
  type: MovieActionTypes.REMOVE_FAVOURITE_MOVIE;
  payload: string;
};

type SetLastSearchActionType = {
  type: MovieActionTypes.SET_LAST_SEARCH;
  payload: string;
};

export type MovieActions =
  | FetchMoviesActionType
  | FetchMovieActionType
  | FetchMoviesFailedActionType
  | FetchMovieFailedActionType
  | SetMoviesActionType
  | SetMovieActionType
  | SetFavouriteMoviesActionType
  | AddFavouriteMovieActionType
  | SetLastSearchActionType
  | RemoveFavouriteMovieActionType;
