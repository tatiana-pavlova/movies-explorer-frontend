import React from 'react';
import './Promo.css';
import logoPracticumPath from '../../images/practicum-logo.svg';

function Promo() {
  return (
    <section className='promo'>
      <img className='promo__logo' src={logoPracticumPath} alt='Логотип Яндекс Практикум' />
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
    </section>
  );
}

export default Promo;