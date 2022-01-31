import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import saveIconPath from '../../images/save-icon.svg';
import './Movies.css';
import { temporaryRenderForMovies } from '../../utils/temp';

function Movies() {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList cards={temporaryRenderForMovies} btnPath={saveIconPath} btnAlt='иконка флажок'  />
      <button className='movies__more'>Ещё</button>
    </section>
  );
}

export default Movies;
