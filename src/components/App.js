import React, { useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useState } from "react";

function App() {
  
  const [ plants, setPlants ] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(plants => setPlants(plants))
  }, [])

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} setPlants={setPlants} />
    </div>
  );
}

export default App;
