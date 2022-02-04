import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  let history = useHistory();
  return (
    <>
      <h2 className='page-not-found__title'>404</h2>
      <p className='page-not-found__info'>Страница не найдена</p>
      <div className='page-not-found__wrapper'>
        <Link onClick={() => {history.goBack()}} className='page-not-found__link'>Назад</Link>
      </div>
    </>
  );
}

export default PageNotFound;
