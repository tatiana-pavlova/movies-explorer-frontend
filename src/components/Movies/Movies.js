import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import saveIconPath from '../../images/save-icon.svg';
import saveIconActivePath from '../../images/save-icon-active.svg';
import './Movies.css';
import { temporaryRenderForMovies } from '../../utils/temp';

function Movies(props) {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList cards={temporaryRenderForMovies} btnPath={props.isSaved ? saveIconActivePath : saveIconPath} btnAlt='иконка флажок'  />
      <button className='movies__more'>Ещё</button>
    </section>
  );
}

export default Movies;
