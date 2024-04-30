import React,{useState} from "react";
import Edit from "./EditPrice";

function PlantCard({plant, onDelete, setPlants, renderedPlants}) {
const {name, image, price} = plant
const [isClicked, setIsClicked] = useState(false)
const [idOfPlant, setIdOfPlant] = useState('')


function deletePlant() {
  fetch(`http://localhost:6001/plants/${plant.id}`, {
    method: "DELETE",
  })
  .then(res => res.json())
  .then(data => onDelete(plant))
}

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
          {idOfPlant === plant.id ? <Edit setIdOfPlant={setIdOfPlant} plantId={idOfPlant} setPlants={setPlants} renderedPlants={renderedPlants}/> 
          : <p>Price: {price}</p>} 
      {!isClicked ? (
        <button onClick={() => setIsClicked(!isClicked)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setIsClicked(!isClicked)}>Out of Stock</button>
      )}
      <button onClick={deletePlant} className="primary">Delete</button>
      <button onClick={() => setIdOfPlant(plant.id)} className="primary">Edit Price</button>
    </li>
  );
}

export default PlantCard;


