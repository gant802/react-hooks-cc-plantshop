import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const API = `http://localhost:6001/plants`

function PlantPage() {
const [plants, setPlants] = useState([])
const [search, setSearch] = useState('')

useEffect(() => {
fetch(API)
.then(res => res.json())
.then(data => setPlants(data))
}, [])

function handleNewPlant(newPlant) {
fetch(API, {
  method: "POST",
  headers: {"Content-Type": "Application/JSON",
},
body: JSON.stringify(newPlant)
})
.then(res => res.json())
.then(data => setPlants([...plants, data]))
}

const foundPlants = plants.filter(plant => {
  return plant.name.toLowerCase().includes(search.toLowerCase())
})

function handleDelete(plantDeleted) {
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
