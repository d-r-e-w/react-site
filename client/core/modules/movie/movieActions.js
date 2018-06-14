import {constants} from "../../constants";

export const getMovies = (endpoint) => {
  return {
    type: constants.movie.getMovies,
    payload: {
      endpoint
    }
  }
};

export const loadMovies = (movies) => {
  return {
    type: constants.movie.loadMovies,
    payload: {
      movies,
    }
  }
};

export const getMovie = (tmdbId) => {
  return {
    type: constants.movie.getMovie,
    payload: {
      tmdbId,
    }
  }
};

export const loadMovie = (movie) => {
  return {
    type: constants.movie.loadMovie,
    payload: {
      movie,
    }
  }
};

export const unloadMovie = () => {
  return {
    type: constants.movie.unloadMovie,
    payload: {}
  }
};