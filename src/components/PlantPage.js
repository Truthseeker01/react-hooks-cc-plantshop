import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants }) {

  const [ searchedPlant, setSearchedPlant ] = useState("")

  const displaySearchedPlant = plants.filter(plant => plant.name.toLowerCase().includes(searchedPlant.toLowerCase()))
  return (
    <main>
      <NewPlantForm setPlants={setPlants}/>
      <Search setSearchedPlant={setSearchedPlant}/>
      <PlantList plants={displaySearchedPlant} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
