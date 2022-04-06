import React from "react";
import { Link } from "react-router-dom";
import './MoviesCard.css';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';

function MoviesCard(props) {
  const savedMovies = React.useContext(SavedMoviesContext);
  const isSaved = savedMovies.some(movie => movie.movieId === props.card.movieId);

  const handleCheckBoxClick = () => {
    if (isSaved) {
      props.onDeleteMovie(props.card);
    } else {
      props.onSaveMovie(props.card);
    }
  }

  const handleDeleteCard = () => {
    props.onDeleteMovie(props.card);
  }

  
  return (
    <div className="card">
      <div className="card__head">
        <div className="card__info">
          <h2 className="card__title">{props.card.nameRU}</h2>
          <p className="card__duration">{`${Math.floor(props.card.duration / 60)}ч ${props.card.duration % 60}м`}</p>
        </div>
        {props.isSavedMoviesPage ? 
          <button className="card__close-button" onClick={handleDeleteCard}></button> :
          <button className={`card__button ${isSaved ? 'card__button_active' : ''}`} onClick={handleCheckBoxClick}></button>
        }
      </div>
      <Link to={{pathname: `${props.card.trailer}`}} target='_blank'>
        <img className="card__image" src={props.card.image} alt="Постер фильма" />
      </Link>
    </div>
  )
}

export default MoviesCard;
