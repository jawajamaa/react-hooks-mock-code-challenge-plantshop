import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);

  const baseUrl = "http://localhost:6001/plants/"

  useEffect(()=> {
    fetch(baseUrl)
    .then((r) => r.json())
    .then(plants => setPlants(plants))
  }, [])

  console.log(plants)

  return (
    <div className="app">
      <Header />
      <PlantPage 
      plants = { plants }
      setPlants = { setPlants }
      />
    </div>
  );
}

export default App;
