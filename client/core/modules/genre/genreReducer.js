import { Map, List } from 'immutable';
import { constants } from "../../constants";

const initialState = Map({
  list: List([]),
  movies: Map({}),
});

const genre = (state = initialState, action) => {
  switch (action.type) {
    case constants.genre.loadGenres:
      return state.set('list', List(action.payload.genres));

    case constants.genre.loadMovies:
      return state.set('movies', Map(action.payload.movies));

    case constants.genre.unloadMovies:
      return state.set('movies', initialState.get('movies'));

    default:
      return state;
  }
};

export default genre;