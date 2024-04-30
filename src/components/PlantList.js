import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onDelete, setPlants}) {
  

  const plantsListed = plants.map(plant => {
    return <PlantCard onDelete={onDelete} key={plant.id} plant={plant} setPlants={setPlants} renderedPlants={plants}/>
  })


  return (
    <ul className="cards">{plantsListed}</ul>
  );
}

export default PlantList;
