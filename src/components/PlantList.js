import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const plantsListed = plants.map(plant => {
    return <PlantCard key={plant.id} plant={plant} />
  })


  return (
    <ul className="cards">{plantsListed}</ul>
  );
}

export default PlantList;
