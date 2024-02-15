import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants }) {

  console.log(plants)

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList 
      plants = { plants }
      setPlants = { setPlants }
      />
    </main>
  );
}

export default PlantPage;
