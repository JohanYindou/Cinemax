import React from 'react';
import { Link } from 'react-router-dom';
import cinemaxLogo from '../assets/cinemax-lg.png';

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img src={cinemaxLogo} alt="" width="150" />
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/">Recherche</Link>
        </li>
        <li className="nav-item">
          <Link to="/favorites">Favoris</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
