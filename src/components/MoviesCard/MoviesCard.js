import React from "react";
import { Link } from "react-router-dom";
import './MoviesCard.css';

function MoviesCard(props) {
  const [isSaved, setIsSaved] = React.useState(false);

  const handleSaveClick = () => {
    setIsSaved(isSaved ? false : true);
    if (isSaved) {
      props.onDeleteMovie(props.card);
    } else {
      props.onSaveMovie(props.card);
    }
  }

  
  return (
    <div className="card">
      <div className="card__head">
        <div className="card__info">
          <h2 className="card__title">{props.name}</h2>
          <p className="card__duration">{`${Math.floor(props.duration / 60)}ч ${props.duration % 60}м`}</p>
        </div>
        {props.isSavedMoviesPage ? 
          <button className="card__close-button"></button> :
          <button className={`card__button ${isSaved ? 'card__button_active' : ''}`} onClick={handleSaveClick}></button>
        }
      </div>
      <Link to={{pathname: `${props.trailer}`}} target='_blank'>
        <img className="card__image" src={props.image} alt="Постер фильма" />
      </Link>
    </div>
  )
}

export default MoviesCard;
