import { useState } from "react";
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Card = ({ header, image, content, date, onClickFunction }) => {
  return (
    <div className="card-container" onClick={onClickFunction}>
      <div className="card-header">
        <FontAwesomeIcon icon={faUser} />{" "}
        <span className="card-title">{header}</span>
        <br />
        <span>{date.toLocaleDateString()}</span>
      </div>
      <div className="card-content">
        <img className="card-image" src={image} />
      </div>
    </div>
  );
};

export default Card;
