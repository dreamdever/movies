import { all, takeLatest } from 'redux-saga/effects';
import { loadMovie, loadMovies } from './movie/sagas';
import { MovieActionTypes } from './movie/types';

export default function* rootSaga() {
  return yield all([
    takeLatest(MovieActionTypes.FETCH_MOVIES, loadMovies),
    takeLatest(MovieActionTypes.FETCH_MOVIE, loadMovie)
  ]);
}
