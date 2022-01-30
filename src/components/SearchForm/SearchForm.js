import React from "react";
import findPath from '../../images/find.svg';
import searchPath from '../../images/search-icon.svg';
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";
import './SearchForm.css';

function SearchForm() {
  return (
    <>
      <form className="search">
        <fieldset className="search__content">
          <img src={searchPath} className="search__icon" alt="Знак поиска - лупа" />
          <input type='search' className="search__input" placeholder="Фильм"></input>
          <button type="submit" className="search__button"><img src={findPath} className="search__sign" alt='Знак поиска - лупа' /></button>
        </fieldset>
        <hr className="search__vertical" />
        <FilterCheckBox />
      </form>
      <hr className="search__line" />
    </>
  )
}

export default SearchForm;