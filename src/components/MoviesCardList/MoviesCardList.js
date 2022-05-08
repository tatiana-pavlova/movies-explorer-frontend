import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import './MoviesCardList.css';


function MoviesCardList(props) {
  return (
    <div className="card-list">
      {props.isLoading && <Preloader />}
      {props.cards.length === 0
      ? <p className="card-list__not-found">{props.searchInfoBox}</p>
      : <div className="card-list__cards">
          {props.cards.map((card) => {
            return (<MoviesCard key={card.movieId} card={card}  isSavedMoviesPage={props.isSavedMoviesPage} 
              onSaveMovie={props.onSaveMovie} onDeleteMovie={props.onDeleteMovie} />)
          })
          }
        </div>
      }
    </div>
  )
}

export default MoviesCardList;