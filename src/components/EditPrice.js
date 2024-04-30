import React, {useState} from "react"



function Edit({plantId, setIdOfPlant, setPlants, renderedPlants}) {
    const [newPlantPrice, setNewPlantPrice] = useState({
      price: ""
    })
    
    function handleChangePrice(e) {
      setNewPlantPrice({
        ...newPlantPrice,
        [e.target.name] : e.target.value
      })
      
    }
  
  function handleSubmit() {
    setIdOfPlant("")
    fetch(`http://localhost:6001/plants/${plantId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newPlantPrice),
    })
    .then(res => res.json())
    .then(data => {
      const updatedPlants = renderedPlants.map(plant => {
    return plant.id === data.id ? {...data, price: data.price} : plant
  })
  setPlants(() => [...updatedPlants])
      
    })
  }



    return (
      <>
      <input onChange={(e) => handleChangePrice(e)} 
      name="price" 
      value={newPlantPrice.price} 
      placeholder="Add new price..."
      type="number"/>
      <button onClick={handleSubmit} className="submitNewPrice">Submit</button>
      <button onClick={() => setIdOfPlant("")} className="submitNewPrice">Cancel</button>
      </>
    )
  }

  export default Edit