import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <span className="logo">Shorty</span>
      <nav>
        <ul>
          <li>
            <NavLink to="/shorten" activeClassName="active">
              Shorten!
            </NavLink>
          </li>
          <li>
            <NavLink to="/expand">Expand.</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
