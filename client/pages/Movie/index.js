import React from 'react';
import { connect } from 'react-redux';
import {getMovie} from "../../core/modules/movie/movieActions";
import Preloader from "../../components/Preloader";
import {Rating} from "../../components/Rating";
import {setBackground, unsetBackground} from "../../core/modules/settings/settingsActions";
import {addMovie, removeMovie} from "../../core/modules/wishlist/wishlistActions";

class Movie extends React.Component {
  componentWillMount() {
    this.props.onLoad(this.props.match.params.tmdbId);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.movie.get('backgroundImage') !== nextProps.movie.get('backgroundImage')) {
      nextProps.changeBackground(nextProps.movie.get('backgroundImage'));
    }
  }
  componentWillUnmount() {
    this.props.resetBackground();
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <div className="row">
            {(!this.props.movie.get('loaded'))
              ? <Preloader/>
              :
                <div>
                  <div className="col-sm-4">
                    <div className="movie-list-item"
                         style={{ backgroundImage: `url('${this.props.movie.get('poster')}')`}}>
                      <span className="movie-list-item__rating">{this.props.movie.get('rating')}</span>
                    </div>
                  </div>

                  <div className="col-sm-8">
                    <div className="release-date">
                    Release date: <strong>{ this.props.movie.get('releaseDate') }</strong>
                    </div>

                    <div className="title">{ this.props.movie.get('title') }</div>

                    <div className="description">{ this.props.movie.get('description') }</div>

                    <Rating score={this.props.movie.get('rating')}/>

                    { !this.props.wishlist || !this.props.wishlist.has(this.props.match.params.tmdbId)
                      ?
                        <a
                          onClick={() => this.props.addToWishlist(this.props.match.params.tmdbId, this.props.movie)}
                          className="btn"
                        >
                          Add to wishlist
                        </a>
                      :
                        <a
                          onClick={() => this.props.removeFromWishlist(this.props.match.params.tmdbId)}
                          className="btn"
                        >
                          Remove from wishlist
                        </a>
                    }
                  </div>
                </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie.get('info'),
  wishlist: state.wishlist,
});

const mapDispatchToProps = dispatch => ({
  onLoad: (tmdbId) => dispatch(getMovie(tmdbId)),
  changeBackground: (backgroundImage) => dispatch(setBackground(backgroundImage)),
  resetBackground: () => dispatch(unsetBackground()),
  addToWishlist: (id, movie) => dispatch(addMovie(id, movie)),
  removeFromWishlist: (id) => dispatch(removeMovie(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movie);