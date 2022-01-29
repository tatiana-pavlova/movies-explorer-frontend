import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import logoPath from '../../images/logo.svg';
import profileIcon from '../../images/icon-profile.svg';
import './Header.css';

function Header() {
  return (
    <>
      <Route exact path='/'>
        <header className='header header_theme_dark'>
          <Link to='/'><img src={logoPath} alt='Логотип BeatFilm' className='header__logo'/></Link>
          <div>
            <Link to='/signup' className='header__link'>Регистрация</Link>
            <Link to='/signin' className='header__link'><button className='header__button'>Войти</button></Link>
          </div>
        </header>
      </Route>
      <Route path={['/movies', '/saved-movies', '/profile']}>
        <header className='header header_theme_light'>
          <Link to='/'><img src={logoPath} alt='Логотип BeatFilm' className='header__logo'/></Link>
          <div className='header__menu'>
            <nav className='header__nav'>
              <NavLink to='/movies' className='header__nav-link' activeClassName='header__nav-link_active'>Фильмы</NavLink>
              <NavLink to='/saved-movies' className='header__nav-link' activeClassName='header__nav-link_active'>Сохранённые фильмы</NavLink>
            </nav>
            <div className='header__profile'>
              <div className='header__profile-wrapper'>
                <NavLink to='/profile' className='header__profile-link' activeClassName='header__profile-link_active'>Аккаунт</NavLink>
                <button className='header__ico-wrapper'><img src={profileIcon} alt='иконка профайла' className='header__ico'/></button>
              </div>
              {/* <NavLink to='/profile' className='header__profile-link' activeClassName='header__nav-link_active'>
                <div className='header__profile-wrapper'>
                  <p className='header__profile-text'>Аккаунт</p>
                  <div className='header__ico-wrapper'>
                    <img src={profileIcon} alt='иконка профайла' className='header__ico'/>
                  </div>
                </div>
                
              </NavLink> */}
            </div>
          </div>
          <div className='header__burger'>
            <span className='header__burger-sign'></span>
          </div>
        </header>
      </Route>
    </>
  );
}

export default Header;