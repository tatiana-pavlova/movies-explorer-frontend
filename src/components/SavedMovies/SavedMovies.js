import React from 'react';
import { temporaryRenderForSavedMovies } from '../../utils/temp';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import closeIconPath from '../../images/close-icon.svg';

function SavedMovies() {
  return (
    <section className='saved-movies'>
      <SearchForm />
      <MoviesCardList cards={temporaryRenderForSavedMovies} btnPath={closeIconPath} btnAlt='крестик' />
      <div className='saved-movies__devider'></div>
    </section>
  );
}

export default SavedMovies;