import { Map } from 'immutable';
import { constants } from "../../constants";

const initialState = Map({
  list: Map({}),
  info: Map({
    loaded: false,
  }),
});

const movie = (state = initialState, action) => {
  switch (action.type) {
    case constants.movie.loadMovies:
      return state.set('list', Map(action.payload.movies));

    case constants.movie.loadMovie:
      return state.set('info', Map(action.payload.movie));

    case constants.movie.unloadMovie:
      return state.set('info', initialState.get('info'));

    default:
      return state;
  }
};

export default movie;