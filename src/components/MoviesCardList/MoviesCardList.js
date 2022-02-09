import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

import './MoviesCardList.css';


function MoviesCardList(props) {
  return (
    <>
      <div className="card-list">
        {props.cards.map((card, index) => {
          return (<MoviesCard key={index} isSavedMoviesPage={props.isSavedMoviesPage} />)
        })}
      </div>
    </>
    
  )
}

export default MoviesCardList;