import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavTab.css';

function NavTab() {
  return (
    <section className='nav'>
      <div className='nav__wrapper'>
        <nav className='nav__list'>
          <Link to='#aboutProject' className='nav__item'>О проекте</Link>
          <Link to='#techs' className='nav__item'>Технологии</Link>
          <Link to='#aboutMe' className='nav__item'>Студент</Link>
        </nav>
      </div>
    </section>
  );
}

export default NavTab;