import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onDelete, setPlants}) {
  
//? Renders a plant for every plant in the foundPlants variable
  const plantsListed = plants.map(plant => {
    return <PlantCard onDelete={onDelete} key={plant.id} plant={plant} setPlants={setPlants} renderedPlants={plants}/>
  })


  return (
    <ul className="cards">{plantsListed}</ul>
  );
}

export default PlantList;
