import React from 'react';
import history from '../../core/history';

const MovieListItem = ({ id, poster, rating, title }) => {
  return (
    <div onClick={() => history.push(`/movie/${id}`)} className="col-sm-2">
      <div className="movie-list-item" style={{ backgroundImage: `url('${poster}')`}}>
        <span className="movie-list-item__rating">{rating}</span>
        <span className="movie-list-item__name">{title}</span>
      </div>
    </div>
  );
};

export default MovieListItem;
