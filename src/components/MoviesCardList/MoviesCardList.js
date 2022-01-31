import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

import './MoviesCardList.css';


function MoviesCardList(props) {
  return (
    <div className="card-list">
      {props.cards.map((card) => {
        return (<MoviesCard btnPath={props.btnPath} btnAlt={props.btnAlt} />)
      })}
    </div>
  )
}

export default MoviesCardList;