import React from 'react';
import {connect} from "react-redux";
import {getGenres} from "../../core/modules/genre/genreActions";
import Genre from "../../components/Genre";
import GenreMovies from "../../pages/GenreMovies";
import Preloader from "../../components/Preloader";
import {Route, Switch} from "react-router";

class Genres extends React.Component {
  componentWillMount() {
    this.props.onLoadGenres();
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-3">
          <div className="list">
            { (this.props.genres.size === 0)
              ? <Preloader />
              :
              this.props.genres.entrySeq().map(
                (genre) => {
                  const {id, name} = genre[1];

                  return <Genre key={id} id={id} name={name}/>
                }
              )
            }
          </div>
        </div>

        <div className="col-sm-9">
          <div className="genre-title">
            <Switch>
              <Route path={`${this.props.match.url}/:genreId`} exact={true} component={GenreMovies}/>
              <Route render={() => 'Please select a genre'}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  genres: state.genre.get('list'),
});

const mapDispatchToProps = dispatch => ({
  onLoadGenres: () => dispatch(getGenres()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Genres);