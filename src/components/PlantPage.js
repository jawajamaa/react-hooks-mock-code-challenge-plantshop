import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  const baseUrl = "http://localhost:6001/plants/"

  useEffect(()=> {
    fetch(baseUrl)
    .then((r) => r.json())
    .then(plants => setPlants(plants))
  }, [])
  console.log(plants)

  function onFormSubmit(data) {
    setPlants({...plants, data})
  }

  return (
    <main>
      <NewPlantForm 
      baseUrl = { baseUrl }
      onFormSubmit = { onFormSubmit }
      />
      <Search />
      <PlantList 
      plants = { plants }
      setPlants = { setPlants }
      />
    </main>
  );
}

export default PlantPage;
