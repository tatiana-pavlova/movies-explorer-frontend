import React from "react";
import { NavLink } from "react-router-dom";
import profileIcon from '../../images/icon-profile.svg';
import './Navigation.css';

function Navigation(props) {
  return (
    <>
      <div className={`navigation ${props.isOpen ? '' : 'navigation_closed'}`}>
        <nav className='navigation__menu'>
          <NavLink exact to='/' className='navigation__link' activeClassName='navigation__link_active' onClick={props.onClose}>Главная</NavLink>
          <NavLink to='/movies' className='navigation__link' activeClassName='navigation__link_active' onClick={props.onClose}>Фильмы</NavLink>
          <NavLink to='/saved-movies' className='navigation__link' activeClassName='navigation__link_active' onClick={props.onClose}>Сохранённые фильмы</NavLink>
        </nav>
        <div className='navigation__profile'>
          <div className='navigation__profile-wrapper'>
            <NavLink to='/profile' className='navigation__profile-link' activeClassName='navigation__profile-link_active' onClick={props.onClose}>Аккаунт</NavLink>
            <button className='navigation__ico-wrapper'><img src={profileIcon} alt='иконка профайла'/></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation;
