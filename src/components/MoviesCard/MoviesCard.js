import React from "react";
import samplePicturePath from '../../images/sample-picture.png';
import './MoviesCard.css';

function MoviesCard(props) {
  return (
    <div className="card">
      <div className="card__head">
        <div className="card__info">
          <h2 className="card__title">33 слова о дизайне</h2>
          <p className="card__duration">1ч 47м</p>
        </div>
        <button className="card__button"><img src={props.btnPath} className="card__btn-icon" alt={props.btnAlt} /></button>
      </div>
      <img className="card__image" src={samplePicturePath} alt="Постер фильма" />
    </div>
  )
}

export default MoviesCard;
