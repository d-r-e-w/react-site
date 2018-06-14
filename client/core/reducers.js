import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import movie from './modules/movie/movieReducer';
import genre from './modules/genre/genreReducer';
import settings from './modules/settings/settingsReducer';
import wishlist from './modules/wishlist/wishlistReducer';

const rootReducer = combineReducers({
  routing,
  movie,
  genre,
  settings,
  wishlist,
});

export default rootReducer;
