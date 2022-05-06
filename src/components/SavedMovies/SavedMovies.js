import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';

function SavedMovies(props) {
  const savedMovies = React.useContext(SavedMoviesContext);
  const [moviesForRender, setMoviesForRender] = React.useState([]);
  
  React.useEffect (() => {
    setMoviesForRender(savedMovies);
  },[savedMovies]);


  const handleSearchMovies = (keyWords, isShortFilm) => {
    setMoviesForRender(props.filterMovies(savedMovies, keyWords, isShortFilm))
  }
  
    
  return (
    <section className='saved-movies'>
      <SearchForm onSearchSavedMovies={handleSearchMovies} isSavedMoviesPage={true} />
      <MoviesCardList cards={moviesForRender} isSavedMoviesPage={true} onDeleteMovie={props.onDeleteMovie}
          searchInfoBox={props.searchInfoBox} />
      <div className='saved-movies__devider'></div>
    </section>
  );
}


export default SavedMovies;
