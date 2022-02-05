import React from 'react';
import { temporaryRenderForSavedMovies } from '../../utils/temp';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies() {
  return (
    <section className='saved-movies'>
      <SearchForm />
      <MoviesCardList cards={temporaryRenderForSavedMovies} isSavedMoviesPage={true} />
      <div className='saved-movies__devider'></div>
    </section>
  );
}

export default SavedMovies;
