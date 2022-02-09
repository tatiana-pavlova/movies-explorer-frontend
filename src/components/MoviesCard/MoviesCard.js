import React from "react";
import samplePicturePath from '../../images/sample-picture.png';
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
          <h2 className="card__title">33 слова о дизайне</h2>
          <p className="card__duration">1ч 47м</p>
        </div>
        {props.isSavedMoviesPage ? 
          <button className="card__close-button"></button> :
          <button className={`card__button ${isSaved ? 'card__button_active' : ''}`} onClick={handleSaveClick}></button>
        }
      </div>
      <img className="card__image" src={samplePicturePath} alt="Постер фильма" />
    </div>
  )
}

export default MoviesCard;
