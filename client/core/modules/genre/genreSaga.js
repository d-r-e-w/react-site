import { takeLatest, call, all, put } from 'redux-saga/effects';
import { constants, endpoints } from '../../../core/constants';
import {request} from "../../api/requests";
import {unloadMovies, loadGenres, loadMovies} from "./genreActions";

function* getGenresAction() {
  const { response, error } = yield call(request, 'GET', endpoints.tmdb.endpoint.genres);
  const genres = [];

  if (error) {
    yield;
  }

  response.data.genres.map(({id, name}) => {
    genres.push({id, name});
  });

  genres.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }

    if (a.name < b.name) {
      return -1;
    }

    return 0;
  });

  yield put(loadGenres(genres));
}

function* getMoviesAction({ payload: { genreId } }) {
  yield put(unloadMovies());

  const { response, error } = yield call(request, 'GET', endpoints.tmdb.endpoint.genre(genreId));
  const movies = {};

  if (error) {
    alert('GG');

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

export default function* genreSaga() {
  yield all([
    takeLatest(constants.genre.getGenres, getGenresAction),
    takeLatest(constants.genre.getMovies, getMoviesAction),
  ]);
}
