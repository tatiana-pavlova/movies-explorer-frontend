import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';

function SavedMovies(props) {
  const savedMovies = React.useContext(SavedMoviesContext);
  
  return (
    <section className='saved-movies'>
      <SearchForm onSearchMovies={props.onSearchMovies} moviesPool={savedMovies} />
      <MoviesCardList cards={props.selectedSavedMovies} isSavedMoviesPage={true} onDeleteMovie={props.onDeleteMovie}
          searchInfoBox={props.searchInfoBox} />
      <div className='saved-movies__devider'></div>
    </section>
  );
}

export default SavedMovies;
