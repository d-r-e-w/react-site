import React from 'react';
import { connect } from 'react-redux';
import MovieListItem from "../../components/MovieListItem";
import {getMovies} from "../../core/modules/movie/movieActions";
import Preloader from "../../components/Preloader";

class List extends React.Component {
  componentWillMount() {
    this.props.onLoadMovies(this.props.page.endpoint);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.page.path !== nextProps.page.path) {
      nextProps.onLoadMovies(nextProps.page.endpoint);
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-3">
          <div className="title">{ this.props.page.title }</div>
        </div>

        <div className="col-sm-9 col-offset-sm-3">
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movie.get('list'),
});

const mapDispatchToProps = dispatch => ({
  onLoadMovies: (endpoint) => dispatch(getMovies(endpoint)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);