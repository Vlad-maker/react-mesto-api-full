import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner === currentUser._id;
  const isLiked = props.card.likes.some((i) => i === currentUser._id);
  
  const cardDeleteButtonClassName = `cards__delete ${
    isOwn ? "" : "cards__delete_inactive"
  }`;
  const cardLikeButtonClassName = `cards__like ${
    isLiked ? "cards__like_active" : ""
  }`;

  function handleClick() {
    props.CardClick(props.card);
  }
  function handleLikeClick() {
    props.onCardLike(props.card);
  }
  function handleDeleteClick() {
    props.onCardDelete(props.card._id);
  }

  return (
    <div className="cards__item">
      <img className="cards__img" src={props.card.link} alt="" onClick={handleClick}></img>
      <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
      <div className="cards__info">
        <h2 className="cards__text">{props.card.name}</h2>
        <div className="cards__container">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
          <p className="cards__like_number">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
