import {constants} from "../../constants";

export const getGenres = () => {
  return {
    type: constants.genre.getGenres,
    payload: {}
  }
};

export const loadGenres = (genres) => {
  return {
    type: constants.genre.loadGenres,
    payload: {
      genres,
    }
  }
};

export const getMovies = (genreId) => {
  return {
    type: constants.genre.getMovies,
    payload: {
      genreId,
    }
  }
};

export const loadMovies = (movies) => {
  return {
    type: constants.genre.loadMovies,
    payload: {
      movies,
    }
  }
};

export const unloadMovies = () => {
  return {
    type: constants.genre.unloadMovies,
    payload: {}
  }
};