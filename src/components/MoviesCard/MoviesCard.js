import React from "react";
import './MoviesCard.css';

function MoviesCard(props) {
  const [isSaved, setIsSaved] = React.useState(false);

  const handleSaveClick = () => {
    setIsSaved(isSaved ? false : true);
  }

  return (
    <div className="card">
      <div className="card__head">
        <div className="card__info">
          <h2 className="card__title">{props.name}</h2>
          <p className="card__duration">1ч 47м</p>
        </div>
        {props.isSavedMoviesPage ? 
          <button className="card__close-button"></button> :
          <button className={`card__button ${isSaved ? 'card__button_active' : ''}`} onClick={handleSaveClick}></button>
        }
      </div>
      <img className="card__image" src={props.image} alt="Постер фильма" />
    </div>
  )
}

export default MoviesCard;
