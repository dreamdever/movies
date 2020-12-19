import { MovieActionTypes, Pagination } from './types';
import { action } from 'typesafe-actions';
import { Movie } from './model';

export const fetchMoviesAction = (search?: string, page?: number) =>
  action(MovieActionTypes.FETCH_MOVIES, { search, page });
export const fetchMovieAction = (movieId: string) => action(MovieActionTypes.FETCH_MOVIE, movieId);
export const fetchMoviesFailedAction = (message: string) => action(MovieActionTypes.FETCH_MOVIES_FAILED, message);
export const fetchMovieFailedAction = (message: string) => action(MovieActionTypes.FETCH_MOVIE_FAILED, message);
export const setMoviesAction = (movies: Movie[], pagination: Pagination) =>
  action(MovieActionTypes.SET_MOVIES, { movies, pagination });
export const setMovieAction = (movie: Movie) => action(MovieActionTypes.SET_MOVIE, movie);
export const setFavouriteMoviesAction = () => action(MovieActionTypes.SET_FAVOURITE_MOVIES);
export const addFavouriteMovieAction = (movie: Movie) => action(MovieActionTypes.ADD_FAVOURITE_MOVIE, movie);
export const removeFavouriteMovieAction = (movieId: string) => action(MovieActionTypes.REMOVE_FAVOURITE_MOVIE, movieId);
