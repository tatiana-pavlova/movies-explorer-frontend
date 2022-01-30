import React from "react";
import './FilterCheckBox.css';

function FilterCheckBox() {
  return (
    <div className='filter'>
      <label className='switch'>
        <input type='checkbox' className='switch__box' />
        <span className="switch__slider"></span>
      </label>
      <p className='filter__name'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckBox;