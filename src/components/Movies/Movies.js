import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import { temporaryRenderForMovies } from '../../utils/temp';

function Movies(props) {
  
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList cards={temporaryRenderForMovies} isSavedMoviesPage={false} />
      <button className='movies__more'>Ещё</button>
    </section>
  );
}

export default Movies;
