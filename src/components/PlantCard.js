import React,{useState} from "react";
import Edit from "./EditPrice";

function PlantCard({plant, onDelete, setPlants, renderedPlants}) {

  //? Destructuring plant object and setting state for stocked button and idOfPlant for Edit Price button 
const {name, image, price} = plant
const [isStocked, setIsStocked] = useState(false)
const [idOfPlant, setIdOfPlant] = useState('')


//? Deletes specific plant and passes up the plant that was deleted to the parent component 
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
      {!isStocked ? (
        <button onClick={() => setIsStocked(!isStocked)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setIsStocked(!isStocked)}>Out of Stock</button>
      )}
      <button onClick={deletePlant} className="primary">Delete</button>
      <button onClick={() => setIdOfPlant(plant.id)} className="primary">Edit Price</button>
    </li>
  );
}

export default PlantCard;


