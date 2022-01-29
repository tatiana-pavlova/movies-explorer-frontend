import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutMe.css';
import studentPhoto from '../../images/student.jpg';
import { Link } from 'react-router-dom';
import arrowPath from '../../images/arrow.svg';

function AboutMe() {
  return (
    <section id='aboutMe' className='about-me'>
      <SectionTitle title='Студент' />
      <div className='about-me__wrapper'>
        <img src={studentPhoto} className='about-me__photo' alt='Фото студента' />
        <div className='about-me__full-info'>
          <h3 className='about-me__name'>Татьяна</h3>
          <p className='about-me__position'>Веб-разработчик, 35 лет</p>
          <p className='about-me__info'>Я живу в Санкт-Петербурге. Являюсь выпускницей МГУ факультета иностранных языков 
            и регионоведения. Люблю английский и французский языки, чтение интересных книг, встречи и общение с друзьями. 
            Сторонник активного образа жизни, занимаюсь плаванием. Однажды благодаря Яндекс Практикуму открыла для себя 
            увлекательный мир программирования и осознала, что хочу стать частью этого мира.</p>
            <div className='about-me__links'>
              <Link to={{pathname: 'https://www.facebook.com/tatiana.pavlova.902'}} target='_blank' className='about-me__link'>Facebook</Link>
              <Link to={{pathname: 'https://github.com/tatiana-pavlova'}} target='_blank' className='about-me__link'>Github</Link>
            </div>
        </div>
      </div>
      <div className='portfolio'>
        <h4 className='portfolio__title'>Портфолио</h4>
        <nav>
          <Link to={{pathname: 'https://github.com/tatiana-pavlova/how-to-learn'}} target='_blank' className='portfolio__link'>
            <div className='portfolio__item'>
              <p className='portfolio__name'>Статичный сайт</p>
              <img src={arrowPath} className='portfolio__sign' alt='стрелочка' />
            </div>
          </Link>
          <hr className='portfolio__separate-line' />
          <Link to={{pathname: 'https://github.com/tatiana-pavlova/russian-travel'}} target='_blank' className='portfolio__link'>
            <div className='portfolio__item'>
              <p className='portfolio__name'>Адаптивный сайт</p>
              <img src={arrowPath} className='portfolio__sign' alt='стрелочка' />
            </div>
          </Link>
          <hr className='portfolio__separate-line' />
          <Link to={{pathname: 'https://github.com/tatiana-pavlova/react-mesto-api-full'}} target='_blank' className='portfolio__link'>
            <div className='portfolio__item '>
              <p className='portfolio__name'>Одностраничное приложение</p>
              <img src={arrowPath} className='portfolio__sign' alt='стрелочка' />
            </div>
          </Link>
        </nav>
      </div>
      
    </section>
  );
}

export default AboutMe;