import React from "react";
import { Link } from 'react-router-dom';
import arrowPath from '../../images/arrow.svg';
import './Portfolio.css';

function Portfolio() {
  return (
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
  )
}

export default Portfolio;
