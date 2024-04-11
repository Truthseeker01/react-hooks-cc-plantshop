import { useState } from "react"

function UpdatePrice({ id, plants, setPlants }){

    const [ price, setPrice ] = useState(0)

    function onChange(event){
        setPrice(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        fetch(`http://localhost:6001/plants/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({price: parseFloat(price)})
        })
        .then(res => res.json())
        .then(updatedPlant => {
            const updatedPlants = plants.map(plant => {
            if (plant.id !== updatedPlant.id) {
                return plant
            } else {
                return updatedPlant
            }
        })
        setPlants(updatedPlants)})
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Update Price
                <input type="number" name="updateprice" min= {0} step={0.01} placeholder="New Price ..."
                onChange={onChange} />
            </label>
            <input type="submit" value="Update" />
        </form>
    )
}

export default UpdatePrice