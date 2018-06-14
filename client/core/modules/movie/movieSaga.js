import { takeLatest, call, all, put } from 'redux-saga/effects';
import { constants, endpoints } from '../../../core/constants';
import {request} from "../../api/requests";
import {loadMovies, loadMovie, unloadMovie} from "./movieActions";

function* getMoviesAction({ payload: { endpoint } }) {
  const { response, error } = yield call(request, 'GET', endpoint);
  const movies = {};

  if (error) {
    yield;
  }

  response.data.results.map(({id, title, poster_path, vote_average}) => {
    movies[id] = {
      title: title,
      poster: 'http://image.tmdb.org/t/p/w342/' + poster_path,
      rating: vote_average,
    };
  });

  yield put(loadMovies(movies));
}

function* getMovieAction({ payload: { tmdbId } }) {
  yield put(unloadMovie());

  const { response, error } = yield call(request, 'GET', endpoints.tmdb.endpoint.movie(tmdbId));

  if (error) {
    yield;
  }

  const { poster_path, title, overview, vote_average, release_date, backdrop_path } = response.data;

  const movie = {
    title: title,
    poster: 'http://image.tmdb.org/t/p/w185/' + poster_path,
    rating: vote_average,
    description: overview,
    releaseDate: release_date,
    backgroundImage: 'http://image.tmdb.org/t/p/w1280/' + backdrop_path,
    loaded: true,
  };

  yield put(loadMovie(movie));
}

export default function* movieSaga() {
  yield all([
    takeLatest(constants.movie.getMovies, getMoviesAction),
    takeLatest(constants.movie.getMovie, getMovieAction),
  ]);
}
