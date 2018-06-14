import React from 'react';
import { connect } from 'react-redux';
import MovieListItem from "../../components/MovieListItem";
import Preloader from "../../components/Preloader";
import {getMovies} from "../../core/modules/genre/genreActions";

class GenreMovies extends React.Component {
  componentWillMount() {
    this.props.onLoadGenreMovies(this.props.match.params.genreId);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.genreId !== nextProps.match.params.genreId) {
      this.props.onLoadGenreMovies(this.props.match.params.genreId);
    }
  }
  render() {
    return (
      <div className="movie-list">
        <div className="row">
          { (this.props.movies.size === 0)
            ? <Preloader />
            :
            this.props.movies.entrySeq().map(
              (movie) => {
                const id = movie[0];
                const {poster, rating, title} = movie[1];

                return <MovieListItem
                  key={id}
                  id={id}
                  poster={poster}
                  rating={rating}
                  title={title}
                />
              }
            )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.genre.get('movies'),
});

const mapDispatchToProps = dispatch => ({
  onLoadGenreMovies: (genreId) => dispatch(getMovies(genreId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenreMovies);