import { useState } from "react";
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Card = ({ header, image, content, date }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <FontAwesomeIcon icon={faUser} />{" "}
        <span className="card-title">{header}</span>
        <br />
        {date.toLocaleDateString()}
      </div>
      <div className="card-content">
        <img className="card-image" src={image} />
      </div>
    </div>
  );
};

export default Card;
