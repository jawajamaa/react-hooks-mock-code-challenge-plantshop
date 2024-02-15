import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants, searchInput }) {

const filteredPlants = plants.filter(plant => {
  return plant.name.toLowerCase().includes(searchInput.toLowerCase())
})


  return (
    <ul className="cards">
      {filteredPlants.map(plant => (
        <PlantCard 
        key = { plant.id }
        name = { plant.name }
        img = { plant.image }
        price = { plant.price }
        />
      ))
      }
    
    </ul>
  );
}

export default PlantList;
