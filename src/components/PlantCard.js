import React,{useState} from "react";

function PlantCard({plant}) {
const {name, image, price} = plant
const [isClicked, setIsClicked] = useState(false)

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {!isClicked ? (
        <button onClick={() => setIsClicked(!isClicked)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setIsClicked(!isClicked)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
