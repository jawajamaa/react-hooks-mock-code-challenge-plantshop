import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants }) {



  return (
    <ul className="cards">
      {plants.map(plant => (
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
