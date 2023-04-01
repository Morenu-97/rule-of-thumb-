import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="pictures">
      <img src={props.picture} />
      <div className="title">
        <button className="icon-button-down">
          <img src="assets/img/thumbs-down.svg" alt="thumbs down"></img>
        </button>
        <p className="card-title">{props.name}</p>
      </div>
      <p className="card-description">{props.description}</p>
      <p className="category">{props.category}</p>
      <div>
        <button className="icon-button-up">
          <img src="assets/img/thumbs-up.svg" alt="thumbs up"></img>
        </button>
        <button className="icon-button-down" aria-label="thumbs down">
          <img src="assets/img/thumbs-down.svg" alt="thumbs down"></img>
        </button>
        <button className="icon-vote">Vote now</button>
      </div>
    </div>
  );
}

export default Card;
