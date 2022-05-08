import React from "react";
import './FilterCheckBox.css';

function FilterCheckBox(props) {

  React.useEffect (() => {
    if (!props.isSavedMoviesPage) {
      const checkbox = document.querySelector('.switch__box');
      checkbox.checked = JSON.parse(localStorage.getItem('isShortFilm'));
    }
  }, [])
    
  const handleClick = (e) => {
    let isChecked = e.target.checked;
        
    props.onFilterCheckbox(isChecked);
  }

  return (
    <div className='filter'>
      <label className='switch'>
        <input type='checkbox' className='switch__box' onClick={handleClick} />
        <span className="switch__slider"></span>
      </label>
      <p className='filter__name'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckBox;
