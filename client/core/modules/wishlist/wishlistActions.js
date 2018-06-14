import {constants} from "../../constants";

export const addMovie = (id, movie) => {
  return {
    type: constants.wishlist.addMovie,
    payload: {
      id,
      movie
    }
  }
};

export const removeMovie = (id) => {
  return {
    type: constants.wishlist.removeMovie,
    payload: {
      id,
    }
  }
};
