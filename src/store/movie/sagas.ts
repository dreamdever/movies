import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';
import {
  fetchMovieAction,
  fetchMovieFailedAction,
  fetchMoviesAction,
  fetchMoviesFailedAction,
  setLastSearchAction,
  setMovieAction,
  setMoviesAction
} from './actions';
import { Movie } from './model';
import { MovieDto } from '../../dtos/MovieDto';
import { plainToClass } from 'class-transformer';

export function* loadMovies({ payload }: ReturnType<typeof fetchMoviesAction>) {
  try {
    const { movies: state } = yield select();
    const search = payload.search && payload.search.length >= 3 ? payload.search : state.lastSearch;
    const page = payload.page || 1;
    const { data } = yield call(api.get, `&s=${search}&page=${page}`);

    if (!data.Error) {
      yield put(setLastSearchAction(search));
      yield put(
        setMoviesAction(plainToClass<Movie, MovieDto>(Movie, data.Search), {
          total: data.totalResults,
          page
        })
      );
    } else {
      yield put(fetchMoviesFailedAction(data.Error));
    }
  } catch (e) {
    yield put(fetchMoviesFailedAction('Failed to request API.'));
  }
}

export function* loadMovie({ payload }: ReturnType<typeof fetchMovieAction>) {
  try {
    const { movies: state } = yield select();
    const loadedMovie = state.favouriteMovies.find((movie: Movie) => movie.id === payload);

    if (loadedMovie) {
      yield put(setMovieAction(loadedMovie));
    } else {
      const { data } = yield call(api.get, `&i=${payload}`);
      if (!data.Error) {
        yield put(setMovieAction(plainToClass<Movie, MovieDto>(Movie, data as MovieDto)));
      } else {
        yield put(fetchMovieFailedAction(data.Error));
      }
    }
  } catch (e) {
    yield put(fetchMovieFailedAction('Failed to request API.'));
  }
}
