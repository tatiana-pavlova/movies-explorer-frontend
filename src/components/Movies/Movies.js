import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';


function Movies(props) {
  
  return (
    <section className='movies'>
      <SearchForm onSearchMovies={props.onSearchMovies} />
      <MoviesCardList cards={props.currentCards} isLoading={props.isLoading} isSavedMoviesPage={false}
                      searchInfoBox={props.searchInfoBox} />
      <button className={`movies__more ${props.currentCards.length < props.selectedMovies.length ? '' : 'movies__more_invisible'}`}
              onClick={props.onLoadMore}>Ещё</button>
    </section>
  );
}

export default Movies;
