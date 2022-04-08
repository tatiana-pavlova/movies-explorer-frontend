import React from 'react';
import { Link, Route } from 'react-router-dom';
import logoPath from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

import './Header.css';

function Header(props) {
  if (props.isLoggedIn) {
    return (
      <Route exact path={['/movies', '/saved-movies', '/profile', '/signin', '/signup', '/']}>
        <header className='header header_theme_light'>
          <Link to='/'><img src={logoPath} alt='Логотип BeatFilm' className='header__logo'/></Link>
          <Navigation />
          <div className='header__burger' onClick={props.onBurgerClick}>
            <span className='header__burger-sign'></span>
          </div>
        </header>
      </Route>
    )
  } else {
    return (
      <Route exact path={['/movies', '/saved-movies', '/profile', '/signin', '/signup', '/']}>
        <header className='header header_theme_dark'>
          <Link to='/'><img src={logoPath} alt='Логотип BeatFilm' className='header__logo'/></Link>
          <div>
            <Link to='/signup' className='header__link'>Регистрация</Link>
            <Link to='/signin' className='header__link'><button className='header__button'>Войти</button></Link>
          </div>
        </header>
      </Route>
    )
  }
}

export default Header;
