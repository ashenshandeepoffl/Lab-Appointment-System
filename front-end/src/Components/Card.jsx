import React from 'react';

const Card = ({ image, name, description }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="text-container">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
