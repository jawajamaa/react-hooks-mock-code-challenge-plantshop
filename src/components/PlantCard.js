import React, { useState } from "react";

function PlantCard({ name, img, price }) {
  const [isInStock, setIsInStock] = useState(true);
  
  function handleClick() {
    setIsInStock(!isInStock)
  }

  return (
    <li className="card">
      <img src={ img } alt={ name } />
      <h4>{ name }</h4>
      <p>Price: { price }</p>
      {isInStock ? (
        <button 
        className = "primary"
        onClick = { handleClick }
        >In Stock</button>
      ) : (
        <button
        className = "secondary"
        onClick = { handleClick }
        >Sold Out!</button>
      )}
    </li>
  );
}

export default PlantCard;
