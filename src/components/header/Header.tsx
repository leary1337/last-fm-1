import React from 'react';

import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <a href='/' className='header__logo'>
        <img className='header__logo__image' src={logo} alt='LAST FM' />
      </a>
      <nav className='header__nav'>
        <ul className='header__navItems'>
          <li className='header__navItem'><a className='link' href='search'>Search</a></li>
          <li className='header__navItem'><a className='link' href='/'>Home</a></li>
          <li className='header__navItem'><a className='link' href='#'>Live</a></li>
          <li className='header__navItem'><a className='link' href='#'>Music</a></li>
          <li className='header__navItem'><a className='link' href='#'>Charts</a></li>
          <li className='header__navItem'><a className='link' href='#'>Events</a></li>
          <li className='header__navItem'><a className='link' href='#'>Features</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
