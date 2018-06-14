import React from 'react';
import { connect } from 'react-redux';
import MovieListItem from "../../components/MovieListItem";

class Wishlist extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-3">
          <div className="title">Wishlist</div>
        </div>

        <div className="col-sm-9 col-offset-sm-3">
          <div className="movie-list">
            <div className="row">
                {
                  this.props.movies.size === 0
                  ? <div className='genre-title'>Wishlist is empty.</div>
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
  movies: state.wishlist,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Wishlist);