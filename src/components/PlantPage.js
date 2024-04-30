import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const API = `http://localhost:6001/plants`

function PlantPage() {
const [plants, setPlants] = useState([])
const [search, setSearch] = useState('')

//? Fetch data from API to setPlants state
useEffect(() => {
fetch(API)
.then(res => res.json())
.then(data => setPlants(data))
}, [])

//? Adds new plant to db.json with POST method and updates the plants state w/ added plant
function handleNewPlant(newPlant) { //! Passed up from NewPlantForm
fetch(API, {
  method: "POST",
  headers: {"Content-Type": "Application/JSON",
},
body: JSON.stringify(newPlant)
})
.then(res => res.json())
.then(data => setPlants([...plants, data]))
}

//? Finds the plants that match the search input (passed into PlantList to be rendered)
const foundPlants = plants.filter(plant => {
  return plant.name.toLowerCase().includes(search.toLowerCase())
})

//? Sets plants state without using the deleted plant
function handleDelete(plantDeleted) {   //! Passed up from PlantList
  const updatedPlants = plants.filter(plant => plant.id !== plantDeleted.id)
  setPlants(updatedPlants)
}



  return (
    <main>
      <NewPlantForm onSubmit={handleNewPlant}/>
      <Search setSearch={setSearch} searchInput={search}/>
      <PlantList onDelete={handleDelete} plants={foundPlants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
