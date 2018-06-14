import { constants } from "../../constants";
import store from "store2";
import { Map } from "immutable";

const movies = store.namespace('movies');
const initialState = Map(movies.getAll());

const wishlist = (state = initialState, action) => {
  switch (action.type) {
    case constants.wishlist.addMovie:
      movies.set(action.payload.id, action.payload.movie);
      return state = Map(movies.getAll());

    case constants.wishlist.removeMovie:
      movies.remove(action.payload.id);
      return state = Map(movies.getAll());

    default:
      return state;
  }
};

export default wishlist;