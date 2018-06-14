export const constants = {
  movie: {
    loadMovies: 'movie.LOAD_MOVIES',
    getMovies: 'movie.GET_MOVIES',
    getMovie: 'movie.GET_MOVIE',
    loadMovie: 'movie.LOAD_MOVIE',
    unloadMovie: 'movie.UNLOAD_MOVIE',
  },
  genre: {
    getGenres: 'genre.GET_GENRES',
    loadGenres: 'genre.LOAD_GENRES',
    getMovies: 'genre.GET_MOVIES',
    loadMovies: 'genre.LOAD_MOVIES',
    unloadMovies: 'genre.UNLOAD_MOVIES',
  },
  settings: {
    setBackground: 'background.SET',
    unsetBackground: 'background.UNSET',
  },
  wishlist: {
    addMovie: 'wishlist.ADD',
    removeMovie: 'wishlist.REMOVE',
    getMovies: 'wishlist.GET',
  },
};

export const baseURL = 'https://api.themoviedb.org/3';
const apiKey = '7bd61d5db2476d1307ff393ff142924b';

export const endpoints = {
    tmdb: {
        endpoint: {
            topRated: `/movie/top_rated?api_key=${apiKey}`,
            mostPopular: `/movie/popular?api_key=${apiKey}`,
            upcoming: `/movie/upcoming?api_key=${apiKey}`,
            movie: tmdbId => `/movie/${tmdbId}?api_key=${apiKey}`,
            genres: `/genre/movie/list?api_key=${apiKey}`,
            genre: genre => `/genre/${genre}/movies?api_key=${apiKey}`,
            search: query => `search/movie?query=${query}&api_key=${apiKey}`,
        }
    },
};


export const links = {
    genres: {
        path: '/genres',
        title: 'Genres',
    },
    mostPopular: {
        path: '/most-popular',
        title: 'Most Popular',
        endpoint: endpoints.tmdb.endpoint.mostPopular,
    },
    topRated: {
        path: '/top-rated',
        title: 'Top Rated',
        endpoint: endpoints.tmdb.endpoint.topRated,
    },
    upcoming: {
        path: '/upcoming',
        title: 'Upcoming',
        endpoint: endpoints.tmdb.endpoint.upcoming,
    },
};

export const navigation = {
    header: [
        links.genres,
        links.mostPopular,
        links.topRated,
        links.upcoming,
    ],
};

export const settings = {
    backgroundImage: 'https://image.tmdb.org/t/p/original/AdYJMNhcXVeqjRenSHP88oaLCaC.jpg',
};
