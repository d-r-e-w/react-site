import { all, fork } from 'redux-saga/effects';
import movieSaga from "./modules/movie/movieSaga";
import genreSaga from "./modules/genre/genreSaga";

export default function* rootSaga() {
  yield all([
    fork(movieSaga),
    fork(genreSaga),
  ]);
}
