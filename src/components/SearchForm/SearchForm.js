import React from "react";
import findPath from '../../images/find.svg';
import searchPath from '../../images/search-icon.svg';
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";
import './SearchForm.css';

function SearchForm(props) {
  const [keyWords, setKeyWords] = React.useState('');
  const [isShortFilm, setIsShortFilm] = React.useState(false);

  React.useEffect (() => {
    if (!props.isSavedMoviesPage) {
      const input = document.querySelector('.search__input');
      
      input.value = JSON.parse(localStorage.getItem('keyWords'));
      setKeyWords(JSON.parse(localStorage.getItem('keyWords')));
      setIsShortFilm(JSON.parse(localStorage.getItem('isShortFilm')));
    }
  }, [])

  
  function handleKeyWordsChange(e) {
    setKeyWords(e.target.value);
  }

  
  function handleFilterCheckbox (checkboxValue) {
    setIsShortFilm(checkboxValue);
  }


  function handleSubmit(e) {
    e.preventDefault();
    
    if(!props.isSavedMoviesPage) {
      props.onSearchMovies(props.moviesPool, keyWords, isShortFilm);
    } else {
      props.onSearchSavedMovies(keyWords, isShortFilm);
    }
  }


  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <fieldset className="search__content">
          <img src={searchPath} className="search__icon" alt="Знак поиска - лупа" />
          <input type='search' className="search__input" onChange={handleKeyWordsChange} 
                 placeholder="Фильм" ></input>
          <button type="submit" className="search__button">
            <img src={findPath} className="search__sign" alt='Знак поиска - лупа' />
          </button>
        </fieldset>
        <hr className="search__vertical" />
        <FilterCheckBox onFilterCheckbox={handleFilterCheckbox} isSavedMoviesPage={props.isSavedMoviesPage} />
      </form>
      <hr className="search__line" />
    </>
  )
}

export default SearchForm;
