import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from '../App';
import Landing from '../../pages/Landing';
import Genres from "../../pages/Genres";
import List from "../../pages/List";
import Movie from "../../pages/Movie";
import Wishlist from "../../pages/Wishlist";
import { links } from "../../core/constants";

const Root = ({ store, history }) => (
  <BrowserRouter>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route path="/" exact={true} component={Landing}/>
            <Route path={links.genres.path} component={Genres}/>
            <Route path={links.mostPopular.path} exact={true} render={
              () => <List page={links.mostPopular}/>
            }/>
            <Route path={links.topRated.path} exact={true} render={
              () => <List page={links.topRated}/>
            }/>
            <Route path={links.upcoming.path} exact={true} render={
              () => <List page={links.upcoming}/>
            }/>
            <Route path="/wishlist" exact={true} component={Wishlist}/>
            <Route path="/movie/:tmdbId" exact={true} component={Movie}/>
          </Switch>
        </App>
      </ConnectedRouter>
    </Provider>
  </BrowserRouter>
);

export default Root;
