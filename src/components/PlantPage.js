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




  return (
    <main>
      <NewPlantForm onSubmit={handleNewPlant}/>
      <Search setSearch={setSearch} searchInput={search}/>
      <PlantList plants={foundPlants}/>
    </main>
  );
}

export default PlantPage;
