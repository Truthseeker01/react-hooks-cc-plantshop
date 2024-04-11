import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants}) {

  const mappedPlants = plants.map(plant => <PlantCard key={plant.id} id={plant.id} image={plant.image} name={plant.name} price={plant.price} plants={plants} setPlants={setPlants} />)

  return (
    <ul className="cards">{mappedPlants}</ul>
  );
}

export default PlantList;
