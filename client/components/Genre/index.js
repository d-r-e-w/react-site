import React from 'react';
import { NavLink } from 'react-router-dom'

const Genre = ({ id, name }) => {
  return (
    <NavLink to={`/genres/${id}`} activeClassName="is-active" className="list-item">{name}</NavLink>
  );
};

export default Genre;