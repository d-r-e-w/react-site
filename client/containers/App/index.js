import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { navigation } from "../../core/constants";

class App extends React.Component {
  render() {
    return (
      <div className="app-image" style={{ backgroundImage: `url('${this.props.backgroundImage}')`}}>
        <div className="app-colors">
          <div className="app-container">
            <div className="header">
              <Link to="/" className="header__logo">MOVIES</Link>

              {navigation.header.map(({path, title}) => {
                return <NavLink
                  key={`nav_${path}`}
                  to={path}
                  activeClassName="is-active"
                  className={`header__action`}
                >
                  {title}
                </NavLink>;
              })}
            </div>

            <div className="container-fluid">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPath: state.routing.location.pathname,
  backgroundImage: state.settings.get('backgroundImage'),
});

export default connect(
  mapStateToProps,
)(App);
