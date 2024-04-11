import React from "react";
import { useState } from "react";
import UpdatePrice from "./UpdatePrice";

function PlantCard({ id, name, image, price, plants, setPlants }) {

  const [ isClicked, setIsClicked ] = useState(true)

  function toggle(){
    setIsClicked(!isClicked)
  }

  function handleDelete(){
    //delete from server
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
    //delete from frontend
    .then(res => res.json())
    .then(setPlants(plants => plants.filter(plant => plant.id !== id)))
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isClicked ? (
        <button onClick={toggle} className="primary">In Stock</button>
      ) : (
        <button onClick={toggle}>Out of Stock</button>
      )}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={handleDelete} className="delete">Delete</button>
      <UpdatePrice id={id} plants={plants} setPlants={setPlants} />
    </li>
  );
}

export default PlantCard;
